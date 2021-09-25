module.exports = function (sequelize, dataTypes) {

    let alias = "Usuario";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: dataTypes.VARCHAR(15)
        },
        last_name: {
            type: dataTypes.VARCHAR(15)
        },
        email: {
            type: dataTypes.VARCHAR(30)
        },
        password: {
            type: dataTypes.VARCHAR(20)
        },
        image: {
            type: dataTypes.VARCHAR(70)
        }  
    }

    let config = {
        tableName: "usuarios",
        timestamps: false
    }


    let usuarios = sequelize.define(alias, cols, config);

    return usuarios;
}