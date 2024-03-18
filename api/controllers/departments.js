import Department from '../models/departments.js';
import Skill from '../models/skills.js';
import User from '../models/user.model.js';



// get department skills

export const getDepartmentSkills = async(req, res) => {
  const { id } = req.params
  if(!id) {
    return res.status(400).json({
      error: "id field is required"
    })
  }

  try {
    const skills = await Skill.find({
      departments: id
    })

    res.status(200).json(skills)
  } catch(error) {
    res.status(400).json({ message: error.message });
  }

}
// get department manager 
export const getDepartmentManager = async(req, res) => {
  const { id } = req.params

  if(!id) {
    return res.status(400).json({
      error: "id field is required"
    })
  }
  try {
      const manager = await User.findOne({
        department: id,
        role: "Department Manager"
      })
      res.status(200).json(manager)
  } catch(error) {
    res.status(400).json({ message: error.message });

  }
}
export const getDepartmentMembers = async (req, res) => {
  const { id } = req.params

  if(!id) {
    return res.status(400).json({
      error: "id field is required"
    })
  }
  try {
      const members = await User.find({
        department: id
      })
      res.status(200).json(members)
  } catch(error) {
    res.status(400).json({ message: error.message });

  }
}
// Assign a Department Member
export const assignDepartmentMember = async (req, res) => {
  const { id } = req.params;
  const { userId } = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(userId, { department: id }, { new: true });
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


// Remove a Department Member
export const removeDepartmentMember = async (req, res) => {
  const { userId } = req.params;

  try {
    const updatedUser = await User.findByIdAndUpdate(userId, { department: null }, { new: true });
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


// Assign a Department Manager
export const assignDepartmentManager = async (req, res) => {
  const { id } = req.params;
  const { manager } = req.body;

  try {
    const updatedDepartment = await Department.findByIdAndUpdate(id, { manager }, { new: true });
    res.status(200).json(updatedDepartment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Create a department
export const createDepartment = async (req, res) => {
  const { name, organization } = req.body;

  const newDepartment = new Department({
    name,
    organization,
  });

  try {
    await newDepartment.save();
    res.status(201).json(newDepartment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get a department by ID
export const getDepartmentById = async (req, res) => {
  try {
    const department = await Department.findById(req.params.id);
    if (!department) return res.status(404).json({ message: 'Department not found' });
    res.status(200).json(department);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a department
export const updateDepartment = async (req, res) => {
  try {
    const updatedDepartment = await Department.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedDepartment) return res.status(404).json({ message: 'Department not found' });
    res.status(200).json(updatedDepartment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a department
export const deleteDepartment = async (req, res) => {
  try {
    const deletedDepartment = await Department.findByIdAndDelete(req.params.id);
    if (!deletedDepartment) return res.status(404).json({ message: 'Department not found' });
    res.status(200).json(deletedDepartment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};