
const inputEmailRef = document.querySelector('#inputEmail');
const inputPasswordRef = document.querySelector('#inputPassword');
const btnSubmitRef = document.querySelector('#btnSubmit');

var formErrors = {
  email: true,
  password: true
};

function checkFormValidity() {

  const formErrorsArray = Object.values(formErrors)
  const formValidity = formErrorsArray.every(item => item === false)

  btnSubmitRef.disabled = !formValidity

}

function validateEmail() {
  const emailValid = inputEmailRef.checkValidity();
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailValid && regex.test(inputEmailRef.value)) {
    inputEmailRef.parentElement.classList.remove('error');
    formErrors.email = false;
  } else {
    inputEmailRef.parentElement.classList.add('error');
    formErrors.email = true;
  }
  checkFormValidity();
}

function validatePassword() {
  const passwordValid = inputPasswordRef.checkValidity();
  const regex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/;
  if (passwordValid && regex.test(inputPasswordRef.value)) {
    inputPasswordRef.parentElement.classList.remove('error');
    formErrors.password = false;
  } else {
    inputPasswordRef.parentElement.classList.add('error');
    formErrors.password = true;
  }

  checkFormValidity();
}
function resetForm() {
  inputEmailRef.value = ''
  inputPasswordRef.value = ''
}


function checkLogin(e) {
  e.preventDefault();

  const userData = {
    email: inputEmailRef.value,
    password: inputPasswordRef.value
  }
  console.log(userData)
  resetForm()
}

inputEmailRef.addEventListener('keyup', validateEmail);
inputPasswordRef.addEventListener('keyup', validatePassword);
btnSubmitRef.addEventListener('click', checkLogin);

