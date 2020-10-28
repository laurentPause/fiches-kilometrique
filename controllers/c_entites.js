const Entites = require("../models/Entites");
const Individus = require("../models/Individus");
const Types = require("../models/Types");
const Vehicules = require("../models/Vehicules");

exports.types = async (req, res) => {
    const user = req.session.user;
    await Types.sync();
    const typesAssoce = await Types.findOrCreate({
        where: {
            libelle: 'Association'
        },
        defaults: {
            libelle: 'Association'
        }

    });
    const typesEntre = await Types.findOrCreate({
        where: {
            libelle: 'Entreprise'
        },
        defaults: {
            libelle: 'Entreprise'
        }

    });

    const types  = await Types.findAll({});
    const options = {
        layout: 'layout/dashboard',
        title: 'Types d\'entités',
        types: types,
        user: user
    }
    res.render('pages/admins/types', options)
}

exports.view = async (req, res) => {
    const user = req.session.user;
    await Entites.sync();
    const entites  = await Entites.findAll({
        include: {
            model: Types
        }
    });
    const types  = await Types.findAll({});


    const options = {
        layout: 'layout/dashboard',
        title: 'Entités',
        entites: entites,
        types: types,
        user: user
    }
    res.render('pages/admins/entites', options)
}

exports.board = async (req, res) => {
    const user = req.session.user;
    await Entites.sync();
    const entite  = await Entites.findOne({
       where:{
           id: req.params.id
       },
       include: [
           {
               model: Individus
           },
           {
               model: Vehicules
           }
       ]
    });

    const individus = await Individus.findAll();
    const vehicules = await Vehicules.findAll();

    const options = {
        layout: 'layout/dashboard',
        title: entite.nom,
        entite: entite,
        vehicules: vehicules,
        individus: individus,
        user: user
    }
    res.render('pages/admins/entites/board', options)
}

exports.add = async (req, res) => {
    try {
        const data = {
            nom,
            TypeId
        } = req.body;

        const entite = await Entites.create(data);

        res.status(200).json({
            message: 'OK',
            results: entite
        });
    } catch (error) {
        res.status(400).json({
            message: 'KO',
            results: error
        });
    }
}


