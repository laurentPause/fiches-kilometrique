const path = require('path');


const vueOptions = {
    rootPath: path.join(__dirname, '../'),
    vueVersion: "2.3.4",
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
            { src: 'https://example.com/script.js' },
        ],
        styles: [
            { style: 'assets/templates/bootstrap4material/vendor/bootstrap/css/bootstrap.min.css' }
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

exports.config = (app, vue) => {

    const expressVueMiddleware = vue.init(vueOptions);
    app.use(expressVueMiddleware);
}