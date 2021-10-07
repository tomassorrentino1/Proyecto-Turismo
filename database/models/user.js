//const { UPSERT } = require("sequelize/types/lib/query-types");

module.exports = function (sequelize, dataTypes) {
    
    let alias = "Usuario";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: dataTypes.STRING
        },
        last_name: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING
        },
        image: {
            type: dataTypes.STRING
        }  
    }

    let config = {
        tableName: "user",
        timestamps: false
    }
  

    let usuarios = sequelize.define(alias, cols, config);

    return usuarios;
}