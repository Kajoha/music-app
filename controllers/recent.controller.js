const recentService = require('../services/recent.service');

const recentController = {};

recentController.create = async function (req, res, next) {
  try {
    const newRecent = await recentService.createRecent(req.body);
    return res.status(201).json({ newRecent });
  } catch (error) {
    return res.status(400).json({ status: 400, message: error.message });
  }
};

recentController.getRecent = async function (req, res, next) {
  try {
    const recents = await recentService.getRecent();
    return res.status(200).json({ status: 200, data: recents, message: 'Successfully recents retrieved' });
  } catch (error) {
    return res.status(400).json({ status: 400, message: error.message });
  }
};

recentController.update = async function (req, res, next) {
  try {
    const recent = await recentService.updateRecent(req.body);
    return res.status(201).json({ recent });
  } catch (error) {
    return res.status(400).json({ status: 400, message: error.message });
  }
};

module.exports = recentController;
