const { DataTypes } = require('sequelize');
const Database = require('../config/database');
const Roles = require('./Roles');


const Individus = Database.define('Individus', {
  // Model attributes are defined here
  nom: {
    type: DataTypes.STRING,
    allowNull: false
  },
  prenom: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fonction: {
    type: DataTypes.STRING
  }
}, {
});

Roles.hasMany(Individus);
Individus.belongsTo(Roles);

module.exports =  Individus;

