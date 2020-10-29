const formAssocEnt = document.getElementById('formAssocEnt');
formAssocEnt.addEventListener('submit', (event) => {
    event.preventDefault();
    assocEnt();
})

async function assocEnt() { 
    try {
        const data = {
            total_km: 0,
            EntiteId: formAssocEnt.entite.value,
            VehiculeId: formAssocEnt.dataset.vehicule

        }
        const vehicule = await Axios.post('/vehicules/entites',data);
        window.location.pathname = '/vehicules/' + data.VehiculeId;
    } catch (error) {
        console.log(error);
    }
}