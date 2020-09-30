const {
    Sequelize,
    DataTypes
} = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');
const Individus = require('../models/Individus');

exports.add = async (req, res) => {
    await Individus.sync()
    const test = await Individus.create({
        nom: "test",
        prenom: "test"
    });

    res.render('accueil/test',test);
}