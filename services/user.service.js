const User = require('../models/user.model');

const userService = {};

userService.createUser = async function ({ name, email }) {
  try {
    const user = new User({ name, email });
    const newUser = await user.save();
    return newUser;
  } catch (error) {
    throw new Error('Error while save user');
  }
};

userService.getUsers = async function () {
  try {
    const users = await User.find({});
    return users;
  } catch (error) {
    throw new Error('Error while Paginating Users');
  }
};

module.exports = userService;
