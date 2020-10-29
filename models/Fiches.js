const { DataTypes } = require('sequelize');
const Database = require('../config/database');
const Deplacements = require('./Deplacements');
const Entites = require('./Entites');
const Individus = require('./Individus');
const Vehicules = require('./Vehicules');


const Fiches = Database.define('Fiches', {
  // Model attributes are defined here
  dateFiche: {
    type: DataTypes.DATE,
    allowNull: false
  },
  depart: {
    type: DataTypes.STRING,
    allowNull: false
  },
  arriver: {
    type: DataTypes.STRING,
    allowNull: false
  },
  commentaire: {
    type: DataTypes.STRING,
  },
  compteur_depart: {
    type: DataTypes.NUMBER,
    allowNull: false
  },
  compteur_arriver: {
    type: DataTypes.NUMBER,
    allowNull: false
  },
}, {
});

Deplacements.hasMany(Fiches);
Fiches.belongsTo(Deplacements);

Entites.hasMany(Fiches);
Fiches.belongsTo(Entites);

Vehicules.hasMany(Fiches);
Fiches.belongsTo(Vehicules);

Individus.hasMany(Fiches);
Fiches.belongsTo(Individus);

module.exports = Fiches;

