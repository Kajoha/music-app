const favouriteService = require('../services/favourite.service');

const favouriteController = {};

favouriteController.create = async function (req, res, next) {
  try {
    const newFavourite = await favouriteService.createUser(req.body);
    return res.status(201).json({ newFavourite });
  } catch (e) {
    return res.status(400).json({ status: 400, message: error.message });
  }
};

favouriteController.getFavourite = async function (req, res, next) {
  try {
    const favourites = await favouriteService.getFavourite();
    return res.status(200).json({ status: 200, data: favourites, message: 'Successfully users retrieved' });
  } catch (e) {
    return res.status(400).json({ status: 400, message: error.message });
  }
};

module.exports = favouriteController;
