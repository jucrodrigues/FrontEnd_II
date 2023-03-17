const inputEmailRef = document.querySelector("#userEmail")
const inputPasswordRef = document.querySelector("#userPassword")
const loginButtonRef = document.querySelector("#loginBnt")
var formErrors = {
  userEmail: true,
  userPassword: true,

}

function checkFormValidity() {

  const formErrosArray = Object.values(formErrors)
  const formValidity = formErrosArray.every(item => item === false)
  console.log(formValidity)
  loginButtonRef.disabled = !formValidity


}


function validateInput(inputRef) {

  const inputValid = inputRef.checkValidity()
  const div = inputRef.parentElement

  if (inputValid) {
    div.classList.remove('error')

  } else {
    div.classList.add('error')

  }
  formErrors[inputRef.id] = !inputValid

  console.log(formErrors)

}

function login(event) {
  event.preventDeFoult()
}

inputEmailRef.addEventListener("keyup", () => validateInput(inputEmailRef))
inputPasswordRef.addEventListener("keyup", () => validateInput(inputPasswordRef))
loginButtonRef.addEventListener('click', (event) => loginButtonRef(event))

/*
Validações simples mais manual, não necessára pois existem validações
direto no html



function validateEmail(){
  console.log(inputEmailRef.value)
 
  if(inputEmailRef.value !== ''){
   console.log ('Passou na validação')
  } else {
   console.log ('reprovou na validação')
  }
 }
 */