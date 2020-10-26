const { DataTypes } = require('sequelize');
const Database = require('../config/database');

const Types = Database.define('Types', {
  // Model attributes are defined here
  libelle: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
});

module.exports =  Types;

