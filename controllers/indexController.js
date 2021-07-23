const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));



let indexController = {
   home: function(req, res){
        res.render('index', {products})
    }
}

module.exports = indexController;