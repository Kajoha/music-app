const mongoose = require('mongoose');
const Favourite = require('../models/favourite.model');

const favouriteService = {};

favouriteService.createFavourite = async function ({ userId, songs }) {
  try {
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

module.exports = favouriteService;
