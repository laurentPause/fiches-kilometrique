const {
    Sequelize,
    DataTypes
} = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');
const Individus = require('../models/Trajets');
const Individus = require('../models/Deplacements');