const axios = require('axios').default;




async function add (event) {
    event.preventDefault();    
    try {
        const {
            nom,
            prenom,
            fonction
        } = document.individus

        const data = {
            nom : nom.value,
            prenom : prenom.value,
            fonction : fonction.value
        }
        console.log('add individu:', data);
    } catch (error) {
        console.log('error add individu', error);
    }
    
}
