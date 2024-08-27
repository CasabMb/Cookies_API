const Sequelize = require('sequelize');
const config = require('./config.json');

// creer la connexion a notre bdd
const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: 'mysql',
    port: config.port,
    retry: {
        match: [/Deadlock/i],
        max: 10, 
        backoffBase: 1000, 
        backoffExponent: 1.5, 
    },
})

module.exports = sequelize;