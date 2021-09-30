module.exports = function (sequelize, dataTypes) {

    let alias = "category";
    let cols = {
        idCategory: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        type: {
            type: dataTypes.STRING
        }        
    }

    let config = {
        tableName: "categories",
        timestamps: false
    }


    let Category = sequelize.define(alias, cols, config);

    Category.associate=function(models) {
        Category.belongsTo (models.Product, {
            as: 'products',
            foreignKey: 'idCategory'
        })
    }

    return Category;
}