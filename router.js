/* Appel de tous nos outils */
const express = require('express');
const expressApp = express();
const http = require('http').Server(expressApp);
const bodyParser = require('body-parser');
const morgan = require('morgan');
const expressVue = require("express-vue");


const path = require('path');

/* Ajout de express-ejs-layouts */
const ejsLayout = require('express-ejs-layouts');

/* Initialisation des variables */
const router = {
    isStarted: false
};
const vueOptions = {
    rootPath: path.join(__dirname , '../../views'),
    head: {
        title: 'Hello this is a global title',
        scripts: [
            { src: 'https://example.com/script.js' },
        ],
        styles: [
            { style: '/assets/rendered/style.css' }
        ]
    },
    data: {
        foo: true,
        bar: 'yes',
        qux: {
            id: 123,
            baz: 'anything you wish, you can have any kind of object in the data object, it will be global and on every route'
        }
    }
};

/** Controllers */
const pages = require('./controllers/c_renders');
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
    
    const expressVueMiddleware = expressVue.init();
    expressApp.use(expressVueMiddleware);

    expressApp.use(morgan('dev'));

    expressApp.use(bodyParser.urlencoded({
        extended: true
    }));
    expressApp.use(bodyParser.json());

    // /* Ajout de express-ejs-layouts */
    // expressApp.use(ejsLayout);

    // /* J'utilise ici EJS comme moteur de template */
    // expressApp.set('view engine', 'ejs');

    // /* assets sera le répertoire où se trouverons nos fichiers côté client */
    // expressApp.use(express.static(path.join(__dirname, 'assets')));

    // /* views est défini comme notre dossier de vues par défaut */
    // expressApp.set('views', path.join(__dirname, '/views/'));

    // expressApp.set("layout extractScripts", true)
   

    if (typeof callback != 'undefined') {
        callback();
    }
}

/* ROUTES */

function loadRoutes(callback) {
    expressApp.get('/', (req, res, next) => {
        const data= {
            otherData: 'Something Else' 
        };
        req.vueOptions= {
            head: {
                title: 'Page Title',
                metas: [
                    { property:'og:title', content: 'Page Title'},
                    { name:'twitter:title', content: 'Page Title'},
                ]
            }    
        }
        res.renderVue('../../views/main.vue', data, req.vueOptions);
    })
   
   
    if (typeof callback != 'undefined') {
        callback();
    }
}

module.exports = {
    start: start
};