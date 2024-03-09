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

export const createProject = async (req, res) => {
  const { name, period, startDate, deadlineDate, status, description, technologyStack, teamRoles } = req.body;

  if (['In Progress', 'Closing', 'Closed'].includes(status)) {
    return res.status(400).json({ message: 'Invalid status' });
  }

  const newProject = new Project({
    name,
    period,
    startDate,
    deadlineDate,
    status,
    description,
    technologyStack,
    teamRoles,
  });

  try {
    await newProject.save();
    res.status(201).json(newProject);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a project
export const updateProject = async (req, res) => {
  const { id } = req.params;
  const { name, period, startDate, deadlineDate, status, description, technologyStack, teamRoles } = req.body;

  try {
    const updatedProject = await Project.findByIdAndUpdate(id, { name, period, startDate, deadlineDate, status, description, technologyStack, teamRoles }, { new: true });
    res.status(200).json(updatedProject);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
// Delete a project
export const deleteProject = async (req, res) => {
  const { id } = req.params;

  const project = await Project.findById(id);
  if (['In Progress', 'Closing', 'Closed'].includes(project.status)) {
    return res.status(400).json({ message: 'Cannot delete project' });
  }

  try {
    await Project.findByIdAndRemove(id);
    res.status(200).json({ message: 'Project deleted successfully.' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};