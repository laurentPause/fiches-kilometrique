async function submit(formName, fieldsString) {
    const form = document[formName];
    const fields = fieldsString.split(',');
    fields.forEach((element) => {
        console.log(form[element]['value']); 
    });
    console.log(fields);
}