const Recent = require('../models/recent.model');
const mongoose = require('mongoose');
const Song = require('../models/song.model');

const recentService = {};

recentService.createRecent = async function ({ songs }) {
  try {
    if (!songs) songs = [];
    const userId = new mongoose.Types.ObjectId('60ee40f864a5f71095c09d80');
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

recentService.updateRecent = async function (data) {
  try {
    // const id = new mongoose.Types.ObjectId(data.id);
    const id = data.id;
    const recent = await Recent.findById(id);
    if (data.songs) recent.songs = data.songs;
    await recent.save();
    return recent;
  } catch (error) {
    throw new Error('Error while save recent');
  }
};

module.exports = recentService;
