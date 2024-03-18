// controllers/employee.js
import { JWT_SECRET } from '../constants.js';
import User from '../models/user.model.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export const getEmployeeById = async(req, res) =>{
    try {
        const employee = await User.findById(req.params.id);
        if(!employee){
            return res.status(400).json({error: "Employee not found!"});
        }
        res.json(employee);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}
// Update employee's skills
export const updateSkills = async(req, res) =>{
    try {
    const employee = await User.findById(req.params.id);
        if(!employee){
            return res.status(400).json({error: "Employee not found!"});
        }
        employee.skills = req.body.skills;
        await employee.save();
        res.json(employee);

    } catch (error) {
        res.status(500).json({error: error.message});
    }
}
// View employee's projects
export const viewProjects = async(req, res) =>{
   try {
    const employee = await Employee.findById(req.params.id).populate("projects");
        if(!employee){
            return res.status(400).json({error: "Employee not found!"});
        }
    res.json(employee);

   } catch (error) {
    res.status(500).json({error: error.message});
    }
}

// Update employee project
export const updateProjects = async(req, res) =>{
    try {
     const employee = await User.findById(req.params.id).populate("projects");
         if(!employee){
             return res.status(400).json({error: "Employee not found!"});
         }
    employee.projects = req.body.projects;
    await employee.save();
    res.json(employee);

    }catch (error) {
        res.status(500).json = ({error: error.message});
     }

}

export const signup = async (req, res) => {
    const { name, email, password, organizationId } = req.body;
  
    try {
      // Check if an employee with the same email already exists
      let employee = await User.findOne({ email });
      if (employee) {
        return res.status(400).json({ msg: 'Employee already exists' });
      }
  

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      // Create a new employee
      employee = new User({
        name,
        email,
        hashedPassword, // Password will be hashed in the model
        organization: organizationId,
        role: "Employee"
      });
  
      // Save the employee
      await employee.save();


      const token = jwt.sign(
        {
          userId: employee._id,
          organizationId: organizationId,
          email: employee.email,
          role: employee.role
        },
        JWT_SECRET,
        { expiresIn: '24h' }
      )
  
      res.json({ msg: 'Employee created successfully', token });
    } catch (err) {
      console.error(err.message);
      res.status(500).send({error: err.message});
    }
    
  };







