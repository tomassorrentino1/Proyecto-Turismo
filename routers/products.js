const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');

const productController = require('../controllers/productController');


// Product Cart

router.get('/cart', productController.cart);

// Product Detail

router.get('/:id/detail', productController.detail);

// Listado de Productos 

router.get('/', productController.list);

// Crear producto

router.get('/create', authMiddleware, productController.create);
router.post('/', productController.add); 

// Un solo producto

router.get('/:id', productController.oneProduct);

// Edit

router.get('/:id/edit', authMiddleware, productController.edit); 
router.put('/:id', productController.update);


router.get('/create/', productController.create);

router.delete('/:id', authMiddleware, productController.destroy); 


module.exports = router;