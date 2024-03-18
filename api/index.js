import express from "express";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import path from 'path';
import cors from 'cors';
import helmet from 'helmet'
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import departmentRoutes from './routes/departments.js';
import employeeRoutes from './routes/employee.js';
import customTeamRoleRoutes from './routes/customteamroles.js';
import organizationRoutes from './routes/organizations.js';
import projectRoutes from './routes/projects.js';
import proposeAssignmentRoutes from './routes/proposeAssignment.js';
import roleRoutes from './routes/roles.js';
import skillRoutes from './routes/skills.js';
import teamRoutes from './routes/team.js';
import {authenticateToken} from './middlewares/authmiddleware.js';

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB-InfinityCluster0');
  })
  .catch((err) => {
    console.log(err);
  });

const __dirname = path.resolve();

const app = express();

app.use(express.static(path.join(__dirname, '/client/dist')));

// app.get('*', (_, res) => {
//   res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
// });

app.use(helmet());

app.use(cors({
  origin:["http://localhost:5173", "http://localhost:4173", ],
  credentials: true,
}))

app.use(express.json());

app.use(cookieParser());

app.listen(8080, () => {
  console.log('Server listening on port 8080');
});

app.use('/api/user', authenticateToken, userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/department', authenticateToken, departmentRoutes);
app.use('/api/employee', employeeRoutes);
app.use('/api/role', authenticateToken, roleRoutes);
app.use('/api/organization', organizationRoutes);
app.use('/api/project', authenticateToken, projectRoutes);
app.use('/api/proposeAssignment', authenticateToken, proposeAssignmentRoutes);
app.use('/api/customTeamRole', authenticateToken, customTeamRoleRoutes);
app.use('/api/skill', authenticateToken, skillRoutes);
app.use('/api/team', authenticateToken, teamRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});
