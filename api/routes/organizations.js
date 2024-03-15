import express from 'express';
import { getOrganizations, createOrganization, getOrganizationDepartments } from '../controllers/organizations.js';

const router = express.Router();

router.get('/', getOrganizations);
router.post('/', createOrganization);

router.get("/:id/departments", getOrganizationDepartments )

export default router;