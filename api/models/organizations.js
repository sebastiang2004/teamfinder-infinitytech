import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const organizationSchema = new mongoose.Schema({
  name: 
  { type: String, 
    required: true, 
    unique: true
   },
  address: 
  { type: String, 
    required: true 
  },
  employees: 
  [{
     type: mongoose.Schema.Types.ObjectId, 
     ref: 'Employee'
     }],
  identifier:
   {
     type: String, default: uuidv4 
    },
}, { timestamps: true });

const Organization = mongoose.model('Organization', organizationSchema);

export default Organization;