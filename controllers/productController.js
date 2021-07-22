const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

let productController = {
    cart: function(req, res, next) {
        res.render('productCart');
      },
    
    detail: function(req, res, next) {
        res.render('productDetail');
      },

    edit: function(req, res, next) {
        res.render('productEdit');
      },

    create: function(req, res, next){
      res.render('productCreate');
    },

    // Create -  Method to store
	store: (req, res) => {

		// BUSCO EL ULTIMO PRODUCTO DEL ARRAY
		// OBTENGO SU CAMPO ID 
		// LE SUMO 1 

		
		// OBTENGO EL LARGO DEL ARRAY

		// 16 
		// products[15]

		const lastProduct = products[products.length - 1]
		
		const productToCreate = req.body;
    
    console.log(productToCreate);
		// productToCreate.id significa
		// si existe la clave id en el objeto literal productToCreate
		// se va a sobreeescribir caso contrario se va a crear una clave id

	/*	const objeto = {
			valor1: 1
		}
		objeto.valor1 = 2;
		objeto.valor2 = 3;*/
	//	(objeto.clave = valor ) == tanto si existe o no el valor de la clave será el especificado

		productToCreate.id = lastProduct.id + 1;
	//	productToCreate.name = 'Hola';


		products.push(productToCreate);

		//fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2))


		

		//productToCreate.id = ID DEL ULTIMO PRODUCTO + 1

		
		
	},

    index: function(req, res, next){
        res.send(products);
    },

    oneProduct: function(req, res, next){
      const id = req.params.id;
      const product = products.find((prod) => prod.id == id);
      res.send(product);
    },

    edit: function(req, res, next){
      const id = req.params.id;
      const product = products.find((prod) => prod.id == id);
      if(!product){
        return res.send("no hay producto")
      }
      const viewData = {
        producto: product
      }
      return res.render('productEdit', viewData)
    },

    update: (req, res) =>{
      
      // ENCONTRAR EL INDICE DEL PRODUCTO EN EL ARRAY
      // EN BASE A SU ID
      const indiceDelProducto = products.findIndex( producto => producto.id == req.params.id);
      
      
      
       //products[indice encontrado] == producto en el array
      products[indiceDelProducto] = { ...products[indiceDelProducto] , ...req.body };
     
      
      

      //return res.send(req.params.body);
      
      

      // GUARDAR LA NUEVA BASE DE DATOS
      fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2))
      
  
      res.redirect(303, '/');
    }
}

module.exports = productController;