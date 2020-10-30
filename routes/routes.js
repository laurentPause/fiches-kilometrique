
// Controllers
const users = require('../controllers/c_users')
const accueils = require('../controllers/c_accueil')
const entites = require('../controllers/c_entites')
const vehicules = require('../controllers/c_vehicules')
const fiches = require('../controllers/c_fiches')
const baremes = require('../controllers/c_baremes')

// Middlewares
const connexion = require('../middleware/auth')

exports.routes = (app) => {
    // accueil
    app.get('/', connexion.verify, accueils.dashboard);

    // users
    app.get('/register', connexion.logged, users.register);
    app.get('/login', connexion.logged, users.login);
    app.get('/signout', connexion.verify, users.disconnect);

    // Entités
    app.get('/types', connexion.verify, entites.types);
    app.get('/entites', connexion.verify, entites.view);
    app.get('/entites/:id', connexion.verify, entites.board);
    app.post('/entites', connexion.verify, entites.add);
    app.post('/entites/individus', connexion.verify, entites.addIndividus);
    app.post('/entites/vehicules', connexion.verify, entites.addVehicules);

    // Véhicules
    app.get('/vehicules', connexion.verify, vehicules.view);
    app.get('/vehicules/:id', connexion.verify, vehicules.board);
    app.post('/vehicules', connexion.verify, vehicules.add);
    app.post('/vehicules/entites', connexion.verify, vehicules.addEntites);

    // Fiches
    app.get('/deplacement', connexion.verify, fiches.deplacements);
    app.get('/fiches', connexion.verify, fiches.view);
    app.post('/fiches', connexion.verify, fiches.add);

    // Barémes 
    app.get('/baremes', connexion.verify, baremes.view);
    app.post('/baremes', connexion.verify, baremes.add);
    app.get('/baremes/:id', connexion.verify, baremes.board);
    app.post('/baremes/regles', connexion.verify, baremes.addRegle);




    // api users
    app.post('/register', users.add);
    app.post('/login', users.connexion);

}