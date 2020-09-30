const {
    Sequelize,
    DataTypes
} = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
});
const Individus = require('../models/Individus');
// const Deplacements = require('../models/Deplacements');
// const Entites = require('../models/Entites');
// const Entites_individus = require('../models/Entites_individus');
// const Entites_vehicules = require('../models/Entites_vehicules');
// const Trajets = require('../models/Trajets');
// const Types = require('../models/Types');
// const Vehicules = require('../models/Vehicules');


exports.add = async (req, res) => {
    try {
        const Models = setModel(req.body.model);
        await Models.sync();
        const results = await Models.create(req.body.data);
        res.status(200).json({
            message: 'OK',
            results: results
        });
    } catch (error) {
        res.status(400).json({
            message: 'KO',
            results: error
        });
    } 
}

exports.all = async (req, res) => {
    console.log(req.params.model)
    try {
        const Models = setModel(req.params.model);
        await Models.sync();
        const results = await Models.findAll({ raw: true });
        console.log(results);
        res.status(200).json({
            message: 'OK',
            results: results
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message: 'KO',
            results: error
        });
    } 
}

exports.finds = async (req, res) => {
    try {
        console.log('Individu add :',req.body)
        await Individus.sync()
        const individu = await Individus.create({
            nom: req.body.nom,
            prenom: req.body.prenom,
            function: req.body.function            
        });
        res.status(200).json({
            message: 'OK',
            results: individu
        });
    } catch (error) {
        res.status(400).json({
            message: 'KO',
            results: error
        });
    } 
}

exports.oneById = async (req, res) => {
    try {
        console.log('Individu add :',req.body)
        await Individus.sync()
        const individu = await Individus.create({
            nom: req.body.nom,
            prenom: req.body.prenom,
            function: req.body.function            
        });
        res.status(200).json({
            message: 'OK',
            results: individu
        });
    } catch (error) {
        res.status(400).json({
            message: 'KO',
            results: error
        });
    } 
}

exports.delete = async (req, res) => {
    try {
        console.log('Individu add :',req.body)
        await Individus.sync()
        const individu = await Individus.create({
            nom: req.body.nom,
            prenom: req.body.prenom,
            function: req.body.function            
        });
        res.status(200).json({
            message: 'OK',
            results: individu
        });
    } catch (error) {
        res.status(400).json({
            message: 'KO',
            results: error
        });
    } 
}

function setModel(modelsString) {
    switch (modelsString) {
        case 'Individus':
            return Individus;
            break;
        case 'Deplacements':
            return Deplacements;
            break;
        case 'Entites':
            return Entites;
            break;
        case 'Entites_individus':
            return Entites_individus;
            break;
        case 'Entites_vehicules':
            return Entites_vehicules;
            break;
        case 'Trajets':
            return Trajets;
            break;
        case 'Types':
            return Types;
            break;
        case 'Vehicules':
            return Vehicules;
            break;
    
        default:
            return null;
            break;
    }
}