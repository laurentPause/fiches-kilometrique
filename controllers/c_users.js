const Individus = require("../models/Individus");
const Roles = require("../models/Roles");
const dotenv = require('dotenv').config();
const{
    ADMIN_EMAIL,
    ADMIN_PASS
} = process.env

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
exports.disconnect = async (req, res, next) => {
    req.session.destroy();
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

exports.connexion = async (req, res) => {
    try {
        await Individus.sync();
        await Roles.sync();

        const data = {
            email,
            password
        } = req.body;
        if (data.email == ADMIN_EMAIL) {
            const roleAdmin = await Roles.findOrCreate({
                raw: true,
                where: {
                    libelle: 'Admin'
                },
                defaults: {
                    libelle: 'Admin'
                }
            })
            const salt = bcrypt.genSaltSync(saltRounds);
            const hash = bcrypt.hashSync(ADMIN_PASS, salt);
            const admin = await Individus.findOrCreate({
                raw: true,
                where: {
                    email: data.email
                },
                defaults: {
                    nom: 'Admin',
                    prenom: 'Admin',
                    email: ADMIN_EMAIL,
                    password: hash,
                    RoleId: roleAdmin[0].id
                }
            })
            const veriPass = bcrypt.compareSync(data.password, admin[0].password);
            if(veriPass){    
                req.session.user = admin[0];
                req.session.user.Role = 'Admin';
                res.status(200).json({
                    message: 'admin',
                });
            }else{
                res.status(400).json({
                    message: 'KO'
                });
            }
        }else{
            const user = await Individus.findOne({
                where: {
                    email: data.email
                }
            })
    
            if (user) {
                const veriPass = bcrypt.compareSync(data.password, user.password);
                if (veriPass) {
                    req.session.user = user;
                    req.session.user.Role = 'User';
                    res.status(200).json({
                        message: 'OK',
                        results: user
                    });
                } else {
                    res.status(400).json({
                        message: 'KO',
                        results: user
                    });
                }
            } else {
                res.status(400).json({
                    message: 'Non existant',
                    results: user
                });
            }
        }
        


    } catch (error) {
        res.status(400).json({
            message: 'KO',
            results: error
        });
    }
}