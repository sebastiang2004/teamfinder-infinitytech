// models/project.js
import mongoose from 'mongoose';

const roleSchema = mongoose.Schema({
  role: { type: mongoose.Schema.Types.ObjectId, ref: 'Role' },
  members: Number,
});

const projectSchema = mongoose.Schema({
  name: String,
  period: { type: String, enum: ['Fixed', 'Ongoing'] },
  startDate: Date,
  deadlineDate: Date,
  status: { type: String, enum: ['Not Started', 'Starting', 'In Progress', 'Closing', 'Closed'] },
  description: String,
  technologyStack: [String],
  teamRoles: [roleSchema],
});

const Project = mongoose.model('Project', projectSchema);

export default Project;