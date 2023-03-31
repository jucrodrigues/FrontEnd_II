import {authRegister} from './auth.js'

const userNameRef = document.querySelector('#userName')
const userSurnameRef = document.querySelector('#userSurname')
const userEmailRef = document.querySelector('#userEmail')
const userPasswordRef = document.querySelector('#userPassword')
const confirmPasswordRef = document.querySelector('#confirmPassword')
const bntRegisterRef = document.querySelector('#bntRegister')

var formErrors = {
  userName: true,
  userSurname: true,
  userEmail: true,
  userPassword: true,
  confirmPassword: true
};


function checkFormValidity() {

  const formErrorsArray = Object.values(formErrors)
  const formValidity = formErrorsArray.every(item => item === false)

  bntRegisterRef.disabled = !formValidity;

}


function validateInput(inputRef) {

  const inputValid = inputRef.checkValidity()
  const elementFatherRef = inputRef.parentElement

  if (inputValid) {
    elementFatherRef.classList.remove('error')

  } else {
    elementFatherRef.classList.add('error')

  }

  formErrors[inputRef.id] = !inputValid

  checkFormValidity()
}


function validateEmail() {
  const emailValid = userEmailRef.checkValidity();
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailValid && regex.test(userEmailRef.value)) {
    userEmailRef.parentElement.classList.remove('error');
    formErrors.userEmail = false;
  } else {
    userEmailRef.parentElement.classList.add('error');
    formErrors.userEmail = true;
  }
  checkFormValidity();
}

function validatePassword() {
  const passwordValid = userPasswordRef.checkValidity();
  const regex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/;
  if (passwordValid && regex.test(userPasswordRef.value)) {
    userPasswordRef.parentElement.classList.remove('error');
    formErrors.userPassword = false;
  } else {
    userPasswordRef.parentElement.classList.add('error');
    formErrors.userPassword = true;
  }
  checkFormValidity();
}

function validateConfirmPassword(senha, confirm) {
  senha = userPasswordRef.value
  confirm = confirmPasswordRef.value

  if (senha === confirm) {
    confirmPasswordRef.parentElement.classList.remove('error');
    formErrors.confirmPassword = false;
  } else {
    confirmPasswordRef.parentElement.classList.add('error');
    formErrors.confirmPassword = true;
  }
  checkFormValidity()
}



function resetForm() {
  userNameRef.value = ''
  userSurnameRef.value = ''
  userEmailRef.value = ''
  userPasswordRef.value = ''
  confirmPasswordRef.value = ''
}

function checkRegister(e) {
  e.preventDefault();

  const userInfo = {
    firtName: userNameRef.value,
    LastName: userSurnameRef.value,
    email: userEmailRef.value,
    password: userPasswordRef.value,
   
  }
 authRegister()
 resetForm()
}


userNameRef.addEventListener('keyup', () => validateInput(userNameRef))
userSurnameRef.addEventListener('keyup', () => validateInput(userSurnameRef))
userEmailRef.addEventListener('keyup', validateEmail)
userPasswordRef.addEventListener('keyup', validatePassword)
confirmPasswordRef.addEventListener('keyup', () => validateConfirmPassword(confirmPasswordRef))
bntRegisterRef.addEventListener('click', checkRegister)