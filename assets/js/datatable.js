async function modalShow(model, type, title) {
    try {
        $('#modalData').modal('show');
        const modalTitle = document.getElementById('modalLabel');
        switch (type) {
            case 'add':
                modalTitle.innerHTML = 'Ajouter un(e) ' + title
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
        

    } catch (error) {
        console.log('Erreur', error);
    }
}