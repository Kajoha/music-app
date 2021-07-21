const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recentSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  songs: [{ type: Schema.Types.ObjectId, ref: 'Song' }],
}, { versionKey: false, autoCreate: true });

const Recent = mongoose.model('Recent', recentSchema);
module.exports = Recent;
