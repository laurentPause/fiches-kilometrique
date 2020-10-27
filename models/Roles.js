const { DataTypes } = require('sequelize');
const Database = require('../config/database');

const Roles = Database.define('Roles', {
  // Model attributes are defined here
  libelle: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
});

module.exports =  Roles;

