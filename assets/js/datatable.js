const ejs = require('ejs');

async function modalShow(model, type, title, body) {
    try {
        $('#modalData').modal('show');
        const modalTitle = document.getElementById('modalLabel');
        switch (type) {
            case 'add':
                modalTitle.innerHTML = 'Ajouter un(e) ' + title;
                break;
            case 'view':
                modalTitle.innerHTML = 'Détails d\'un(e) ' + title
                break;
            case 'edit':
                modalTitle.innerHTML = 'Modifier un(e) ' + title
                break;
            case 'delete':
                modalTitle.innerHTML = 'Supprimer un(e) ' + title
                break;
        
            default:
                modalTitle.innerHTML = 'Détails un(e) ' + title
                break;
        }
        const test = document.getElementById('pika');
        const piks = 'Pikachu';
        const html  = ejs.render('<% pika %>',{pika: piks} );
        test.innerHTML = html
        

    } catch (error) {
        console.log('Erreur', error);
    }
}