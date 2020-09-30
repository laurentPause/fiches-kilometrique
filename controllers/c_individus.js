const {
    Sequelize,
    DataTypes
} = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');
const Individus = require('../models/Individus');

exports.add = async (req, res) => {
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