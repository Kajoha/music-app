const express = require('express');
const routerFavourite = express.Router();
const favouriteController = require('../controllers/favourite.controller');

routerFavourite.post('/favourite', favouriteController.create);
routerFavourite.get('/favourite', favouriteController.getFavourite);
routerFavourite.put('/favourite', favouriteController.update);

module.exports = routerFavourite;
