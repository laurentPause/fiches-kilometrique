const path = require('path');


const vueOptions = {
    rootPath: path.join(__dirname, '../'),
    template: {
        html: {
            start: '<!DOCTYPE html><html>',
            end: '</html>'
        },
        body: {
            start: '<body class="test">',
            end: '</body>'
        },
        template: {
            start: '<div id="app">',
            end: '</div>'
        }
    },
    head: {
        title: 'Fiches kilométrique',
        scripts: [
            // { src: '/templates/bootstrap4material/vendor/jquery/jquery.min.js' },
            // { src: '/templates/bootstrap4material/vendor/popper.js/umd/popper.min.js' },
            // { src: '/templates/bootstrap4material/vendor/bootstrap/js/bootstrap.min.js' },
            // { src: '/templates/bootstrap4material/vendor/jquery.cookie/jquery.cookie.js' },
            // { src: '/templates/bootstrap4material/js/front.js' },
        ],
        styles: [
            { style: '/templates/bootstrap4material/vendor/bootstrap/css/bootstrap.min.css' },
            { style: '/templates/bootstrap4material/vendor/font-awesome/css/font-awesome.min.css' },
            { style: '/templates/bootstrap4material/css/fontastic.css' },
            { style: 'https://fonts.googleapis.com/css?family=Poppins:300,400,700' },
            { style: '/templates/bootstrap4material/css/style.default.css' },
            { style: '/templates/bootstrap4material/img/favicon.ico', type:'icon'}
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
}

exports.config = async (app, vue) => {

    const expressVueMiddleware =  vue.init(vueOptions);
    app.use(expressVueMiddleware);
}