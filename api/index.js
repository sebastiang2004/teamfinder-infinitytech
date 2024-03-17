import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";
import cors from "cors";
import helmet from "helmet";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import departmentRoutes from "./routes/departments.js";
import employeeRoutes from "./routes/employee.js";
import customTeamRoleRoutes from "./routes/customteamroles.js";
import organizationRoutes from "./routes/organizations.js";
import projectRoutes from "./routes/projects.js";
import proposeAssignmentRoutes from "./routes/proposeAssignment.js";
import roleRoutes from "./routes/roles.js";
import skillRoutes from "./routes/skills.js";
import teamRoutes from "./routes/team.js";
import { authenticateToken } from "./middlewares/authmiddleware.js";
import swaggerUi from "swagger-ui-express";
import swaggerFile from "../swagger-output.json"  with { type: "json" };
dotenv.config();

const app = express();
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "/client/dist")));

app.use((err, _req, res, _next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});

const PORT = process.env.PORT || 8080;

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB-InfinityCluster0");
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB', err);
  });

app.use(helmet());

app.use(
  cors({
    origin: "any",
    credentials: true,
  })
);

app.use(express.json());

app.use(cookieParser());

app.use("/api/user", authenticateToken, userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/department", authenticateToken, departmentRoutes);
app.use("/api/employee", authenticateToken, employeeRoutes);
app.use("/api/role", authenticateToken, roleRoutes);
app.use("/api/organization", authenticateToken, organizationRoutes);
app.use("/api/project", authenticateToken, projectRoutes);
app.use("/api/proposeAssignment", authenticateToken, proposeAssignmentRoutes);
app.use("/api/customTeamRole", authenticateToken, customTeamRoleRoutes);
app.use("/api/skill", authenticateToken, skillRoutes);
app.use("/api/team", authenticateToken, teamRoutes);
app.use('/doc', swaggerUi.serve,swaggerUi.setup(swaggerFile));