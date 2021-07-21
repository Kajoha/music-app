const favouriteService = require('../services/favourite.service');

const favouriteController = {};

favouriteController.create = async function (req, res, next) {
  try {
    const newFavourite = await favouriteService.createFavourite(req.body);
    return res.status(201).json({ newFavourite });
  } catch (error) {
    return res.status(400).json({ status: 400, message: error.message });
  }
};

favouriteController.getFavourite = async function (req, res, next) {
  try {
    const favourites = await favouriteService.getFavourite();
    return res.status(200).json({ status: 200, data: favourites, message: 'Successfully users retrieved' });
  } catch (error) {
    return res.status(400).json({ status: 400, message: error.message });
  }
};

favouriteController.update = async function (req, res, next) {
  try {
    const favourite = await favouriteService.updateFavourite(req.body);
    return res.status(201).json({ favourite });
  } catch (error) {
    return res.status(400).json({ status: 400, message: error.message });
  }
};

module.exports = favouriteController;
