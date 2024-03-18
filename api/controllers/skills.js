// controllers/skills.js
import Skill from '../models/skills.js';

export const createSkill = async (req, res) => {
  const { category, name, description, author, departments, organization } = req.body;

  // Create a new skill
  const newSkill = new Skill({
    category,
    name,
    description,
    author,
    departments,
    organization
  });

  try {
    await newSkill.save();
    res.status(201).json(newSkill);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


//  Update a skill
export const updateSkill = async (req, res) => {
  const { id } = req.params;
  const { category, name, description, author, departments } = req.body;

  try {
    const updatedSkill = await Skill.findByIdAndUpdate(id, { category, name, description, author, departments }, { new: true });
    res.status(200).json(updatedSkill);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


// Delete a skill
export const deleteSkill = async (req, res) => {
  const { id } = req.params;

  try {
    await Skill.findByIdAndRemove(id);
    res.status(200).json({ message: 'Skill deleted successfully.' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};