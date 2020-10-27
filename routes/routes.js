
// Controllers
const users = require('../controllers/c_users')
const accueils = require('../controllers/c_accueil')

// Middlewares
const connexion = require('../middleware/auth')

exports.routes = (app) => {
    app.get('/', connexion.verify, accueils.dashboard);
    app.get('/register', users.register);
    app.get('/login', users.login);
}