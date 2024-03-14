// routes/employee.js

import express  from "express";
import{getEmployeeById, updateSkills, viewProjects, updateProjects} from "../controllers/employee.js";
import { signupEmployee } from '../controllers/employee.js';

const router = express.Router();

// Get employee by ID
router.get("/:id", getEmployeeById);

// Update employee skills
router.put("/:id/skills", updateSkills);

// View employee's projects
router.get("/:id/projects", viewProjects);

// Update employee's projects
router.put("/:id/projects", updateProjects);

// Sign Up Employee ref
router.get('/signup/:orgIdentifier', signupEmployee)

export default router;
