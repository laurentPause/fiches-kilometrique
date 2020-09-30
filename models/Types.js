const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Types = sequelize.define('Types', {
  // Model attributes are defined here
  libelle: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
});
console.log(Types === sequelize.models.Types); 
module.exports =  Types;

