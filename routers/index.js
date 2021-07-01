const express = require('express');
const router = express.Router();
let indexController = require('../controllers/indexController');

// llevar al home

router.get('/', indexController.home );

module.exports = router;