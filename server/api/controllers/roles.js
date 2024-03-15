// controllers/roles.js
import Role from '../models/roles.js';

export const getRoles = async (req, res) => {
  try {
    const roles = await Role.find();
    res.status(200).json(roles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createRole = async (req, res) => {
    const role = new Role(req.body);
    try {
      await role.save();
      res.status(201).json(role);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };