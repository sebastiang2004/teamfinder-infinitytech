import express from "express";
import Department from "../models/departments.js";
import { assignDepartmentManager } from "../controllers/departments.js";

import {
  assignDepartmentMember,
  removeDepartmentMember,
} from "../controllers/departments.js";
const router = express.Router();

router.put("/:id/members", assignDepartmentMember);
router.delete("/:id/members/:userId", removeDepartmentMember);

// Assign a manager to a department
router.put("/:id/manager", assignDepartmentManager);

// Get all departments
router.get("/", async (req, res) => {
  const departments = await Department.find();
  res.json(departments);
});

// Get a department by ID
router.get("/:id", async (req, res) => {
  const department = await Department.findById(req.params.id);
  res.json(department);
});

// Create a new department
router.post("/", async (req, res) => {
  const newDepartment = new Department(req.body);
  const savedDepartment = await newDepartment.save();
  res.json(savedDepartment);
});

// Update a department
router.put("/:id", async (req, res) => {
  const updatedDepartment = await Department.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updatedDepartment);
});

// Delete a department
router.delete("/:id", async (req, res) => {
  const deletedDepartment = await Department.findByIdAndDelete(req.params.id);
  res.json(deletedDepartment);
});

export default router;
