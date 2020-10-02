const { Sequelize, DataTypes } = require('sequelize');
const Types = require('./Types');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: '../database.db'
});
const Entites = sequelize.define('Entites', {
  // Model attributes are defined here
  nom: {
    type: DataTypes.STRING,
    allowNull: false
  },
  type: {
      type: DataTypes.INTEGER,
      references:{
        model: Types,
        key: 'id',
      }
  }
}, {
});
console.log(Entites === sequelize.models.Entites); 
module.exports =  Entites;

