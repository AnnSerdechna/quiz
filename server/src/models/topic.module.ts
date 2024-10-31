import mongoose from 'mongoose';

import { quizSchema } from './quiz.module';

export const topicSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  quiz: [quizSchema]
});

const Topic = mongoose.model('Topic', topicSchema);

export { Topic };