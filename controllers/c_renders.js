const Individus = require('../models/Individus');

exports.individus = async (req, res) => {
    try {
        const individus = await Individus.findAll({ raw: true });
        const options = { 
            layout: 'layout/defaut',
            title: 'Individus',
            model: 'Individus',
            datatable: {
                columns: ['id','nom','prenom','fonction'],
                data: individus
            }
        }
        res.render('individus',options )
    } catch (error) {
        console.log('Erreur render :', error);
    }
}

exports.entites = async (req, res) => {
    try {
        const options = { 
            layout: 'layout/defaut',
            title: 'Entites'
        }
        res.render('entites',options )
    } catch (error) {
        console.log('Erreur render :', error);
    }
}


exports.deplacements = async (req, res) => {
    try {
        const options = { 
            layout: 'layout/defaut',
            title: 'Deplacements'
        }
        res.render('deplacements',options )
    } catch (error) {
        console.log('Erreur render :', error);
    }
}

exports.fiches = async (req, res) => {
    try {
        const options = { 
            layout: 'layout/defaut',
            title: 'Fiches'
        }
        res.render('fiches',options )
    } catch (error) {
        console.log('Erreur render :', error);
    }
}

exports.types = async (req, res) => {
    try {
        const options = { 
            layout: 'layout/defaut',
            title: 'Types'
        }
        res.render('types',options )
    } catch (error) {
        console.log('Erreur render :', error);
    }
}

exports.vehicules = async (req, res) => {
    try {
        const options = { 
            layout: 'layout/defaut',
            title: 'Vehicules'
        }
        res.render('vehicules',options )
    } catch (error) {
        console.log('Erreur render :', error);
    }
}