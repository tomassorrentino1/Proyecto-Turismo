const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');

const productController = require('../controllers/productController');

//configuracion almacenamiento multer
// defino multer para subir imagenes y archivos
// primero lo almaceno en una constantes y despues creo una segunda constante donde va a estar el destino 
//al que va a enviar multer los archivos
//en la constante storage, uso diskStorage para definir el destino y el nombre que se le va a dar al archivo
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname + "-" + Date.now() + '.jpg')    
        /*otra forma de escribirlo
        cb(null, `${file.originalname}-${Date.now ()}.jpg`)*/

    }
})
const upload = multer({storage})

// Product Cart

router.get('/cart', productController.cart);

// Product Detail

router.get('/:id/detail', productController.detail);

// Listado de Productos 

router.get('/', productController.list);

// Crear producto

router.get('/create', authMiddleware, productController.create);
router.post('/', upload.single ('image'), productController.add); 

// Un solo producto

router.get('/:id', productController.oneProduct);

// Edit

router.get('/:id/edit', authMiddleware, productController.edit); 
router.put('/:id', upload.single ('image'), productController.update);


router.get('/create/', productController.create);

router.delete('/:id', authMiddleware, productController.destroy); 


module.exports = router;