const Sequelize = require('sequelize');
const config = require('./config.json');

// creer la connexion a notre bdd
//equivalent à PDO en php
const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: 'mysql',
    port: config.port
})

//pour pouvoir utiliser la connexion on fait
module.exports = sequelize;