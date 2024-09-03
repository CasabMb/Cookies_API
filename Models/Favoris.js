// Models/Favoris.js
const {Model, DataTypes } = require ("sequelize");
const sequelize = require("../config/sequelize");
const Client = require("./Client");
const Produit = require("./Produit");

class Favoris extends Model{

}

Favoris.init({
    favoris_id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    client_id : {
        type : DataTypes.INTEGER,
        allowNull : false,

        references : {
            model : 'Client',
            key : 'client_id'
        }
    },
    produit_id : {
        type : DataTypes.INTEGER,
        allowNull : false,

        references : {
            model : 'Produit',
            key : 'produit_id'
        }
    }
},{
    sequelize,
    modelName : "Favori",
    tableName : "Favoris",
    timestamps : false
})
Client.hasMany(Favoris, {as: 'Favoris', foreignKey : 'client_id'});
Favoris.belongsTo(Client, {as: 'Clients', foreignKey : 'client_id'});

Produit.hasMany(Favoris, {as: 'Favoris', foreignKey : 'produit_id'});
Favoris.belongsTo(Produit, {as: 'Produits', foreignKey : 'produit_id'});


module.exports = Favoris;