import Project from '../models/projects.js';

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

  // Validate period
  if (!['Fixed', 'Ongoing'].includes(period)) {
    return res.status(400).json({ message: 'Invalid period' });
  }

  // Validate status
  if (!['Not Started', 'Starting', 'In Progress', 'Closing', 'Closed'].includes(status)) {
    return res.status(400).json({ message: 'Invalid status' });
  }

  if (['In Progress', 'Closing', 'Closed'].includes(status)) {
    return res.status(400).json({ message: 'Invalid status for project creation' });
  }

  // Validate deadlineDate
  if (period === 'Fixed' && !deadlineDate) {
    return res.status(400).json({ message: 'Deadline date is required for fixed period projects' });
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
    res.status(409).json({ message: error.message });
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

export const proposeAssignment = async (req, res) => {
  // Your code here
};