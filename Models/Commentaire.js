const {Model, DataTypes } = require ("sequelize");
const sequelize = require("../config/sequelize");
const Commande = require("./Commande");
const Client = require("./Client");

class Commentaire extends Model{
}

Commentaire.init({
    commentaire_id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    note : {
        type : DataTypes.INTEGER,
        allowNull : false
    },
    commentaire : {
        type : DataTypes.TEXT,
        allowNull : false
    },
    date_commentaire : {
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
    },
    client_id : {
        type : DataTypes.INTEGER,
        allowNull : false,

        references : {
            model : 'Clients',
            key : 'clients_id'
        }
    }
},{
    sequelize,
    modelName : "Commentaire",
    tableName : "Commentaires",
    timestamps : false
})

Commande.hasMany(Commentaire, {as: 'Commentaire', foreignKey : "commande_id"});
Commentaire.belongsTo(Commande, {as: 'Commandes', foreignKey: "commande_id"});

Client.hasMany(Commentaire, {as: 'Commentaire', foreignKey : "client_id"});
Commentaire.belongsTo(Client, {as: 'Clients', foreignKey: "client_id"});

module.exports = Commentaire;