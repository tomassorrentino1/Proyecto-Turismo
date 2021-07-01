const express = require('express');
const router = express.Router();

let productController = require('../controllers/productController');
// Cart

router.get('/', productController.cart);


  
module.exports = router;