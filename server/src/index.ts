import express, { urlencoded } from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';

import moduleRouter from './routes/module/module.route';

const mongodbConnectUrl = process.env.MONGO_DB_URL ?? '';

const app = express();

app.use(express.json());
app.use(urlencoded({extended: false}));


app.use('/api/modules', moduleRouter);

mongoose.connect(mongodbConnectUrl)
  .then(() => {
    console.log('Connected!');

    app.listen(4000);
  })
  .catch(error => console.log(error, 'Connected db error'))
