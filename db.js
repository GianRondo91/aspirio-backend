module.exports = (Promise.resolve('hola'));
const config = require('./config/config.json');

const { Sequelize, DataTypes } = require('sequelize');
const db = require('./models');
const sequelize = new Sequelize(
    process.env.MYSQL_DATABASE || config.production.database,
    process.env.MYSQL_USER || config.production.username,
    process.env.MYSQL_PASSWORD || config.production.password, {
        host: process.env.MYSQL_HOST || config.production.host,
        port: process.env.MYSQL_PORT || config.production.port || '3307',
        dialect: 'mysql',
        operatorAliases: false,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
    });

module.exports = sequelize.authenticate().then((db) => {
    console.log('mysql connect success');
    return db;
});