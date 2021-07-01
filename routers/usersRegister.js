const express = require('express');
const router = express.Router();

let usersController = require('../controllers/usersController');
// Login

router.get('/', usersController.register);


  
module.exports = router;