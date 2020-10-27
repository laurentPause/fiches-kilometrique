const Individus = require("../models/Individus");

exports.register = async (req, res, next) => {
    const options = {
        layout: 'views/layout/users'
    };
    
    res.render();
}

exports.login = async (req, res, next) => {
    const data = {};
    req.vueOptions= {
        head: {
            title: 'Se connecter',
        }        }
    res.renderVue(`views/users/login.vue`, data);
}
