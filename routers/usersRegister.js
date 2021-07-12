const express = require('express');
const router = express.Router();

let usersController = require('../controllers/usersController');

// Register

router.get('/', usersController.register);


  
module.exports = router;