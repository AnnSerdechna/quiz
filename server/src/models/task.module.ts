import mongoose from 'mongoose';

import { quizSchema } from './quiz.module';

export const taskSchema = new mongoose.Schema({
  quiz: [quizSchema],
});

const Task = mongoose.model('Task', taskSchema);

export { Task };