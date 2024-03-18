import Department from '../models/departments.js';
import User from '../models/user.model.js';
import Organization from '../models/organizations.js';

export const getOrganizations = async (req, res) => {
  try {
    const organizations = await Organization.find();
    res.status(200).json(organizations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getOrganizationById = async (req, res) => {
  
  try {
    if(!req.params.id) {
      return res.status(400).json({message: "id must be present"})
    }
    const organization = await Organization.findById(req.params.id);
    res.status(200).json(organization);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
export const getSignupURL = (req, res) => {
  const organizationId = req.user.organizationId;
  const signupURL = `${req.protocol}://${req.get('host')}/api/employees/signup?organizationId=${organizationId}`;
  res.json({ signupURL });
};
export const getOrganizationDepartments = async (req, res) => {

  if(!req.params.id) {
    return res.status(400).json({
      message: "Id is required"
    })
  }

  try {
    const departments = await Department.find({organization: req.params.id})
    res.status(200).json(departments)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getOrganizationMembers = async (req, res) => {

  if(!req.params.id) {
    return res.status(400).json({
      message: "Id is required"
    })
  }

  try {
    const members = await User.find({
      organization: req.params.id
    }).populate("department");
    res.status(200).json(members)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getOrganization = async (req, res) => {
  const userId = req.params.id

  try {
    const organization = await Organization.find({
      manager: userId
    })

    if(!organization) {
      return res.status(404).json({
        success: false,
        message: "Organization not found"
      })
    }


    res.status(200).json({
      success: true,
      organization
    })

  } catch(error) {
    req.status(500).json({
      success: false,
      message: error.message
    })
  }
}

export const createOrganization = async (req, res) => {
  const organization = new Organization(req.body);
  try {
    await organization.save();
    res.status(201).json(organization);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};