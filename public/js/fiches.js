const formAdd = document.getElementById('formAddFiche');


formAdd.addEventListener('submit', (event) => {
    event.preventDefault();
    add();
})

formAdd.entite.addEventListener('change', () => listeCar());

async function add() {
    try {
        const data = {
            nom: formAdd.nom.value,
            TypeId: formAdd.type.value
        }
        console.log(data);
       const entite = await Axios.post('/entites', data);
        console.log(entite);
        window.location.pathname = '/entites';

    } catch (error) {
        console.log(error);
        
    }
}

async function listeCar() {
    const entite = JSON.parse(formAdd.entite.value);
    const select = document.getElementById('vehicule-fiche');
    const optionNull = document.createElement('option');
    optionNull.value = 'null';
    optionNull.innerHTML = 'Sélectionner..';
    select.innerHTML = '';

    entite.Vehicules.forEach(vehicule => {
        const option = document.createElement('option');
        option.value = vehicule.id;
        const dateVeh = new Date(vehicule.annee);
        const libelle = `${vehicule.marque} ${vehicule.modele} ${dateVeh.getFullYear()}`;
        option.innerHTML = libelle;
        select.append(option);
    });
    console.log();
}