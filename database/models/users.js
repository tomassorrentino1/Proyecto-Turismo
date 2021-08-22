module.exports = function (sequelize, dataTypes) {

    let alias = "Usuario";
    let cols = {
        
    }

    let config = {
        tableName: "usuarios",
        timestamps: false
    }


    let usuarios = sequelize.define(alias, cols, config);

    return usuarios;
}