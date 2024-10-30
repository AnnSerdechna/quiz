import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config'
import { Module } from './models/module.model';
import { Quiz } from './models/quiz.module';
import { Task } from './models/task.module';

const mongodbConnectUrl = process.env.MONGO_DB_URL ?? '';

const app = express();

app.use(express.json());

app.get('/api/module', async (req: any, res: any) => {
  try {
    const module = await Module.find();
    res.status(200).json(module);
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
});

app.get('/api/quiz', async (req: any, res: any) => {
  try {
    const module = await Task.findOne({ where: { id: "67226e5341e45494c791beca"}});
    res.status(200).json(module);
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
});

// app.delete('/api/module', async (req: any, res: any) => {
//   try {
//     const quiz = await Quiz.deleteMany();
//     res.status(200).json(quiz);
//   } catch (error) {
//     res.status(500).json({ message: error.message })
//   }
// });

app.post('/api/module', async (req, res) => {
  try {
    const module = await Module.create(req.body);
    res.status(200).json(module);
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

mongoose.connect(mongodbConnectUrl)
  .then(() => {
    console.log('Connected!');

    app.listen(4000);
  })
  .catch(error => console.log(error, 'Connected db error'))


