all();

async function modalShow(element, type, title, formName) {
    try {
        $('#modalData'+ type).modal('show');
        const modalTitle = document.getElementById('modalLabel' + type);
        const form = document.getElementById('formModal'+type+'-'+ formName);
        modalTitle.innerHTML = 'Ajouter un(e) ' + title;
        switch (type) {
            case 'Add':
                modalTitle.innerHTML = 'Ajouter un(e) ' + title;
                break;
            case 'View':
                console.log(form);
                form.innerHTML = render(element,formName)
                modalTitle.innerHTML = 'Détails d\'un(e) ' + title
                break;
            case 'Edit':
                modalTitle.innerHTML = 'Modifier un(e) ' + title
                break;
            case 'Delete':
                modalTitle.innerHTML = 'Supprimer un(e) ' + title
                break;
        
            default:
                modalTitle.innerHTML = 'Détails un(e) ' + title
                break;
        }
        
    } catch (error) {
        console.log('Erreur', error);
    }
}

function render(element,formName) {
    const obj = JSON.parse(element );
    console.log('Object :', obj);
    let div = '';
    for (const property in obj) { 
        div     += '<div class="form-group">';
        div     += `  <input id="${formName}-${property} " type="text" name=" ${property} " value="${obj[property]} "`;
        div     += `      class="input-material" placeholder="${property}" readonly>`;
        div     += `  <label for="${formName}-${property}" class="label-material">${property}</label>`;
        div     += '</div>';
    }
    console.log('div', div)
    return div;
}


async function all (){
    try {
        const options = {
            model : 'Individus'
        }
        const individus = await axios.get('/api/all/'+ options.model);
        console.log(individus.data)
    } catch (error) {
        console.log('error add individu', error);
    } 
}