const axios = require('axios').default;

async function add (event) {
    event.preventDefault();    
    try {
        const {
            nom,
            prenom,
            fonction
        } = document.individus;

        const options = {
            model : 'Individus',
            data : {
                nom : nom.value,
                prenom : prenom.value,
                fonction : fonction.value
            }
        }
        console.log('add individu:', options);
        const individu = await axios.post('/api/add',options)
    } catch (error) {
        console.log('error add individu', error);
    } 
}

async function all (){
    try {
        const options = {
            model : 'Individus'
        }
        const individus = await axios.get('/api/all/'+ options.model);
        console.log(individus)
    } catch (error) {
        console.log('error add individu', error);
    } 
}

