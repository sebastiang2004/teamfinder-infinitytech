import express from 'express';
import {
  test,
  updateUser,
  deleteUser,
  getUser,  
  updateUser,
  assignRole,
} from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.get('/', test);
router.post('/update/:id', verifyToken, updateUser);
router.delete('/delete/:id', verifyToken, deleteUser);
router.get('/:id', getUser);
router.put('/:id', updateUser);
router.post('/:id/roles', assignRole);

export default router;
