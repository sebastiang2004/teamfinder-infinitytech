import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import bcryptjs from "bcryptjs";

export const test = (req, res) => {
  res.json({
    message: "API is working!",
  });
};
// assign skill
export const assignSkill = async (req, res) => {
  const { id } = req.params;
  const { skill, level, experience } = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $push: { skills: { skill, level, experience } } },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const viewSkills = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id).populate("skills.skill");
    res.status(200).json(user.skills);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// get user
export const getUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
};

// update user
export const updateUser = async (req, res, next) => {
  if (req.user.id !== req.params.id) {
    return next(errorHandler(401, "You can update only your account!"));
  }
  try {
    if (req.body.password) {
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }

    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedUser);
  } catch (error) {
    next(error);
  }
};

// assign role
export const assignRole = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const { role } = req.body;
  if (
    ![
      "Employee",
      "Organization Admin",
      "Department Manager",
      "Project Manager",
    ].includes(role)
  ) {
    return res.status(400).json({ message: "Invalid role" });
  }

  if (!user.roles.includes(role)) {
    user.roles.push(role);
    await user.save();
  }

  res.json(user);
};

// delete user
export const deleteUser = async (req, res, next) => {
  if (req.user.id !== req.params.id) {
    return next(errorHandler(401, "You can delete only your account!"));
  }
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted...");
  } catch (error) {
    next(error);
  }
};
