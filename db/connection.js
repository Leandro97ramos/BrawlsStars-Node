const Sequelize = require('sequelize');

const db = new Sequelize('bd_brawls_super_stars', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = db;