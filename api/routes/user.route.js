import express from "express";
import { assignSkill, viewSkills } from "../controllers/user.controller.js";
import {
  test,
  deleteUser,
  getUser,
  updateUser,
  assignRole,
} from "../controllers/user.controller.js";
import { getOrganization } from "../controllers/organizations.js";

const router = express.Router();

router.get("/", test);
router.post("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser);
router.get("/:id", getUser);
router.put("/:id", updateUser);
router.get("/:id/organization", getOrganization);
router.post("/:id/roles", assignRole);
router.put("/:id/skills", assignSkill);
router.get("/:id/skills", viewSkills);
export default router;
