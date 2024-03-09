// routes/employee.js

import express  from "express";
import{getEmployeeById, updateSkills, viewProjects, updateProjects} from "../controllers/employee.js";
import { signupEmployee } from '../controllers/auth.controller.js';

const router = express.Router();

// Get employee by ID
router.get("/", getEmployeeById);

// Update employee skills
router.put("/", updateSkills);

// View employee's projects
router.get("/", viewProjects);

// Update employee's projects
router.put("/", updateProjects);

// Sign Up Employee ref
router.get('/signup/:orgIdentifier', signupEmployee)

export default router;
