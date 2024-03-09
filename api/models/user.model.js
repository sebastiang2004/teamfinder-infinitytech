import mongoose from 'mongoose';

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
    skills:
     [{ type: String 
    }],
    projects:
     [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project'
    
    }],
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;
