const Individus = require('../models/Individus');
const Deplacements = require('../models/Deplacements');
const Entites = require('../models/Entites');
const Entites_individus = require('../models/Entites_individus');
const Entites_vehicules = require('../models/Entites_vehicules');
const Trajets = require('../models/Trajets');
const Types = require('../models/Types');
const Vehicules = require('../models/Vehicules');

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
            },
            form: {
                fields: ['nom','prenom','fonction'],
                name: 'individus'
            }
        }
        res.render('individus',options )
    } catch (error) {
        console.log('Erreur render :', error);
    }
}

exports.entites = async (req, res) => {
    try {
        const entites = await Entites.findAll({ raw: true });
        const options = { 
            layout: 'layout/defaut',
            title: 'Entites',
            model: 'Entites',
            datatable: {
                columns: ['id','nom','type'],
                data: entites
            },
            form: {
                fields: ['nom','type'],
                name: 'entites'
            }
        }
        res.render('entites',options )
    } catch (error) {
        console.log('Erreur render :', error);
    }
}


exports.deplacements = async (req, res) => {
    try {
        const deplacements = await Deplacements.findAll({ raw: true });
        const options = { 
            layout: 'layout/defaut',
            title: 'Deplacements',
            model: 'Deplacements',
            datatable: {
                columns: ['id','libelle'],
                data: deplacements
            },
            form: {
                fields: ['libelle'],
                name: 'deplacements'
            }
        }
        res.render('deplacements',options )
    } catch (error) {
        console.log('Erreur render :', error);
    }
}

exports.fiches = async (req, res) => {
    try {
        const fiches = await Trajets.findAll({ raw: true });
        const options = { 
            layout: 'layout/defaut',
            title: 'Fiches',
            model: 'Fiches',
            datatable: {
                columns: ['id','jour','arrive','depart'],
                data: fiches
            },
            form: {
                fields: ['jour','lieu_depart','lieu_arrive','commentaire','arrive','depart','deplacement'],
                name: 'fiches'
            }
        }
        res.render('fiches',options )
    } catch (error) {
        console.log('Erreur render :', error);
    }
}

exports.types = async (req, res) => {
    try {
        const types = await Types.findAll({ raw: true });
        const options = { 
            layout: 'layout/defaut',
            title: 'Types',
            model: 'Types',
            datatable: {
                columns: ['id','libelle'],
                data: types
            },
            form: {
                fields: ['libelle'],
                name: 'types'
            }
        }
        res.render('types',options )
    } catch (error) {
        console.log('Erreur render :', error);
    }
}

exports.vehicules = async (req, res) => {
    try {
        const vehicules = await Vehicules.findAll({ raw: true });
        const options = { 
            layout: 'layout/defaut',
            title: 'Vehicules',
            model: 'Vehicules',
            datatable: {
                columns: ['id','modele','puissance','annee'],
                data: vehicules
            },
            form: {
                fields: ['marque','modele','puissance','annee'],
                name: 'vehicules'
            }
        }
        res.render('vehicules',options )
    } catch (error) {
        console.log('Erreur render :', error);
    }
}