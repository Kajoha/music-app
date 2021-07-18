const userService = require('../services/user.service');

const userController = {};

userController.create = async function (req, res, next) {
  try {
    const newUser = await userService.createUser(req.body);
    return res.status(201).json({ newUser });
  } catch (error) {
    return res.status(400).json({ status: 400, message: error.message });
  }
};

userController.getUsers = async function (req, res, next) {
  try {
    const users = await userService.getUsers();
    return res.status(200).json({ status: 200, data: users, message: 'Successfully users retrieved' });
  } catch (error) {
    return res.status(400).json({ status: 400, message: error.message });
  }
};

module.exports = userController;
