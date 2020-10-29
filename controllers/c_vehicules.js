const Entites = require("../models/Entites");
const Individus = require("../models/Individus");
const Types = require("../models/Types");
const Vehicules = require("../models/Vehicules");
const Vehicules_individus = require("../models/Vehicules_individus");
const Entites_individus = require("../models/Entites_individus");
const Entites_vehicules = require("../models/Entites_vehicules");

exports.view = async (req, res) => {
    const user = req.session.user;
    await Vehicules.sync()
    await Vehicules_individus.sync();

    const vehicules  = await Individus.findOne({
        where:{
            id: user.id
        },
        include: {
            model: Vehicules
        }
    });
    const options = {
        layout: 'layout/dashboard',
        title: 'Véhicules',
        vehicules: vehicules,
        user: user
    }
    res.render('pages/users/vehicules', options)
}

exports.board = async (req, res) => {
    const user = req.session.user;
    await Vehicules.sync()
    await Entites.sync()
    await Entites_individus.sync()
    await Entites_vehicules.sync()

    const vehicule  = await Vehicules.findOne({
        where:{
            id: req.params.id
        },
        include: {
            model: Entites,
            include: {
                model: Types
            }
        }
    });

    const entites = await Individus.findOne({
        where:{
            id: user.id
        },
        include: {
            model: Entites
        }
    })

    const dateVeh = new Date(vehicule.annee);
    const options = {
        layout: 'layout/dashboard',
        title: `${vehicule.marque} ${vehicule.modele} ${dateVeh.getFullYear()}`,
        vehicule: vehicule,
        entites: entites,
        user: user
    }
    res.render('pages/users/vehicules/board', options)
}

exports.add = async (req, res) => {
    try {
        const user = req.session.user;
        const data = {
            marque,
            modele,
            puissance,
            annee,
            immatriculation,
        } = req.body;

        const vehicule = await Vehicules.create(data);
        const jointure = await Vehicules_individus.create({
            VehiculeId: vehicule.id,
            IndividuId: user.id
        })

        res.status(200).json({
            message: 'OK',
            results: vehicule
        });
    } catch (error) {
        res.status(400).json({
            message: 'KO',
            results: error
        });
    }
}

exports.addEntites = async (req, res) => {
    try {
        const data = {
            total_km,
            EntiteId,
            VehiculeId
        } = req.body;

        const vehicule = await Entites_vehicules.create(data);

        res.status(200).json({
            message: 'OK',
            results: vehicule
        });
    } catch (error) {
        res.status(400).json({
            message: 'KO',
            results: error
        });
    }
}