const Individus = require("../models/Individus");
const Roles = require("../models/Roles");

exports.dashboard = async (req, res, next) => {
    
    const user = req.session.user;
    const options ={
        layout: 'layout/dashboard',
        title: 'Tableau de bord',
        user: user
    }

    res.render('pages',options)
}