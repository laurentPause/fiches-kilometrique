const { default: Axios } = require("axios");

const formAdd = document.getElementById('formAddRegle');

formAdd.addEventListener('submit', (event) => {
    event.preventDefault();
    add();
})

async function add() {
    try {
        const data = {
            puissance: formAdd.puissance.value,
            cinq: formAdd.cinq.value,
            cinq_vingt: formAdd.cinqVingt.value,
            vingt: formAdd.vingt.value,
            BaremeId: formAdd.dataset.bareme
        }
        const bareme = await Axios.post('/baremes/regles', data);
        window.location.pathname = '/baremes/' + data.BaremeId;

    } catch (error) {
        console.log(error);

    }
}