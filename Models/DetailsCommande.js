const {Model, DataTypes } = require ("sequelize");
const sequelize = require("../config/sequelize");

const Produit = require("./Produit");
const Commande = require("./Commande");

class DetailsCommande extends Model{
}

DetailsCommande.init({
    details_commande_id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    quantite : {
        type : DataTypes.INTEGER,
        allowNull : false
    },
    prix_unitaire : {
        type : DataTypes.DECIMAL,
        allowNull : false
    },
    produit_id : {
        type : DataTypes.INTEGER,
        allowNull : false,

        references : {
            model : 'Produit',
            key : 'produit_id'
        }
    },
    commande_id : {
        type : DataTypes.INTEGER,
        allowNull : false,

        references : {
            model : 'Commande',
            key : 'commande_id'
        }
    }
},{
    sequelize,
    modelName : "DetailsCommande",
    tableName : "Details_commande",
    timestamps : false
})

Produit.hasMany(DetailsCommande, {as: 'DetailsCommande', foreignKey : "produit_id"});
DetailsCommande.belongsTo(Produit, {as: 'Produits', foreignKey: "produit_id"});

Commande.hasMany(DetailsCommande, {as: 'DetailsCommande', foreignKey : "commande_id"});
DetailsCommande.belongsTo(Commande, {as: 'Commandes', foreignKey: "commande_id"});

module.exports = DetailsCommande;