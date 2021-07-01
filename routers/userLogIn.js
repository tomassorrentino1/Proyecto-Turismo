const express = require('express');
const router = express.Router();

let usersController = require('../controllers/usersController');
// Login

router.get('/', usersController.login);


  
module.exports = router;