import Project from '../models/project.js';

// Get all projects
export const getProjects = async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
};

// Get a project by ID
export const getProjectById = async (req, res) => {
  const project = await Project.findById(req.params.id);
  res.json(project);
};

// Create a new project
export const createProject = async (req, res) => {
  const newProject = new Project(req.body);
  await newProject.save();
  res.status(201).json(newProject);
};

// Update a project
export const updateProject = async (req, res) => {
  const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedProject);
};

// Delete a project
export const deleteProject = async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.json({ message: 'Project deleted' });
};