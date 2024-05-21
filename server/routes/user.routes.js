const express = require('express');
const userController = require('../controllers/user.controller');
const router = express.Router();

// Create a new user
router.post('/', userController.createUser);

module.exports = router;

