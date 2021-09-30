module.exports = function (sequelize, dataTypes) {

    let alias = "Product";
    let cols = {
        idProduct: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        },
        destination_id: {
            type: dataTypes.INTEGER
        },
        description: {
            type: dataTypes.STRING
        },
        price: {
            type: dataTypes.DECIMAL(10,2)
        },
        image: {
            type: dataTypes.STRING
        },
        category_id: {
            type: dataTypes.INTEGER
        }        
    }

    let config = {
        tableName: "products",
        timestamps: false
    }


    let Product = sequelize.define(alias, cols, config);

    Product.associate=function(models) {
        Product.hasMany (models.destination, {
            as: 'categories',
            foreignKey: 'idCategory'
        }),
        Product.belongsTo (models.Product, {
            as: 'destination',
            foreignKey: 'destination_id'
        })

    }
    return Product;
}