
import mongoose from 'mongoose';

const teamRoleSchema = mongoose.Schema({
  name: String,
  organization: { type: mongoose.Schema.Types.ObjectId, ref: 'Organization' },
});

const TeamRole = mongoose.model('TeamRole', teamRoleSchema);

export default TeamRole;s