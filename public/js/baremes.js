const { default: Axios } = require("axios");

const formAdd = document.getElementById('formAddBareme');

formAdd.addEventListener('submit', (event) => {
    event.preventDefault();
    add();
})

async function add() {
    try {
        const data = {
            dateBareme: formAdd.date.value
        }
        const bareme = await Axios.post('/baremes', data);
        window.location.pathname = '/baremes';

    } catch (error) {
        console.log(error);

    }
}