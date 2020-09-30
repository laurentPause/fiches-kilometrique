const { Sequelize, DataTypes } = require('sequelize');
const Entites = require('./Entites');
const sequelize = new Sequelize('sqlite::memory:');

const Entites_vehicules = sequelize.define('Entites_vehicules', {
  // Model attributes are defined here
  total_km: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue:0
  },
  entites: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
        model: Entites,
        key:'id'
    }
  },
  vehicule: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
        model: Entites,
        key:'id'
    }
  },
}, {
});
console.log(Entites_vehicules === sequelize.models.Entites_vehicules); 
module.exports =  Entites_vehicules;

