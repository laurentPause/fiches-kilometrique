const Baremes = require("../models/Baremes");
const Regles = require("../models/Regles");

exports.view = async (req, res) => {
    const user = req.session.user;
    await Baremes.sync()

    const baremes = await Baremes.findAll({});

    const options = {
        layout: 'layout/dashboard',
        title: 'Baremes',
        baremes: baremes,
        user: user
    }
    res.render('pages/admins/baremes', options)
}

exports.add = async (req, res) => {
    try {
        const data = {
            dateBareme
        } = req.body;

        const bareme = await Baremes.create(data);

        res.status(200).json({
            message: 'OK',
            results: bareme
        });
    } catch (error) {
        res.status(400).json({
            message: 'KO',
            results: error
        });
    }
}

exports.addRegle = async (req, res) => {
    try {
        const data = {
            puissance,
            cinq,
            cinq_vingt,
            vingt,
            BaremeId
        } = req.body;

        const regle = await Regles.create(data);

        res.status(200).json({
            message: 'OK',
            results: regle
        });
    } catch (error) {
        res.status(400).json({
            message: 'KO',
            results: error
        });
    }
}

exports.board = async (req, res) => {
    const user = req.session.user;
    await Regles.sync()

    const bareme  = await Baremes.findOne({
        where:{
            id: req.params.id
        },
        include: {
            model: Regles
        }
    });
    const date = new Date(bareme.dateBareme);

    const options = {
        layout: 'layout/dashboard',
        title: `Barème ${date.getFullYear()}`,
        bareme: bareme,
        user: user
    }
    res.render('pages/admins/baremes/board', options)
}