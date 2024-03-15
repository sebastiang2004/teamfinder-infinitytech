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

//affilitate sign up
export const signupEmployee = async (req, res) => {
    const organization = await Organization.findOne({ identifier: req.params.orgIdentifier });
    if (!organization) {
      return res.status(404).json({ error: 'Organization not found' });
    }

    // Render the sign-up form with organization pre-filled
    res.render('signup', { organization });
  };










