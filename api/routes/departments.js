// routes/departments.js
import express from 'express';
import { getAllDepartments, createDepartment } from '../controllers/departments.js';

const router = express.Router();

// GET all departments
router.get('/', getAllDepartments);

// POST create a department
router.post('/', createDepartment);

export default router;
