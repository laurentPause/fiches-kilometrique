const Individus = require("../models/Individus");
const Roles = require("../models/Roles");
const Types = require("../models/Types")

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