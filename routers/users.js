const express = require('express');
const router = express.Router();
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

let usersController = require('../controllers/usersController');


// Register

router.get('/register', guestMiddleware, usersController.register);
router.post('/register', usersController.registerStore);


// Login

router.get('/login', guestMiddleware, usersController.login);
router.post('/login', usersController.loginStore);

//Profile
router.get('/profile', authMiddleware, usersController.profile);

//Listado de usuarios

router.get('/list', usersController.list);

module.exports = router;