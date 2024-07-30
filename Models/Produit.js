const {Model, DataTypes } = require ("sequelize");
const sequelize = require("../config/sequelize");
const Categorie = require("./Categorie");

class Produit extends Model{
}
Produit.init({
    produit_id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    nom_produit : {
        type : DataTypes.STRING,
        allowNull : false
    },
    description_produit : {
        type : DataTypes.STRING,
        allowNull : false
    },
    prix_produit : {
        type : DataTypes.DECIMAL,
        allowNull : false
    },
    stock : {
        type : DataTypes.INTEGER,
        allowNull : false
    },
    image_produit : {
        type : DataTypes.STRING,
        allowNull : false
    },
    categorie_id : {
        type : DataTypes.INTEGER,
        allowNull : false,

        references : {
            model : 'Categorie',
            key : 'categorie_id'
        }
    },
},{
    sequelize,
    modelName: 'Produit',
    tableName: 'Produits',
    timestamps: false
})
Categorie.hasMany(Produit, {as: 'Produit', foreignKey : 'categorie_id'});
Produit.belongsTo(Categorie, {as: 'Categories', foreignKey : 'categorie_id'});

module.exports = Produit;