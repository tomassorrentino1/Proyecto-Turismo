const express = require('express');
const path = require('path')

const app = express();

const rutaIndex = require('./routers/index');

const rutaUsuarios = require('./routers/users');

const rutaProductos = require('./routers/products');

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
app.use('/user', rutaUsuarios);
app.use('/products', rutaProductos);



