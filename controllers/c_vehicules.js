const {
    Sequelize,
    DataTypes
} = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');
const Individus = require('../models/Vehicules');