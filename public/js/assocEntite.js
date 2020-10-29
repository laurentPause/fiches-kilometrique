const { default: Axios } = require("axios");

const formAssocInd = document.getElementById('formAssocInd');
const formAssocVeh = document.getElementById('formAssocVeh');
formAssocInd.addEventListener('submit', (event) => {
    event.preventDefault();
    assocInd();
})
formAssocVeh.addEventListener('submit', (event) => {
    event.preventDefault();
    assocVeh();
})

async function assocInd() { 
    try {
        const data = {
            total_km: 0,
            EntiteId: formAssocInd.dataset.entite,
            IndividuId: formAssocInd.individu.value
        }
        const entite = await Axios.post('/entites/individus',data);
        window.location.pathname = '/entites/' + data.EntiteId;
    } catch (error) {
        console.log(error);
    }
}

async function assocVeh() {
    try {
        const data = {
            total_km: 0,
            EntiteId: formAssocVeh.dataset.entite,
            VehiculeId: formAssocVeh.vehicule.value

        }
        const entite = await Axios.post('/entites/vehicules',data);
        window.location.pathname = '/entites/' + data.EntiteId;
    } catch (error) {
        console.log(error);
    }
}