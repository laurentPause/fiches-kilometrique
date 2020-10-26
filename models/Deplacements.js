const { DataTypes } = require('sequelize');
const Database = require('../config/database');


const Deplacements = Database.define('Deplacements', {
  // Model attributes are defined here
  libelle: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
});

module.exports =  Deplacements;

