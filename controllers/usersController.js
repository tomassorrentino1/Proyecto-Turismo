const fs = require("fs");
const path = require("path");

const usersFilePath = path.join(__dirname, "../data/users.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

const bcrypt = require("bcrypt");
const saltRounds = 10;

const { validationResult } = require("express-validator");
const { profile } = require("console");

const db = require("../database/models");
const sequelize = db.sequelize;

const User = db.Usuario;

let usersController = {
  login: function (req, res, next) {
    res.render("login");
  },

  list: async (req, res) => {
    User.findAll().then((usuario) => {
      res.render("users", { usuario });
    });
  },

  loginStore: (req, res) => {
    // Buscar en users.json
    // Un usuario cuyo mail sea igual al req.body.email

    const userToLogin = users.find((user) => user.email == req.body.email);
    if (!userToLogin) {
      return res.send("este usuario no existe");
    }

    // Comparar la contraseña del usuario de la base con la enviada en la petición

    const comparacion = bcrypt.compareSync(
      req.body.password,
      userToLogin.password
    );

    if (comparacion) {
      req.session.user = userToLogin;
      req.session.userLogged = userToLogin;
      res.render("productCreate");
      //return res.redirect('/', 301)
    } else res.send("contraseña incorrecta");
  },

  register: function (req, res, next) {
    res.render("register");
  },

  registerStore: async function (req, res) {
    try {
      const usuarioCreado = await User.create(req.body);
      usuarioCreado.password = bcrypt.hashSync(req.body.password, saltRounds);
      return res.send(usuarioCreado);
    } catch (error) {
      console.log(error);
      return res.send("Hubo un error");
    }

    //(req, res) =>{
    //const lastUser = users[users.length - 1]

    //const userToCreate = req.body;

    //userToCreate.id = lastUser.id + 1;

    //users.push(userToCreate);
    //fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2))

    res.redirect(303, "/");
  },

  profile: function (req, res, next) {
    res.render("profile");
    console.log(req.session);
  },
};

module.exports = usersController;
