import { authLogin } from './auth.js'



// Evento onde espera o carregamento da janela antes de iniciar qualquer coisa

const inputEmailRef = document.querySelector('#inputEmail');
const inputPasswordRef = document.querySelector('#inputPassword');
const btnSubmitRef = document.querySelector('#btnSubmit');


// array para erros dos inputs
var formErrors = {
  email: true,
  password: true
};


// funcao para validar os itens do formulario
//  true = possui erro
// false = nao possui erro
function checkFormValidity() {
  const formErrorsArray = Object.values(formErrors)
  const formValidity = formErrorsArray.every(item => item === false)

  btnSubmitRef.disabled = !formValidity;

}


// funcao para validacao dos criterios do e-mail
// e-mail valido conforme regex
function validateEmail() {
  const emailValid = inputEmailRef.checkValidity();
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailValid && regexEmail.test(inputEmailRef.value.trim())) {
    inputEmailRef.parentElement.classList.remove('error');
    formErrors.email = false;
  } else {
    inputEmailRef.parentElement.classList.add('error');
    formErrors.email = true;
  }

  checkFormValidity();
}


// funcao para validacao de senha
// criterio = letra maiuscula, minuscula, numeros e mín. 8 caracteres
function validatePassword() {
  const passwordValid = inputPasswordRef.checkValidity();
  const regexPassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/;
  if (passwordValid && regexPassword.test(inputPasswordRef.value.trim())) {
    inputPasswordRef.parentElement.classList.remove('error');
    formErrors.password = false;
  } else {
    inputPasswordRef.parentElement.classList.add('error');
    formErrors.password = true;
  }
  checkFormValidity();
}


// funcao para limpar campos do formulario apos envio
function resetForm() {
  inputEmailRef.value = ''
  inputPasswordRef.value = ''
}

// funcao do login, apos validar itens reseta formulario 
// chama funcao authLogin que autentica o usuario e envia para tela privada.
function checkLogin(e) {
  e.preventDefault();

  authLogin()
  resetForm()

}


// Evento que irao acionar as acoes da pagina
inputEmailRef.addEventListener('keyup', validateEmail);
inputPasswordRef.addEventListener('keyup', validatePassword);
btnSubmitRef.addEventListener('click', checkLogin);




