const { Sequelize, DataTypes } = require('sequelize');
const Entites = require('./Entites');
const Individus = require('./Individus');
const Vehicules = require('../models/Vehicules');
const Deplacements = require('./Deplacements');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: '../database.db'
});
const Trajets = sequelize.define('Trajets', {
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
  },
  entite: {
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
        model: Individus,
        key:'id'
    }
  },
  deplacement: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
        model: Deplacements,
        key:'id'
    }
  },
  vehicule: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
        model: Vehicules,
        key:'id'
    }
  },
}, {
});
console.log(Trajets === sequelize.models.Trajets); 
module.exports =  Trajets;

