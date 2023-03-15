const email = document.getElementById('email');
const senha = document.getElementById('senha');
const form = document.getElementById('form');
const messageError = document.getElementById('error');

form.addEventListener('submit', (event) => {
    let message = [];
    let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{10,16}$/;

    if(email.value === '' || email.value === null){
        messages.push('O campo e-mail é obrigatório');
    }
    if(senha.value.length <= 8){
        messages.push('A senha tem que ter mais de 8 caracteres');
    }
    if(!regex.test(senha.value)){
        messeges.push('Precisa ter uma letra e maiúcula e minúscula, caractere especial e número');
    }
});