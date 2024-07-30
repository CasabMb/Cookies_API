const {Model, DataTypes} =  require('sequelize');
const sequelize = require('../config/sequelize');

class Categorie extends Model{
}
Categorie.init({   
    categorie_id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    nom_categorie : {
        type : DataTypes.STRING,
        allowNull : false
    }
},{
    sequelize,
    modelName : "Categorie",
    tableName : "Categories",
    timestamps : false,
})

module.exports = Categorie;