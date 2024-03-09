import express from 'express';
import { getProjects, getProjectById, createProject, updateProject, deleteProject } from '../controllers/projects.js';

const router = express.Router();

// Route to get all projects
router.get('/', getProjects);

// Route to get a project by ID
router.get('/:id', getProjectById);

// Route to create a new project
router.post('/', createProject);

// Route to update a project
router.put('/:id', updateProject);

// Route to delete a project
router.delete('/:id', deleteProject);

export default router;