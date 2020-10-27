exports.dashboard = (req, res, next) => {
    const data = {}
    
    req.vueOptions= {
        head: {
            title: 'Dashboard',
        }        }
    res.renderVue(`views/main.vue`, data, req.vueOptions);
}