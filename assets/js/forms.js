const axios = require('axios').default;

async function add (formName, fieldsString, model) {
    // event.preventDefault();    
    try {
        // const {
        //     nom,
        //     prenom,
        //     fonction
        // } = document.individus;

        // const options = {
        //     model : 'Individus',
        //     data : {
        //         nom : nom.value,
        //         prenom : prenom.value,
        //         fonction : fonction.value
        //     }
        // }
        // console.log('add individu:', options);
        // const individu = await axios.post('/api/add',options)
        const form = document[formName];
        const fields = fieldsString.split(',');
        const options = {
            model : model,
            data : {}
        }
        fields.forEach((element) => {
            options.data[element] = form[element]['value']
        });
        const individu = await axios.post('/api/add',options)
    } catch (error) {
        console.log('error add individu', error);
    } 
}

async function submit(formName, fieldsString) {
    const form = document[formName];
    const fields = fieldsString.split(',');
    fields.forEach((element) => {
        console.log(form[element]['value']); 
    });
    console.log(fields);
}