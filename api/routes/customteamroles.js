
import express from 'express';
import { createTeamRole, updateTeamRole } from '../controllers/teamRoles.js';

const router = express.Router();

router.post('/', createTeamRole);
router.put('/:id', updateTeamRole);

export default router;