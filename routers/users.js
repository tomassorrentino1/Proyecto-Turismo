const express = require('express');
const router = express.Router();
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const { body } = require("express-validator")

let usersController = require('../controllers/usersController');

//Validaciones

const validateCreateForm = [
    body("first_name").notEmpty().withMessage("Debes completar el campo de nombre"),
    body("first_name").isLength({min: 2}).withMessage("Debe tener al menos 2 caracteres"),
    body("last_name").notEmpty().withMessage("Debes completar el campo de apellido"),
    body("last_name").isLength({min: 2}).withMessage("Debe tener al menos 2 caracteres"),
    body("email").notEmpty().withMessage("Debes completar el campo de email"),
    body("email").isEmail().withMessage("Debes completar un email válido"),
    body("password").notEmpty().withMessage("Debes completar una contrasena"),
    body("password").isLength({min: 8}).withMessage("Debe tener al menos 8 caracteres"),
    body("image").notEmpty().withMessage("Debes cargar una imagen")
]

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

// Register

router.get('/register', guestMiddleware, usersController.register);
router.post('/register', upload.single ('image'), validateCreateForm, usersController.registerStore);


// Login

router.get('/login', guestMiddleware, usersController.login);
router.post('/login',validateCreateForm, usersController.loginStore);

//Profile
router.get('/profile', authMiddleware, usersController.profile);

//Listado de usuarios

router.get('/list', usersController.list);

module.exports = router;