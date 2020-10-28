const { default: Axios } = require("axios");

const formAdd = document.getElementById('formAddVehicule');

formAdd.addEventListener('submit', (event) => {
    event.preventDefault();
    add();
})

async function add() {
    try {
        const data = {
            marque: formAdd.marque.value,
            modele: formAdd.modele.value,
            puissance: formAdd.puissance.value,
            annee: formAdd.annee.value,
            immatriculation: formAdd.immatriculation.value,
        }
        const vehicule = await Axios.post('/vehicules', data);
        window.location.pathname = '/vehicules';

    } catch (error) {
        console.log(error);

    }
}