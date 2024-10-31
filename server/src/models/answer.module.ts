import mongoose from 'mongoose';

export const answerSchema = new mongoose.Schema({
  answerText: {
    type: String,
    required: true,
  },
  isCorrect: {
    type: Boolean,
    default: false,
  },
});

const Answer = mongoose.model('Answer', answerSchema);

export { Answer };