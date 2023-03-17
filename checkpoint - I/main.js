const userDescriptionRef = document.querySelector("#description");
const userTitleRef = document.querySelector("#title");
const userUrlImageRef = document.querySelector("#url");
const registerButtonRef = document.querySelector("#register-button");
const errorMessageTitulo = document.querySelector(".error-message-titulo");
const errorMessageText = document.querySelector(".error-message-textarea");
const errorMessageUrl = document.querySelector(".error-message-url");


registerButtonRef.style.opacity = '0.5'

var userCurso = {
  title: "",
  description: "",
  url: "",
}

var userForm = {
  title: true,
  description: true,
  url: true,
}

userTitleRef.addEventListener("change", validateForm)
userDescriptionRef.addEventListener("change", validateForm)
userUrlImageRef.addEventListener("change", validateForm)

function checkFormValidity() {
  const formErrorsArray = Object.values(userCurso);
  const formValidity = formErrorsArray.every((item) => item === false);
  registerButtonRef.disabled = !formValidity;
}



function validateForm () {
  userForm.title = ( userTitleRef.value.trim() !== "")
  userForm.description = ( userDescriptionRef.value.trim() !== "")
  userForm.url = ( userTitleRef.value.trim() !== "")

  var isValid = Object.values(userForm).every(function(value) {
    console.log("value",value)
    return value
  })

  registerButtonRef.disabled = !isValid

   if (isValid) {
     registerButtonRef.style.opacity = '1'
   } else {
     registerButtonRef.style.opacity = '0.5'
   }
}


function validarDescricao (event) {
  if (userDescriptionRef.value.length < 4) {
    errorMessageText.innerHTML = "A descrição deve ter no mínimo 4 caracteres";
    userCurso.description = userDescriptionRef.value
    return false
  }

  userCurso.description = userDescriptionRef.value.trim();
  errorMessageText.innerHTML = "";
  console.log(userCurso)
}

function validarTitulo (event) {
  if (userTitleRef.value.length < 4) {
    errorMessageTitulo.innerHTML = "O título deve ter no mínimo 4 caracteres";
    return false
  }

  userCurso.title = userTitleRef.value.trim();
  errorMessageTitulo.innerHTML = "";

}


function validateUrl () {
  if (userUrlImageRef.value === Number) {
    errorMessageUrl.innerHTML = "A descrição deve ter no mínimo 4 caracteres";
    return false

  }
  userCurso.url = userUrlImageRef.value.trim();
}



const rootContainer = document.querySelector("#root");
const exibirCurso = (event) => {
  event.preventDefault();

  console.log(userCurso);
  const { title, description, url } = userCurso;

  const card = document.createElement("div");
  card.className = "card";
  const h1 = document.createElement("h1");
  h1.innerText = title;
  const img = document.createElement("img");
  img.src = url;
  const text = document.createElement("p");
  text.innerText = description;
  card.appendChild(h1);
  card.appendChild(text);
  card.appendChild(img);
  rootContainer.appendChild(card);
};

registerButtonRef.addEventListener('click', exibirCurso)
    

userTitleRef.addEventListener("keyup", () => {
    if (userTitleRef.value.length === "" || userTitleRef.value.length === 0 || userTitleRef.value.length < 4) {
      userTitleRef.style.border = "3px solid red"
    } else if (userTitleRef.value.length > 4) {
      userTitleRef.style.border = "3px solid green"
    }
  })

  
userDescriptionRef.addEventListener("keyup", () => {
  if ( userDescriptionRef.value.length < 4) {
    userDescriptionRef.style.border = "3px solid red"
  } else if (userDescriptionRef.value.length > 4) {
    userDescriptionRef.style.border = "3px solid green"
  }
})
  
  userDescriptionRef.addEventListener("keyup", validarDescricao)
  userTitleRef.addEventListener("keyup", validarTitulo);
  userUrlImageRef.addEventListener("keyup", validateUrl);