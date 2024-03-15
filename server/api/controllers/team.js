// controllers/teams.js
import Team from '../models/team.js';
import Employee from '../models/employee.js';
import Project from '../models/projects.js';


// Get all employees
export const findEmployeesForProject = async (req, res) => {
  const { projectId, includePartiallyAvailable, includeCloseToFinish, includeUnavailable, weeksToFinish } = req.body;

  try {
    const project = await Project.findById(projectId);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    const query = Employee.find();

    if (includePartiallyAvailable) {
      query.where('totalHours').lt(8);
    }

    if (includeCloseToFinish) {
      query.where('projects.deadlineDate').lt(new Date(Date.now() + weeksToFinish * 7 * 24 * 60 * 60 * 1000));
    }

    if (includeUnavailable) {
      query.where('totalHours').eq(8);
    }

    const employees = await query
      .where('skills').in(project.technologyStack)
      .or([{ 'pastProjects.technologyStack': { $in: project.technologyStack } }])
      .populate('projects');

    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Get all teams
export const getAllTeams = async (req, res) => {
  try {
    const teams = await Team.find().populate('members projects');
    res.status(200).json(teams);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createTeam = async (req, res) => {
  const { name, members, projects } = req.body;

  const newTeam = new Team({
    name,
    members,
    projects,
  });

  try {
    await newTeam.save();
    res.status(201).json(newTeam);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
