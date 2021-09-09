const express = require('express');
const router = express.Router();
let indexController = require('../controllers/indexController');

// llevar al home

router.get('/', indexController.home );

// nosotros

router.get('/aboutUs', indexController.aboutUs );

// terminos y condiciones

router.get ('/termCond', indexController.termCond)
module.exports = router;