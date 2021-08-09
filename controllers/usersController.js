const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../data/products.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const bcrypt = require('bcrypt');
const saltRounds = 10;




let usersController = {
    login: function(req, res, next) {
        res.render('login');
      },

    register: function(req, res, next) {
      res.render('register');
},

    registerStore: (req, res) =>{
      const userToCreate = req.body;
      
      

      userToCreate.password = bcrypt.hashSync(req.body.password, saltRounds)

      users.push(userToCreate);
      fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2))
      return res.send(users);

      

    }

}

module.exports = usersController;