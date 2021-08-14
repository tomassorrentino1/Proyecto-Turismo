const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const bcrypt = require('bcrypt');
const saltRounds = 10;

const { validationResult } = require('express-validator');




let usersController = {
    login: function(req, res, next) {
        res.render('login');
      },

    loginStore: (req, res) => {

      // Buscar en users.json
        // Un usuario cuyo mail sea igual al req.body.email

      const userToLogin = users.find((user) => user.email == req.body.email);
      if(!userToLogin){
        return res.send('error');
      }

      // Comparar la contraseña del usuario de la base con la enviada en la petición

      const comparacion = bcrypt.compareSync(req.body.password, userToLogin.password);

      if(comparacion){
        req.session.user = userToLogin;

      }

      return res.redirect('/', 301)

    },







    register: function(req, res, next) {
      res.render('register');
},

    registerStore: (req, res) =>{
      const lastUser = users[users.length - 1]

      

      const userToCreate = req.body;

      userToCreate.id = lastUser.id + 1;
      
      

      userToCreate.password = bcrypt.hashSync(req.body.password, saltRounds)

      users.push(userToCreate);
      fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2))
      

      res.redirect(303, '/')

    }

}

module.exports = usersController;