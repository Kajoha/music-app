const Recent = require('../models/recent.model');
const mongoose = require('mongoose');
const recentService = {};

recentService.createRecent = async function ({ userId, songs }) {
  try {
    const recent = new Recent({ userId, songs });
    const newRecent = await recent.save();
    return newRecent;
  } catch (error) {
    throw new Error('Error while save recent');
  }
};

recentService.getRecent = async function () {
  try {
    const userId = new mongoose.Types.ObjectId('60ee40f864a5f71095c09d80'); // Aqui poner el id del usuario logueado
    const recents = await Recent.findOne({ userId }).populate('songs');
    return recents;
  } catch (error) {
    throw new Error('Error while Paginating Recents');
  }
};

module.exports = recentService;
