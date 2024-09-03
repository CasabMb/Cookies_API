const {Model, DataTypes } = require ("sequelize");
const sequelize = require("../config/sequelize");
const Client = require("./Client");
const Produit = require("./Produit");

class Paniers extends Model{
}

Paniers.init({
    panier_id : {
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
    },
    quantite : {
        type : DataTypes.INTEGER,
        allowNull : false
    }
},{
    sequelize,
    modelName : "Panier",
    tableName : "Paniers",
    timestamps : false
})

// Relations entre les modèles
Client.hasMany(Paniers, {as: 'Paniers', foreignKey : 'client_id'});
Paniers.belongsTo(Client, {as: 'Clients', foreignKey : 'client_id'});

Produit.hasMany(Paniers, {as: 'Paniers', foreignKey : 'produit_id'});
Paniers.belongsTo(Produit, {as: 'Produits', foreignKey : 'produit_id'});

module.exports = Paniers;

