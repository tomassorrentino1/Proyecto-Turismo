const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const db = require('../database/models');
const sequelize = db.sequelize;

const Product = db.Product;

let productController = {
    cart: function(req, res, next) {
        res.render('productCart');
      },


      'list':  async (req, res) => {
        db.Product.findAll()
            .then(producto => {
                res.render('products', { producto })
            })
          },

    'detail': function(req, res, next) {
    
      //const id = req.params.id;
      //const product = products.find((prod) => prod.id == id);

      db.Product.findByPk(req.params.id)

      .then(producto => {
        res.render ('productDetail', {producto})
      })
      

      //if(!producto){
        //return res.send("no hay producto")
      //}
      //const viewData = {
        //producto: producto
      //}
      //return res.render('productDetail', viewData)
      },

    //edit: async function(req, res) {

      //  const productToEdit = await Product.findByPk(req.params.id);
        //return res.render('productEdit', {Product: productToEdit});
     // },

    create: function(req, res, next){
        res.render('productCreate');
    },

    add: async function (req, res) {
      // Recibo los datos del formulario completado en la petición
      // req.body == { name: valor, rating: valor }

      try {
          const productoCreado = await Product.create(req.body)
          res.redirect(303, '/');
      } catch (error) {
          console.log(error);
          return res.send('Hubo un error')
      }

      

    // Create -  Method to store
	//store: (req, res) => {

		// BUSCO EL ULTIMO PRODUCTO DEL ARRAY, 
		// REQUIERO EL BODY DEL PRODUCTO Y OBTENGO SU CAMPO ID 
		// AL CAMPO ID LE SUMO 1 
		// OBTENGO EL LARGO DEL ARRAY
		// 16 
		// products[15]

		  //const lastProduct = products[products.length - 1]
		
		//const productToCreate = req.body;
  
    //productToCreate.id = lastProduct.id + 1;

    //products.push(productToCreate);

    //fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));

    //res.send(products);
    //console.log(productToCreate);
		// productToCreate.id significa
		// si existe la clave id en el objeto literal productToCreate
		// se va a sobreeescribir caso contrario se va a crear una clave id

	/*	const objeto = {
			valor1: 1
		}
		objeto.valor1 = 2;
		objeto.valor2 = 3;*/
	//	(objeto.clave = valor ) == tanto si existe o no el valor de la clave será el especificado

	
	//	productToCreate.name = 'Hola';

		//productToCreate.id = ID DEL ULTIMO PRODUCTO + 1

	},

    //index: function(req, res, next){

    //   res.render('products', {products});
    //},

    //'index': async (req, res) => {
      //  db.Product.findAll()
        //  .then(producto => {
          //    res.render('index', { producto })
          //})
        //},

    oneProduct: function(req, res, next){
      const id = req.params.id;
      const product = products.find((prod) => prod.id == id);
      res.send(product);
    },

    //edit: function(req, res, next){
      //const id = req.params.id;
      //const product = products.find((prod) => prod.id == id);
      //if(!product){
      //  return res.send("no hay producto")
      //}
      //const viewData = {
        //producto: product
      //}
      //return res.render('productEdit', viewData)

      edit: async function(req, res) {

        const productToEdit = await Product.findByPk(req.params.id);
        return res.render('productEdit', {Product: productToEdit});
      
    },

    update: async function (req, res) {
      
      const productoEditado = await Product.update(
          req.body,
          {
              where: {
                  idProduct: req.params.id
              }
          }
      );

      res.redirect(303, '/');
   // update: (req, res) =>{
      
      // ENCONTRAR EL INDICE DEL PRODUCTO EN EL ARRAY
      // EN BASE A SU ID
     // const indiceDelProducto = products.findIndex( producto => producto.id == req.params.id);
      
      
      
       //products[indice encontrado] == producto en el array
      //products[indiceDelProducto] = { ...products[indiceDelProducto] , ...req.body };
     
      
      

      //return res.send(req.params.body);
      
      

      // GUARDAR LA NUEVA BASE DE DATOS
      //fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2))
      
  
      //res.redirect(303, '/');
    },

    // Delete - Delete one product from DB
	destroy : async function (req, res) {
    await Product.destroy({where: {idProduct: req.params.id}})
   //(req, res) => {
		// Do the magic

		// Buscar el producto con el id recibido por parametros en el array
		// Eliminarlo
		// Guardar el archivo .json con el nuevo contenido de products

		// Filter
		

		//const nuevoArray = products.filter( (product) => product.id != req.params.id  );
		// Todos los productos cuyo id sea diferente al enviado por parámetro

    

		//fs.writeFileSync(productsFilePath, JSON.stringify(nuevoArray, null, 2));

		
		// session.mensaje = 'Producto creado';

		// vista
		// if(session.mensaje) 
		// <p> <%= session.mensaje %> 
		res.redirect(303, '/') // Notice the 303 parameter



	},
}

module.exports = productController;