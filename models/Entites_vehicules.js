const {  DataTypes } = require('sequelize');
const Database = require('../config/database');



const Entites = require('./Entites');
const Vehicules = require('./Vehicules');

const Entites_vehicules = Database.define('Entites_vehicules', {
  // Model attributes are defined here
  total_km: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue:0
  }
}, {
});

Entites.belongsToMany(Vehicules, { through: Entites_vehicules });
Vehicules.belongsToMany(Entites, { through: Entites_vehicules });

module.exports =  Entites_vehicules;

