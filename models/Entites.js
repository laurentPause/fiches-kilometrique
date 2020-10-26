const { DataTypes } = require('sequelize');
const Database = require('../config/database');

const Types = require('./Types');

const Entites = Database.define('Entites', {
  // Model attributes are defined here
  nom: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
});

Types.hasMany(Entites);
Entites.belongsTo(Types);

module.exports =  Entites;

