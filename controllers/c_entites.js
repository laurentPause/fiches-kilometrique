const {
    Sequelize,
    DataTypes
} = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');
const Individus = require('../models/Entites');
const Individus = require('../models/Entites_individus');
const Individus = require('../models/Entites_vehicules');
const Individus = require('../models/Types');