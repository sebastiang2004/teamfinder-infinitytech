import mongoose from 'mongoose';

const departmentSchema = mongoose.Schema({
  name: String,
  description: String,
  organization: { type: mongoose.Schema.Types.ObjectId, ref: 'Organization' },
  manager: { type: mongoose.Schema.Types.ObjectId, ref: 'User', require: false },
});

const Department = mongoose.model('Department', departmentSchema);

export default Department;