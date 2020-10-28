const { default: Axios } = require("axios");

const form = document.getElementById('formRegister');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    register();
})

async function register() {
    try {
        const data = {
            nom: form.nom.value,
            prenom: form.prenom.value,
            fonction: form.fonction.value,
            email: form.email.value,
            password: form.password.value,
        }

        const user = await Axios.post('/register',data);

    } catch (error) {
     console.log(error);   
    }
}