const { default: Axios } = require("axios");

const formAdd = document.getElementById('formAddEntite');


formAdd.addEventListener('submit', (event) => {
    event.preventDefault();
    add();
})


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

