const Individus = require("../models/Individus");
const Vehicules = require("../models/Vehicules");
const Vehicules_individus = require("../models/Vehicules_individus");

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
        title: 'Entités',
        vehicules: vehicules,
        user: user
    }
    res.render('pages/users/vehicules', options)
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