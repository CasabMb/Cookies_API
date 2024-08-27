const {Model, DataTypes } = require ("sequelize");
const sequelize = require("../config/sequelize");
const bcrypt = require('bcrypt');

class Client extends Model{
    async validatePassword(password){
        return await bcrypt.compare(password, this.password);
        
    }
}


Client.init({
    client_id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    nom : {
        type : DataTypes.STRING,
        allowNull : false
    },
    prenom : {
        type : DataTypes.STRING,
        allowNull : false
    },
    adresse : {
        type : DataTypes.STRING,
        // allowNull : false
    },
    code_postal : {
        type : DataTypes.CHAR,
        // allowNull : false,
        length : 7
    },
    ville : {
        type : DataTypes.STRING,
        // allowNull : false
    },
    phone : {
        type : DataTypes.CHAR,
        // allowNull : false,
        length : 13,
        unique : true
    },
    email : {
        type : DataTypes.STRING,
        allowNull : false,
        unique : true
    },
    password : {
        type : DataTypes.TEXT,
        allowNull : false
    },
    date_inscription : {
        type : DataTypes.DATE,
        // allowNull : false
    }
},{
    sequelize,
    modelName : "Client",
    tableName : "Clients",
        // tablename c'est le nom de la table dans la base de donée
    timestamps : false,
    hooks :{
        beforeCreate : async (client) => {
            client.password = await bcrypt.hash(client.password, 10)
            },
        beforeUpdate : async (client) =>{
            if (client.changed('password')){
                client.password = await bcrypt.hash(client.password, 10)
            }
        }
    }
})

module.exports = Client;