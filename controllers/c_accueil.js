const Individus = require("../models/Individus");
const Roles = require("../models/Roles");

exports.dashboard = async (req, res, next) => {
    
    const user = req.session.user;
    let view = 'pages'
    if(user.Role == 'Admin'){
        view += '/admins';
    }
    console.log(user);
    const options ={
        layout: 'layout/dashboard',
        title: 'Tableau de bord',
        user: user
    }

    res.render(view,options)
}