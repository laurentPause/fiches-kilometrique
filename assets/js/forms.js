const axios = require('axios').default;

async function add (formName, fieldsString, model) {
    try {
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