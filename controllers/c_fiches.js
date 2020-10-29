const Deplacements = require("../models/Deplacements")

exports.deplacements = async (req,res) => {
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