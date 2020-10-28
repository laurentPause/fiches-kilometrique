const Individus = require("../models/Individus");

exports.register = async (req, res, next) => {
    const options = {
        layout: 'layout/users'
    };
    
    res.render('pages/register',options);
}

exports.login = async (req, res, next) => {
    const options = {
        layout: 'layout/users'
    };
    
    res.render('pages/login',options);
}
