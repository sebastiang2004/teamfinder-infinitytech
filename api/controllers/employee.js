// controllers/employee.js

import Employee from "../models/employee.js";
import Organization from '../models/organizations.js';
export const getEmployeeById = async(req, res) =>{
    try {
        const employee = await Employee.findById(req.params.id);
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
    const employee = await Employee.findById(req.params.id);
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
     const employee = await Employee.findById(req.params.id).populate("projects");
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
    const { organizationId } = req.query;
    const { name, email, password } = req.body;
  
    try {
      // Check if an employee with the same email already exists
      let employee = await Employee.findOne({ email });
      if (employee) {
        return res.status(400).json({ msg: 'Employee already exists' });
      }
  
      // Create a new employee
      employee = new Employee({
        name,
        email,
        password, // Password will be hashed in the model
        organization: organizationId
      });
  
      // Save the employee
      await employee.save();
  
      res.json({ msg: 'Employee created successfully' });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
    
  };







