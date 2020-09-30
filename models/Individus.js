const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Individus = sequelize.define('Individus', {
  // Model attributes are defined here
  nom: {
    type: DataTypes.STRING,
    allowNull: false
  },
  prenom: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fonction: {
    type: DataTypes.STRING
  }
}, {
});
console.log(Individus === sequelize.models.Individus); 
module.exports =  Individus;

