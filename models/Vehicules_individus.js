const { DataTypes } = require('sequelize');
const Database = require('../config/database');

const Individus = require('./Individus');
const Vehicules = require('./Vehicules');

const Vehicules_individus = Database.define('Vehicules_individus', {
  // Model attributes are defined here
  total_km: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue:0
  }
}, {
});
Vehicules.belongsToMany(Individus, { through: Vehicules_individus });
Individus.belongsToMany(Vehicules, { through: Vehicules_individus });

module.exports =  Vehicules_individus;

