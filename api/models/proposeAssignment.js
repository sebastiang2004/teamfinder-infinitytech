import mongoose from 'mongoose';

const assignmentSchema = mongoose.Schema({
  employee: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
  workHours: Number,
  roles: [String],
  comments: String,
});

const Assignment = mongoose.model('Assignment', assignmentSchema);

export default Assignment;