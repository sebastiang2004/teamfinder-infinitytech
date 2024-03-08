// controllers/teams.js
import Team from '../models/team.js';

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
