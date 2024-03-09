import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import { assignSkill, viewSkills } from '../controllers/user.controller.js';
import {
  test,
  deleteUser,
  getUser,  
  updateUser,
  assignRole,
} from '../controllers/user.controller.js';

const router = express.Router();

router.get('/', test);
router.post('/update/:id', verifyToken, updateUser);
router.delete('/delete/:id', verifyToken, deleteUser);
router.get('/:id', getUser);
router.put('/:id', updateUser);
router.post('/:id/roles', assignRole);
router.put('/:id/skills', assignSkill);
router.get('/:id/skills', viewSkills);
export default router;
