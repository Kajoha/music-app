const express = require('express');
const routerRecent = express.Router();
const recentController = require('../controllers/recent.controller');

routerRecent.post('/recent', recentController.create);
routerRecent.get('/recent', recentController.getRecent);

module.exports = routerRecent;
