import Organization from '../models/organizations.js';

export const getOrganizations = async (req, res) => {
  try {
    const organizations = await Organization.find();
    res.status(200).json(organizations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createOrganization = async (req, res) => {
  const organization = new Organization(req.body);
  try {
    await organization.save();
    res.status(201).json(organization);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};