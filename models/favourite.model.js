const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favouriteSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  songs: [{ type: Schema.Types.ObjectId, ref: 'Song' }],
}, { versionKey: false, autoCreate: true });

const Favourite = mongoose.model('Favourite', favouriteSchema);
module.exports = Favourite;
