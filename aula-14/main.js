const cepInputRef = document.querySelector('#cep')
const cityInputRef = document.querySelector('#city')
const neighborhoodInputRef = document.querySelector('#neighborhood')


function fillFormWithAddress(address) {
  cityInputRef.value = address.localidade
  neighborhoodInputRef.value = address.bairro
}

/// exemplo de get

function searchAddress() {
  //para evitar que seja enviada várias requisições enquanto o usuário digita
  const cep = cepInputRef.value
  if (cepInputRef.value.length > 7) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(
        response => {
          //console.log(response) - só verificars e está retornando
          response.json() //extrair os dados (resposta) da requisição -tranformando em um objeto literal
            .then(
              data => { // armazena os dados retirados pelo json
                if (data.erro === undefined) {
                  fillFormWithAddress(data)
                } else {
                  console.log('cep errado')
                }
              }
            )
        }
      )

  }
}


/*function searchAddress() {

  const cep = cepInputRef.value
  if (cepInputRef.value.length > 7) { //para evitar que seja enviada várias requisições enquanto o usuário digita
    fetch(`viacep.com.br/ws/${cep}/json/`)
      .then(
        response => { return response.jason()}
        
            .then(
              data => { // armazena os dados retirados pelo json
                console.log(data) //verificar os dados
              }
            )
        }
      )

  }
}
*/



//cepInputRef.addEventListener('keyup', searchAddress)
cepInputRef.addEventListener('keyup', () => searchAddress())



// Requisições para uma API

var userData = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
}

const requestHeaders = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}


var requestConfig = {
  method: 'POST',
  headers: requestHeaders,
  body: JSON.stringify(userData)

}

fetch('https://todo-api.ctd.academy/v1/users', requestConfig)
  .then(response => {
    if(response.ok){
      alert('cadastrado cm sucesso')

      window.location.href = '/login.html ' //local quedeve ser aberto ex; um html

    } else{
      alert('Usuário já cadastrado')
    }
   }
  )





