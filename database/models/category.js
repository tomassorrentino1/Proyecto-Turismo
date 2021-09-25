module.exports = function (sequelize, dataTypes) {

    let alias = "category";
    let cols = {
        idCategory: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        type: {
            type: dataTypes.VARCHAR(15)
        }        
    }

    let config = {
        tableName: "categories",
        timestamps: false
    }


    let Category = sequelize.define(alias, cols, config);

    Category.associate=function(models) {
        Category.belongsTo (models.product, {
            as: 'products',
            foreignKey: 'idCategory'
        })
    }

    return category;
}