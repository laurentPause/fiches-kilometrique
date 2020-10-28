
const form = document.getElementById('formRegister');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    register();
})

function register() {
    try {
        const data = {
            nom: form.nom.value,
            prenom: form.prenom.value,
            fonction: form.nom.value,
            email: form.nom.value,
            password: form.nom.value,
        }
    } catch (error) {
        
    }
}