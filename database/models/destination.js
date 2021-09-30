module.exports = function (sequelize, dataTypes) {

    let alias = "destination";
    let cols = {
        destination_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        place: {
            type: dataTypes.STRING
        }        
    }

    let config = {
        tableName: "destinations",
        timestamps: false
    }


    let Destination = sequelize.define(alias, cols, config);

    Destination.associate=function(models) {
        Destination.belongsTo (models.Product, {
            as: 'products',
            foreignKey: 'destination_id'
        })
    }

    return Destination;
}