const express = require('express');
const path = require('path')

const app = express();

const rutaIndex = require('./routers/index');
const rutaUsuariosLogIn = require('./routers/userLogIn');
const rutaUsuariosRegister = require('./routers/usersRegister');
const rutaProductCart = require('./routers/productCart');
const rutaProductDetail = require('./routers/productDetail');
const rutaProductEdit = require('./routers/productEdit');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const publicPath = path.resolve(__dirname, './public')
app.use(express.static(publicPath))

const viewsPath = path.resolve(__dirname, './views')
app.use(express.static(viewsPath))

app.listen( 4000, () => {
    console.log('Servidor corriendo en el puerto 4000')
});

app.use('/', rutaIndex);
app.use('/login', rutaUsuariosLogIn);
app.use('/register', rutaUsuariosRegister);
app.use('/productCart', rutaProductCart);
app.use('/productDetail', rutaProductDetail);
app.use('/productEdit', rutaProductEdit);



