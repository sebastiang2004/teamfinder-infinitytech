// routes/teams.js
import express from 'express';
import { getAllTeams, createTeam } from '../controllers/teams.js';

const router = express.Router();

// GET all teams
router.get('/', getAllTeams);

// POST create a team
router.post('/', createTeam);

export default router;
