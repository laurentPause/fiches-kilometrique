const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Deplacements = sequelize.define('Deplacements', {
  // Model attributes are defined here
  libelle: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
});
console.log(Deplacements === sequelize.models.Deplacements); 
module.exports =  Deplacements;

