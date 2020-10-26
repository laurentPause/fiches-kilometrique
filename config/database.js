const { Sequelize } = require('sequelize');
const Database = new Sequelize({
  dialect: 'sqlite',
  storage: './database.db'
});

module.exports =  Database;