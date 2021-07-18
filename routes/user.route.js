const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.post('/user', userController.create);
router.get('/user', userController.getUsers);

module.exports = router;
