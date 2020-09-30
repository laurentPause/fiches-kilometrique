/* Appel de tous nos outils */
const express = require('express');
const expressApp = express();
const http = require('http').Server(expressApp);
const bodyParser = require('body-parser');


const path = require('path');

/* Ajout de express-ejs-layouts */
const ejsLayout = require('express-ejs-layouts');

/* Initialisation des variables */
const router = {
    isStarted: false
};

/** Controllers */
const pages = require('./controllers/c_renders');
const individus = require('./controllers/c_individus');
const api = require('./controllers/c_api');

/** Serveur */
function start(callback) {
    if (router.isStarted === false) {
        init(function () {
            loadRoutes(function () {
                /* Lance le serveur web sur le port 3000 */
                http.listen(4000, function () {
                    console.log('Application is running on port 3000');
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

    expressApp.use(bodyParser.urlencoded({
        extended: true
    }));
    expressApp.use(bodyParser.json());

    /* Ajout de express-ejs-layouts */
    expressApp.use(ejsLayout);

    /* J'utilise ici EJS comme moteur de template */
    expressApp.set('view engine', 'ejs');

    /* assets sera le répertoire où se trouverons nos fichiers côté client */
    expressApp.use(express.static(path.join(__dirname, 'assets')));

    /* views est défini comme notre dossier de vues par défaut */
    expressApp.set('views', path.join(__dirname, '/views/'));

    expressApp.set("layout extractScripts", true)

    if (typeof callback != 'undefined') {
        callback();
    }
}

/* ROUTES */

function loadRoutes(callback) {
    expressApp.get('/', function (req, res) {
        res.render('accueil/index', {
            layout: 'layout/defaut'
        });
    });

    // render pages
    expressApp.get('/individus', pages.individus);
    expressApp.get('/entites', pages.entites);
    expressApp.get('/deplacements', pages.deplacements);
    expressApp.get('/fiches', pages.fiches);
    expressApp.get('/types', pages.types);
    expressApp.get('/vehicules', pages.vehicules);

    // api
    expressApp.post('/api/add', api.add);
    if (typeof callback != 'undefined') {
        callback();
    }
}

module.exports = {
    start: start
};