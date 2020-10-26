const { DataTypes } = require('sequelize');
const Database = require('../config/database');



const Entites = require('./Entites');
const Individus = require('./Individus');

const Entites_individus = Database.define('Entites_individus', {
  // Model attributes are defined here
  total_km: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue:0
  }
}, {
});
Entites.belongsToMany(Individus, { through: Entites_individus });
Individus.belongsToMany(Entites, { through: Entites_individus });

module.exports =  Entites_individus;

