const {Model, DataTypes } = require ("sequelize");
const sequelize = require("../config/sequelize");
const Commande = require("./Commande");

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
    modelName : "Livraison",
    tableName : "Livraisons",
    timestamps : false
})

Commande.hasMany(Livraison, {as: 'Livraison', foreignKey : "commande_id"});
Livraison.belongsTo(Commande, {as: 'Commandes', foreignKey: "commande_id"});

module.exports = Livraison;