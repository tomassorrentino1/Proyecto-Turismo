const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../data/products.json');
const users = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));



let usersController = {
    login: function(req, res, next) {
        res.render('login');
      },

    register: function(req, res, next) {
      res.render('register');
},

    registerStore: (req, res) =>{
      const userToCreate = req.body;
      const lastUser = users[users.length - 1]
      userToCreate.id = lastUser.id + 1;
      userToCreate.password = bcrypt.hashsync

    }

}

module.exports = usersController;