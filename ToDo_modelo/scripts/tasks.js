
import { baseUrl } from "./urlBase.js";
const authToken = localStorage.getItem('authToken')
const bntLogoutRef = document.querySelector('#bntLogout')

// evento para iniciar funcoes somente apos carregamento da pagina


  //configuracoes dos headers e autorizacao 
  const requestHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': authToken //autorizacao pra obter os dados do usuario
  }

  //funcao para deslogar o usuario e enviar para a pagina de login
  function logout() {
    window.location.href = '../index.html'
    localStorage.clear()
  }

function getTasks(){

    //coniguracao do com GET para obter os dados das tarefas
    var requestConfig = {
      method: 'GET',
      headers: requestHeaders,
    }

    fetch (`${baseUrl}/tasks`, requestConfig).then(
      response => {
        if(response.ok){
          response.json().then(
            tasks => {
            console.log(tasks)
            }
          )
        } else {
          //fazer algo
        }
      } 
    )
}




  // funcao que solicita da API os dados do usuario
  function getUserData() {

    //coniguracao do com GET para obter os dados 
    var requestConfig = {
      method: 'GET',
      headers: requestHeaders,
    }

    //Envio de request com o pedido dos dados do usuaeio para a API
    fetch(`${baseUrl}/users/getMe`, requestConfig).then(
      response => {
        if (response.ok) {
          //colocar dados do usuario no html
          getTasks()
        } else {
          if (response.status === 401) {
            logout()
          }
        }
      }
    )
  }



  //funcao que verifica se ha um token salvo no localstorage
  function checkIfAuthTokenExist() {
    if (authToken === null) {
      logout()

    } else {
      getUserData()

    }
  }

  checkIfAuthTokenExist()

  bntLogoutRef.addEventListener('click', logout)

