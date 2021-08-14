const express = require('express');
const router = express.Router();

let usersController = require('../controllers/usersController');

// Register

router.get('/register', usersController.register);
router.post('/register', usersController.registerStore);


// Login

router.get('/login', usersController.login);
router.post('/login', usersController.loginStore);

module.exports = router;