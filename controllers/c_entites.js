const Types = require("../models/Types")

exports.type = async (req, res) => {
    await Types.sync();
    const types = await Types.findOrCreate({
        defaults: [
            {
                libelle: 'Entreprise'
            },
            {
                libelle: 'Association'
            }

        ]
    });
    const options = {
        layout: 'layout/dashboard',
        title: 'Types d\'entités',
        types: types
    }
    res.render('pages/admins/types', options)
}