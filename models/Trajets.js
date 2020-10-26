const { DataTypes } = require('sequelize');
const Database = require('../config/database');

const Entites = require('./Entites');
const Individus = require('./Individus');
const Vehicules = require('../models/Vehicules');
const Deplacements = require('./Deplacements');

const Trajets = Database.define('Trajets', {
  // Model attributes are defined here
  jour: {
    type: DataTypes.DATE,
    allowNull: false
  },
  lieu_depart: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lieu_arrive: {
    type: DataTypes.STRING,
    allowNull: false
  },
  commentaire: {
    type: DataTypes.STRING,
  },
  arrive: {
    type: DataTypes.DATE,
    allowNull: false
  },
  depart: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
});

Individus.hasMany(Trajets);
Trajets.belongsTo(Individus);

Entites.hasMany(Trajets);
Trajets.belongsTo(Entites);

Vehicules.hasMany(Trajets);
Trajets.belongsTo(Vehicules);

Deplacements.hasMany(Trajets);
Trajets.belongsTo(Deplacements);

module.exports =  Trajets;

