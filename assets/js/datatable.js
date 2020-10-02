
async function modalShow(model, type, title) {
    try {
        $('#modalData'+ type).modal('show');
        const modalTitle = document.getElementById('modalLabel' + type);
         modalTitle.innerHTML = 'Ajouter un(e) ' + title;
        switch (type) {
            case 'Add':
                modalTitle.innerHTML = 'Ajouter un(e) ' + title;
                break;
            case 'View':
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