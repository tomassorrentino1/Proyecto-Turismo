const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');

// Product Cart

router.get('/cart', productController.cart);

// Product Detail

router.get('/detail', productController.detail);


// Editar Producto

router.get('/edit', productController.edit);

// Listado de Productos (revisar por q no se muestra)

router.get('/', productController.index);

// Edit

router.get('/:id/edit', productController.edit); 
router.put('/:id', productController.update);

// Create

router.get('/create', productController.create);


module.exports = router;