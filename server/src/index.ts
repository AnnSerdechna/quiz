import express, { urlencoded } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import 'dotenv/config';

import moduleRouter from './routes/module.route';
import topicRouter from './routes/topic.route';

const mongodbConnectUrl = process.env.MONGO_DB_URL ?? '';

const app = express();

app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: false }));

app.use('/api/modules', moduleRouter);
app.use('/api/topics', topicRouter);

mongoose.connect(mongodbConnectUrl)
  .then(() => {
    console.log('Connected!');

    app.listen(4000);
  })
  .catch(error => console.log(error, 'Connected db error'))
