const { DataTypes } = require('sequelize');
const Database = require('../config/database');

const Baremes = Database.define('Baremes', {
  // Model attributes are defined here
  dateBareme: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
});

module.exports =  Baremes;

