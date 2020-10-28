exports.dashboard = (req, res, next) => {
    const options ={
        layout: 'layout/dashboard'
    }

    res.render('pages',options)
}