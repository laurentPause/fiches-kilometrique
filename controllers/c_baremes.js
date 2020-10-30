const Baremes = require("../models/Baremes");

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