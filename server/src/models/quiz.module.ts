import mongoose from 'mongoose';

import { answerSchema } from './answer.module';

export const quizSchema = new mongoose.Schema({
  questionText: {
    type: String,
    required: true,
  },
  answers: [answerSchema], 
});

const Quiz = mongoose.model('Quiz', quizSchema);

export { Quiz };
