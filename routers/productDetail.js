const express = require('express');
const router = express.Router();

let productController = require('../controllers/productController');

// Detalle

router.get('/', productController.detail);


  
module.exports = router;