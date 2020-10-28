
// Controllers
const users = require('../controllers/c_users')
const accueils = require('../controllers/c_accueil')
const entites = require('../controllers/c_entites')

// Middlewares
const connexion = require('../middleware/auth')

exports.routes = (app) => {
    // accueil
    app.get('/', connexion.verify, accueils.dashboard);

    // users
    app.get('/register',connexion.logged, users.register);
    app.get('/login',connexion.logged ,users.login);
    app.get('/signout',connexion.verify ,users.disconnect);

    // Entités
    app.get('/types', connexion.verify, entites.types);

    // api users
    app.post('/register', users.add);
    app.post('/login', users.connexion);
}