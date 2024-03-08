// controllers/employee.js

import Employee from "../models/employee.js";

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







    




