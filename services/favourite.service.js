const mongoose = require('mongoose');
const Favourite = require('../models/favourite.model');
const Song = require('../models/song.model');

const favouriteService = {};

favouriteService.createFavourite = async function ({ songs }) {
  try {
    if (!songs) songs = [];
    const userId = new mongoose.Types.ObjectId('60ee40f864a5f71095c09d80');
    const favourite = new Favourite({ userId, songs });
    const newFavourite = await favourite.save();
    return newFavourite;
  } catch (error) {
    throw new Error('Error while save favourite');
  }
};

favouriteService.getFavourite = async function () {
  try {
    const userId = new mongoose.Types.ObjectId('60ee40f864a5f71095c09d80'); // Aqui poner el id del usuario logueado
    const favourites = await Favourite.find({ userId }).populate('songs');
    return favourites;
  } catch (error) {
    throw new Error('Error while Paginating favourites');
  }
};

favouriteService.updateFavourite = async function (data) {
  try {
    // const id = new mongoose.Types.ObjectId(data.id);
    const id = data.id;
    const favourite = await Favourite.findById(id);
    if (data.songs) favourite.songs = data.songs;
    await favourite.save();
    return favourite;
  } catch (error) {
    throw new Error('Error while save playlist');
  }
};

module.exports = favouriteService;
