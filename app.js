const express = require('express');
const path = require('path')

const app = express();

const rutaIndex = require('./routers/index');

const rutaUsuarios = require('./routers/users');

const rutaProductos = require('./routers/products');
const methodOverride =  require('method-override');
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(methodOverride('_method'));

const publicPath = path.resolve(__dirname, './public')
app.use(express.static(publicPath))

const viewsPath = path.resolve(__dirname, './views')


app.listen( 4000, () => {
    console.log('Servidor corriendo en el puerto 4000')
});

app.use('/', rutaIndex);
app.use('/user', rutaUsuarios);
app.use('/products', rutaProductos);



