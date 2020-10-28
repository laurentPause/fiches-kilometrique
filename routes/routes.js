
// Controllers
const users = require('../controllers/c_users')
const accueils = require('../controllers/c_accueil')
const entites = require('../controllers/c_entites')
const vehicules = require('../controllers/c_vehicules')

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

    // Véhicules
    app.get('/vehicules', connexion.verify, vehicules.view);
    app.get('/vehicules/:id', connexion.verify, vehicules.board);
    app.post('/vehicules', connexion.verify, vehicules.add);


    // api users
    app.post('/register', users.add);
    app.post('/login', users.connexion);

}