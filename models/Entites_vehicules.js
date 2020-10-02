const { Sequelize, DataTypes } = require('sequelize');
const Entites = require('./Entites');
const Vehicules = require('./Vehicules');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: '../database.db'
});
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
        model: Vehicules,
        key:'id'
    }
  },
}, {
});
console.log(Entites_vehicules === sequelize.models.Entites_vehicules); 
module.exports =  Entites_vehicules;

