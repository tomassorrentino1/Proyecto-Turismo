module.exports = function (sequelize, dataTypes) {

    let alias = "Product";
    let cols = {
        idProduct: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.VARCHAR(50)
        },
        destination_id: {
            type: dataTypes.INTEGER
        },
        description: {
            type: dataTypes.VARCHAR(200)
        },
        price: {
            type: dataTypes.DECIMAL(10,2)
        },
        image: {
            type: dataTypes.VARCHAR(70)
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
        Product.belongsTo (models.product, {
            as: 'destination',
            foreignKey: 'idDestination'
        })

    }
    return Product;
}