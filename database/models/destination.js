module.exports = function (sequelize, dataTypes) {

    let alias = "destination";
    let cols = {
        idDestination: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        place: {
            type: dataTypes.VARCHAR(15)
        }        
    }

    let config = {
        tableName: "destinations",
        timestamps: false
    }


    let Destination = sequelize.define(alias, cols, config);

    Destination.associate=function(models) {
        Destination.belongsTo (models.product, {
            as: 'products',
            foreignKey: 'idDestination'
        })
    }

    return destination;
}