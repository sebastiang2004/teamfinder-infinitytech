import mongoose from 'mongoose';

const skillSchema = mongoose.Schema({
  skill: { type: mongoose.Schema.Types.ObjectId, ref: 'Skill' },
  level: { type: Number, min: 1, max: 5 },
  experience: String,
});

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    organization: {
      type: String,
      required: true,
      unique: true,
      default:'',

    },
    address: {
      type: String,
      required: true,
      unique: true,
      default:'',
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default:
        '',
    },
    roles:
     [{ type: String, 
      enum: ['Employee', 'Organization Admin', 'Department Manager', 'Project Manager']
     }],
     skills: [skillSchema],
    projects:
     [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project'
    
    }],
    department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;
