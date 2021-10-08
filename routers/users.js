const express = require('express');
const router = express.Router();
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

let usersController = require('../controllers/usersController');

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
router.post('/register', upload.single ('image'), usersController.registerStore);


// Login

router.get('/login', guestMiddleware, usersController.login);
router.post('/login', usersController.loginStore);

//Profile
router.get('/profile', authMiddleware, usersController.profile);

//Listado de usuarios

router.get('/list', usersController.list);

module.exports = router;