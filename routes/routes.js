const rootPath = '../../views/';

exports.routes = (app) => {
    app.get('/', (req, res, next) => {
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
            },
            layout: 'layout/dashboard/header.vue'   
        }
        res.renderVue(`views/main.vue`, data, req.vueOptions);
    })
}