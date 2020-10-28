const { default: Axios } = require("axios");

const form = document.getElementById('formLogin');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    login();
})

async function login() {
    try {
        const data = {
            email: form.email.value,
            password: form.password.value
        }

        const user = await Axios.post('/login',data);
        window.location.pathname = '/';

    } catch (error) {
        console.log(error);   
    }
}