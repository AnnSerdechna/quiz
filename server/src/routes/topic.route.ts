import express from 'express';
import { getOneTopic } from '../controllers/topic.controller';

const router = express.Router();

router.get('/:id', getOneTopic);

export default router;