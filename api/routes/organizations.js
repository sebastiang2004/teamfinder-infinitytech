import express from 'express';
import { getOrganizations, createOrganization, getOrganizationDepartments, getOrganizationById, getOrganizationMembers } from '../controllers/organizations.js';

const router = express.Router();

const getSignupURL = (req, res, next) => {
    const organizationId = req.query.organizationId;
    if (!organizationId) {
        return res.status(400).send({ error: 'Missing organizationId in query parameters' });
    }
    const signupURL = `https://atc-2024-infinitytech-be-linux-web-app.azurewebsites.net/signup?org=${organizationId}`;
    res.send({ signupURL });
};

router.get('/', getOrganizations);
router.get('/:id', getOrganizationById)
router.post('/', createOrganization);
router.get('/signup-url', getSignupURL);
router.get("/:id/departments", getOrganizationDepartments )
router.get("/:id/members", getOrganizationMembers )

export default router;