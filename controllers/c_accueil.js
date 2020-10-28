exports.dashboard = (req, res, next) => {
    const options ={
        layout: 'views/layout/dashboard'
    }

    res.render('views/pages',options)
}