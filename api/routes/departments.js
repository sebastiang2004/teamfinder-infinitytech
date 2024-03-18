import express from 'express';
import Department from '../models/departments.js'

import { assignDepartmentManager, getDepartmentSkills, assignDepartmentMember, getDepartmentManager, removeDepartmentMember, getDepartmentMembers } from '../controllers/departments.js';
const router = express.Router();


// Get department skills

router.get('/:id/skills', getDepartmentSkills)
// Assign a member to a department
router.put('/:id/members', assignDepartmentMember);
router.get('/:id/members', getDepartmentMembers)
router.delete('/:id/members/:userId', removeDepartmentMember);

// Assign a manager to a department
router.put('/:id/manager', assignDepartmentManager);

// Get a manager
router.get('/:id/manager', getDepartmentManager)

// Get all departments
router.get('/', async (req, res) => {
  const departments = await Department.find();
  res.json(departments);
});

// Get a department by ID
router.get('/:id', async (req, res) => {
  const department = await Department.findOne({_id: req.params.id}).populate("manager");
  res.json(department);
});

// Create a new department
router.post('/', async (req, res) => {
  const newDepartment = new Department(req.body);
  const savedDepartment = await newDepartment.save();
  res.json(savedDepartment);
});

// Update a department
router.put('/:id', async (req, res) => {
  const updatedDepartment = await Department.findByIdAndUpdate(req.params.id, req.body, {new: true});
  res.json(updatedDepartment);
});

// Delete a department
router.delete('/:id', async (req, res) => {
  const deletedDepartment = await Department.findByIdAndDelete(req.params.id);
  res.json(deletedDepartment);
});

export default router;
