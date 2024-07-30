const {Model, DataTypes } = require ("sequelize");
const sequelize = require("../config/sequelize");
const Commande = require("./Commande");

class Paiement extends Model{
}

Paiement.init({
    paiement_id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    montant : {
        type : DataTypes.DECIMAL,
        allowNull : false
    },
    date_paiement : {
        type : DataTypes.DATE,
        allowNull : false
    },
    statut_paiement : {
        type : DataTypes.STRING,
        allowNull : false
    },
    methode_paiement : {
        type : DataTypes.STRING,
        allowNull : false
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
    modelName : "Paiement",
    tableName : "Paiements",
    timestamps : false
})

Commande.hasMany(Paiement, {as: 'Paiement', foreignKey : "commande_id"});
Paiement.belongsTo(Commande, {as: 'Commandes', foreignKey: "commande_id"});

module.exports = Paiement;