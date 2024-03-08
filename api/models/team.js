// models/team.js
import mongoose from 'mongoose';

const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  members: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Employee', // Assuming you have an Employee model
    },
  ],
  projects: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Project', // Assuming you have a Project model
    },
  ],
});

const Team = mongoose.model('Team', teamSchema);

export default Team;
