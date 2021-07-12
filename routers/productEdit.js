const express = require('express');
const router = express.Router();

let productController = require('../controllers/productController');

// Detalle

router.get('/', productController.edit);


  
module.exports = router;