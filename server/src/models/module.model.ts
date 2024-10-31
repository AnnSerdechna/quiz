import mongoose from 'mongoose';

import { topicSchema } from './topic.module';

export const moduleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  topics: [topicSchema]
}, { timestamps: true });

const Module = mongoose.model('Module', moduleSchema);

export { Module };