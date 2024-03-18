import mongoose from 'mongoose';

const skillSchema = mongoose.Schema({
  category: String,
  name: String,
  description: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  organization: { type: mongoose.Schema.Types.ObjectId, ref: 'Organization' },
  departments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Department' }],
});

const Skill = mongoose.model('Skill', skillSchema);

export default Skill;