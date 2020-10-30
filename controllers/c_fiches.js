const Baremes = require("../models/Baremes")
const Deplacements = require("../models/Deplacements")
const Entites = require("../models/Entites")
const Fiches = require("../models/Fiches")
const Individus = require("../models/Individus")
const Regles = require("../models/Regles")
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
    await Baremes.sync()

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


    const baremes = await Baremes.findAll({
        include:{
            model: Regles
        }
    });

    const deplacements = await Deplacements.findAll();

    const options = {
        layout: 'layout/dashboard',
        title: 'Fiches',
        fiches: fiches,
        deplacements: deplacements,
        baremes: baremes,
        user: user
    }
    res.render('pages/users/fiches', options)
}

exports.add = async (req, res) => {
    try {
        const user = req.session.user;
        const data = {
            dateFiche,
            depart,
            arriver,
            compteur_depart,
            compteur_arriver,
            commentaire,
            IndividuId,
            VehiculeId,
            EntiteId,
            DeplacementId
        } = req.body;

        const fiche = await Fiches.create(data);

        res.status(200).json({
            message: 'OK',
            results: fiche
        });
    } catch (error) {
        res.status(400).json({
            message: 'KO',
            results: error
        });
    }
}