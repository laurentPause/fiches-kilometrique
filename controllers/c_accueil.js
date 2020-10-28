exports.dashboard = (req, res, next) => {
    const options ={
        layout: 'layout/dashboard',
        title: 'Tableau de bord'
    }

    res.render('pages',options)
}