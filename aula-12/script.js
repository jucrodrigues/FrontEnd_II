const nameRef= document.querySelector('#name')
const actionButtonRef = document.querySelector('#actionButton')


// os dados armazenados não podem ser sensíveis
// os dados de senha, cartãod e crédito, etc...
// estes dados ficarão salvos no localstorage
// são salvos na máquina do usuário

function nextPage(){
  //const name = nameRef.value

  const user = {
    name: nameRef.value,
    age: 22,
    phone: '121212121',
    picture: "https://kajdsda"
  }


  // transformar um dado em JSON, de array ou objeto em uma string
  

  const userJson = JSON.stringify(user) //posso passar só a variável ou direto o objeto ou array

  //localStorage.setItem('userName', name)

  localStorage.setItem('use', userJson)

  //sessionStorage.setItem = é salvo temporário
  
}

actionButtonRef.addEventListener ('click', nextPage)