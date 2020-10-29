const { default: Axios } = require("axios");

const formAdd = document.getElementById('formAddFiche');

formAdd.addEventListener('submit', (event) => {
    event.preventDefault();
    add();
})

chartTotal();

formAdd.entite.addEventListener('change', () => listeCar());

async function add() {
    try {
        const data = {
            dateFiche: formAdd.date.value,
            depart: formAdd.depart.value,
            arriver: formAdd.arriver.value,
            compteur_depart: formAdd.relDepart.value,
            compteur_arriver: formAdd.relArriver.value,
            commentaire: formAdd.commentaire.value,
            IndividuId: formAdd.dataset.individu,
            VehiculeId: formAdd.vehicule.value,
            EntiteId: formAdd.dataset.entite,
            DeplacementId: formAdd.deplacement.value,
        }
        console.log(data);
        const fiche = await Axios.post('/fiches', data);
         window.location.pathname = '/fiches';

    } catch (error) {
        console.log(error);
        
    }
}

async function listeCar() {
    const entite = JSON.parse(formAdd.entite.value);
    const select = document.getElementById('vehicule-fiche');
    formAdd.dataset.entite = entite.id;
    select.innerHTML = '';
    const optionNull = document.createElement('option');
    optionNull.value = 'null';
    optionNull.innerHTML = 'Sélectionner..';
    select.append(optionNull);
    entite.Vehicules.forEach(vehicule => {
        const option = document.createElement('option');
        option.value = vehicule.id;
        const dateVeh = new Date(vehicule.annee);
        const libelle = `${vehicule.marque} ${vehicule.modele} ${dateVeh.getFullYear()}`;
        option.innerHTML = libelle;
        select.append(option);
    });
}

function chartTotal (){
    const canvas = document.getElementById('fichesTotal');
    const totalHtml = document.getElementById('totalKm');
    const fiches = JSON.parse(canvas.dataset.fiches);
    let total = 0;
    fiches.forEach(fiche => {
        const distance = fiche.compteur_arriver - fiche.compteur_depart;
        total += distance;
    });
    totalHtml.innerHTML = total;
    
}