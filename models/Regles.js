const { DataTypes } = require('sequelize');
const Database = require('../config/database');
const Baremes = require('./Baremes');


const Regles = Database.define('Regles', {
  // Model attributes are defined here
  puissance: {
    type: DataTypes.NUMBER,
    allowNull: false
  },
  cinq: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cinq_vingt: {
    type: DataTypes.STRING,
    allowNull: false
  },
  vingt: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
});

Baremes.hasMany(Regles);
Regles.belongsTo(Baremes);

module.exports =  Regles;

