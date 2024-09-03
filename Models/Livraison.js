const {Model, DataTypes } = require ("sequelize");
const sequelize = require("../config/sequelize");
const Paiement = require("./Paiement");

class Livraison extends Model{
}

Livraison.init({
    livraison_id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    type_livraison : {
        type : DataTypes.STRING,
        allowNull : false
    },
    adresse_livraison : {
        type : DataTypes.STRING,
        allowNull : false
    },
    code_postal_livraison : {
        type : DataTypes.CHAR,
        allowNull : false
    },
    ville_livraison : {
        type : DataTypes.STRING,
        allowNull : false
    },
    statut_livraison : {
        type : DataTypes.STRING,
        allowNull : false
    },
    date_livraison : {
        type : DataTypes.DATE,
        allowNull : false
    },
    paiement_id : {
        type : DataTypes.INTEGER,
        allowNull : false,

        references : {
            model : 'Paiement',
            key : 'paiement_id'
        }
    }
},{
    sequelize,
    modelName : "Livraison",
    tableName : "Livraisons",
    timestamps : false
})

Paiement.hasMany(Livraison, {as: 'Livraison', foreignKey : "paiement_id"});
Livraison.belongsTo(Paiement, {as: 'Paiements', foreignKey: "paiement_id"});

module.exports = Livraison;