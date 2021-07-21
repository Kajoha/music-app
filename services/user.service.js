const User = require('../models/user.model');
const passport			= require('passport');
const localStrategy		= require('passport-local').Strategy;
const bcrypt			= require('bcrypt');

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

userService.userLog = async function () {
  try {
    passport.serializeUser(function(user,done){
      done(null,user.id)
    });
    
    passport.deserializeUser(function(id,done){
      User.findById(id, function (err, user) {
        done(err, user);
      });
    })
    passport.use(new localStrategy(function (email, password, done) {
      User.findOne({ email: email }, function (err, user) {
        if (err) return done(err);
        if (!user) return done(null, false, { message: 'Incorrect username.' });
        bcrypt.compare(password, user.password, function (err, res) {
          if (err) return done(err);
          if (res === false) return done(null, false, { message: 'Incorrect password.' });
          return done(null, user);
        });
      });
    }));
  } catch (error) {
    throw new Error('Error while getting the User');
  }
};

module.exports = userService;
