const { DataTypes } = require('sequelize');
const Database = require('../config/database');

const Vehicules = Database.define('Vehicules', {
  // Model attributes are defined here
  marque: {
    type: DataTypes.STRING,
    allowNull: false
  },
  modele: {
    type: DataTypes.STRING,
    allowNull: false
  },
  puissance: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  annee: {
    type: DataTypes.DATE,
    allowNull: false
  },
  immatriculation: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
});

module.exports =  Vehicules;

