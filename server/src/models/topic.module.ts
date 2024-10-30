import mongoose from 'mongoose';

import { taskSchema } from './task.module';

export const topicSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  tasks: [taskSchema]
});

const Topic = mongoose.model('Topic', topicSchema);

export { Topic };