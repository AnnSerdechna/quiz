import express from 'express';

import { 
  createModule,
  deleteModule, 
  getModules, 
  getOneModule, 
  updateModule 
} from '../../controllers/module.controller';

const router = express.Router();

router.post('/', createModule);
router.get('/', getModules);
router.get('/:id', getOneModule);
router.put('/:id', updateModule);
router.delete('/:id', deleteModule);

export default router;