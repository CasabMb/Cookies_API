const {Model, DataTypes } = require ("sequelize");
const sequelize = require("../config/sequelize");
const Client = require("./Client");

class Commande extends Model{
}
Commande.init({
    commande_id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    montant_total : {
        type : DataTypes.DECIMAL,
        allowNull : false
    },
    statut_commande : {
        type : DataTypes.STRING,
        allowNull : false
    },
    mode_livraison : {
        type : DataTypes.STRING,
        allowNull : false
    },
    frais_livraison : {
        type : DataTypes.DECIMAL,
        allowNull : false
    },
    date_commande : {
        type : DataTypes.STRING,
        allowNull : false
    },
    client_id : {
        type : DataTypes.INTEGER,
        allowNull : false,
        
        references : {
            model : 'Client',
            key : 'client_id'
        }    
    },
    montant_Final: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0
    }
},{
    sequelize,
    modelName: 'Commande',
    tableName : "Commandes",
    timestamps: false
})

Client.hasMany(Commande, {as: 'Commandes', foreignKey : 'client_id'});
Commande.belongsTo(Client, {as: 'Clients', foreignKey : 'client_id'});

module.exports = Commande;