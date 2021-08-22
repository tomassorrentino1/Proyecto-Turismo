module.exports = function (sequelize, dataTypes) {

    let alias = "Product";
    let cols = {
        
    }

    let config = {
        tableName: "products",
        timestamps: false
    }


    let productos = sequelize.define(alias, cols, config);

    return productos;
}