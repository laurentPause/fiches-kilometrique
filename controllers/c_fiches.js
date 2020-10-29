const Deplacements = require("../models/Deplacements")
const Entites = require("../models/Entites")
const Fiches = require("../models/Fiches")
const Individus = require("../models/Individus")
const Vehicules = require("../models/Vehicules")

exports.deplacements = async (req, res) => {
    await Deplacements.sync()
    const user = req.session.user
    const deplacementClient = await Deplacements.findOrCreate({
        where: {
            libelle: 'Client'
        },
        defaults: {
            libelle: 'Client'
        }
    })
    const deplacementProjet = await Deplacements.findOrCreate({
        where: {
            libelle: 'Projet'
        },
        defaults: {
            libelle: 'Projet'
        }
    })
    const deplacementReunion = await Deplacements.findOrCreate({
        where: {
            libelle: 'Réunion'
        },
        defaults: {
            libelle: 'Réunion'
        }
    })


    const deplacements = await Deplacements.findAll({});

    const options = {
        layout: 'layout/dashboard',
        title: 'Objets de déplacement',
        deplacements: deplacements,
        user: user
    }

    res.render('pages/admins/deplacements', options)
}

exports.view = async (req, res) => {
    const user = req.session.user;
    await Fiches.sync()

    const fiches = await Individus.findOne({
        where: {
            id: user.id
        },
        include: [
            {
                model: Fiches,
                include: [
                    { model: Entites },
                    { model: Deplacements },
                    { model: Vehicules }
                ]
            },
            {
                model:Entites,
                include:Vehicules
            }
        ]
    });

    const deplacements = await Deplacements.findAll();

    const options = {
        layout: 'layout/dashboard',
        title: 'Fiches',
        fiches: fiches,
        deplacements: deplacements,
        user: user
    }
    res.render('pages/users/fiches', options)
}