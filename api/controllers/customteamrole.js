
import TeamRole from '../models/teamRole.js';

export const createTeamRole = async (req, res) => {
  const { name, organization } = req.body;

  const newTeamRole = new TeamRole({
    name,
    organization,
  });

  try {
    await newTeamRole.save();
    res.status(201).json(newTeamRole);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateTeamRole = async (req, res) => {
  const { id } = req.params;
  const { name, organization } = req.body;

  try {
    const updatedTeamRole = await TeamRole.findByIdAndUpdate(id, { name, organization }, { new: true });
    res.status(200).json(updatedTeamRole);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};