const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));



let indexController = {
   home: function(req, res){
        res.render('index', {products})
    },

    aboutUs: function (req, res) {
        res.render ('aboutUs', {products}) 
    },
    
    termCond: function  (req, res) {
        res.render ('termCond', {products})
        
    }
}

module.exports = indexController;