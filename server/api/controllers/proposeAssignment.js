import Employee from '../models/employee.js';
import Project from '../models/projects.js';

export const proposeAssignment = async (req, res) => {
  const { projectId, employeeId, workHours, roles, comments } = req.body;

  try {
    const project = await Project.findById(projectId);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    const employee = await Employee.findById(employeeId);
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    if (workHours < 1 || workHours > (8 - employee.totalHours)) {
      return res.status(400).json({ message: 'Invalid work hours' });
    }

    const assignment = {
      employee: employeeId,
      workHours,
      roles,
      comments,
    };

    project.assignments.push(assignment);
    await project.save();

    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
