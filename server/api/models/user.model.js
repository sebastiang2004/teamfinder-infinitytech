import mongoose from 'mongoose';

const skillSchema = mongoose.Schema({
  skill: { type: mongoose.Schema.Types.ObjectId, ref: 'Skill' },
  level: { type: Number, min: 1, max: 5 },
  experience: String,
});

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    organization: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Organization',
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
    },
    profilePicture: {
      type: String,
      default: '',
    },
    role: {
      type: String,
      enum: ['Employee', 'Organization Admin', 'Department Manager', 'Project Manager'],
      required: true
    },
    skills: [skillSchema],
    projects: [
      { type: mongoose.Schema.Types.ObjectId, ref: 'Project' }
    ],
    department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' },
  },
  { timestamps: true }
);


const User = mongoose.model('User', userSchema);

export default User;
