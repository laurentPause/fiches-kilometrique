var app = {};
const {
    Sequelize
} = require('sequelize');

// Database
// async function databaseInit() {
//     const sequelize = new Sequelize({
//         dialect: 'sqlite',
//         storage: './database.db'
//     });
//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//     } catch (error) {
//         console.error('Unable to connect to the database:', error);
//     }
// }

function start(callback) {
    init(function () {
        // databaseInit();
        /* On démarre le routeur défini juste avant */
        app.router.start(function () {
            if (typeof callback != 'undefined') {
                callback();
            }
        });
    });
}

function init(callback) {
    /* On instancie notre module router */
    app.router = require('./router');

    if (typeof callback != 'undefined') {
        callback();
    }
}

module.exports = {
    start: start
};