const { Sequelize, DataTypes } = require('sequelize');
const Entites = require('./Entites');
const sequelize = new Sequelize('sqlite::memory:');

const Entites_individus = sequelize.define('Entites_individus', {
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
  individu: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
        model: Entites,
        key:'id'
    }
  },
}, {
});
console.log(Entites_individus === sequelize.models.User); 
module.exports =  Entites_individus;

