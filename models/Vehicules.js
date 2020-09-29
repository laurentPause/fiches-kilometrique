const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Vehicules = sequelize.define('Vehicules', {
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
    type: DataTypes.STRING,
    allowNull: false
  },
  immatriculation: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
});
console.log(Vehicules === sequelize.models.User); 
module.exports =  Vehicules;

