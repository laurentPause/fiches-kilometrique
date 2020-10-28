const Individus = require("../models/Individus");
const Roles = require("../models/Roles");

const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.register = async (req, res, next) => {
    const options = {
        layout: 'layout/users'
    };

    res.render('pages/register', options);
}

exports.login = async (req, res, next) => {
    const options = {
        layout: 'layout/users'
    };

    res.render('pages/login', options);
}

exports.add = async (req, res) => {
    try {
        await Individus.sync();
        await Roles.sync();

        const roleUser = await Roles.findOrCreate({
            raw: true,
            where: {
                libelle: 'User'
            },
            defaults: {
                libelle: 'User'
            }
        })

        const data = {
            nom,
            prenom,
            email,
            password,
            fonction
        } = req.body;

        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(data.password, salt);
        data.password = hash;
        data.RoleId = roleUser[0].id;
        const user = await Individus.create(data);
        console.log(data, roleUser);
        res.status(200).json({
            message: 'OK',
            results: user
        });
    } catch (error) {
        res.status(400).json({
            message: 'KO',
            results: error
        });
    }
}
