
// Controllers
const users = require('../controllers/c_users')
const accueils = require('../controllers/c_accueil')

// Middlewares
const connexion = require('../middleware/auth')

exports.routes = (app) => {
    // render page
    app.get('/', connexion.verify, accueils.dashboard);
    app.get('/register', users.register);
    app.get('/login', users.login);

    // api
    app.post('/users', users.add)
}