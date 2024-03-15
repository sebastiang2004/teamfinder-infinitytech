import express from 'express';
import { proposeAssignment } from '../controllers/projects.js';

const router = express.Router();

router.post('/:projectId/assignments', proposeAssignment);

export default router;