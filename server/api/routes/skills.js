// routes/skills.js
import express from 'express';
import { createSkill, updateSkill, deleteSkill } from '../controllers/skills.js';

const router = express.Router();

router.post('/', createSkill);
router.put('/:id', updateSkill);
router.delete('/:id', deleteSkill);

export default router;