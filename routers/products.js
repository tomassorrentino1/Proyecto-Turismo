const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');


// Product Cart

router.get('/cart', productController.cart);

// Product Detail

router.get('/:id/detail', productController.detail);

// Listado de Productos 

router.get('/', productController.index);

// Crear producto

router.get('/create', productController.create);
router.post('/', productController.store); 

// Un solo producto

router.get('/:id', productController.oneProduct);

// Edit

router.get('/:id/edit', productController.edit); 
router.put('/:id', productController.update);









module.exports = router;