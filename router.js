/* Appel de tous nos outils */
const express = require('express');
const expressApp = express();
const http = require('http').Server(expressApp);
const bodyParser = require('body-parser');
const morgan = require('morgan');
const expressVue = require("express-vue");
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');

// Routes
const routes = require('./routes/routes');


/* Ajout de express-ejs-layouts */
const ejsLayout = require('express-ejs-layouts');

/* Initialisation des variables */
const router = {
    isStarted: false
};




/** Serveur */
function start(callback) {
    if (router.isStarted === false) {
        init(function () {
            loadRoutes(function () {
                /* Lance le serveur web sur le port 3000 */
                http.listen(4000, function () {
                    console.log('Application is running on port 4000');
                    router.isStarted = true;
                    if (typeof callback != 'undefined') {
                        callback();
                    }
                });
            });
        });
    } else {
        console.log("Application already started");
        if (typeof callback != 'undefined') {
            callback();
        }
    }
}

function init(callback) {
    /* On s'assure que le serveur n'est vraiment pas démarré */
    router.isStarted = false;
    
    expressApp.use(morgan('dev'));

    expressApp.use(bodyParser.urlencoded({
        extended: true
    }));
    expressApp.use(bodyParser.json());

    // session

    expressApp.use(session({
        key: 'user_sid',
        secret: 'somerandonstuffs',
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 60000000
        }
    }));

    /* Ajout de express-ejs-layouts */
    expressApp.use(ejsLayout);

    /* J'utilise ici EJS comme moteur de template */
    expressApp.set('view engine', 'ejs');

    // /* assets sera le répertoire où se trouverons nos fichiers côté client */
    expressApp.use(express.static(path.join(__dirname, 'public')));

    /* views est défini comme notre dossier de vues par défaut */
    expressApp.set('views', path.join(__dirname, '/views/'));

    expressApp.set("layout extractScripts", true)
   

    if (typeof callback != 'undefined') {
        callback();
    }
}

/* ROUTES */

function loadRoutes(callback) {
    routes.routes(expressApp);
   
    if (typeof callback != 'undefined') {
        callback();
    }
}

module.exports = {
    start: start
};