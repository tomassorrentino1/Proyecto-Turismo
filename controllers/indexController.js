const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const db = require('../database/models');
const sequelize = db.sequelize;

const Product = db.Product;

let indexController = {
   //home: function(req, res){
    //    res.render('index', {products})
    //},

    'home': async (req, res) => {
          db.Product.findAll()
           .then(producto => {
                res.render('index', { producto })
            })
        },

    aboutUs: function (req, res) {
        res.render ('aboutUs', {products}) 
    },
    
    termCond: function  (req, res) {
        res.render ('termCond', {products})
        
    }
}

module.exports = indexController;