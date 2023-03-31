// importacao da url base para este arquivo
import { baseUrl } from "./urlBase.js";

// configuracao dos headers obrigatorios para request
const requestHeaders = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}


function loginPage() {
  window.location.href = '../index.html'

}

// funcao para autenticacao do cadastro.
export function authRegister() {


  //Objeto com os valores atualizados dos inputs enviados
  var userInfo = {
    firstName: document.querySelector('#userName').value,
    lastName: document.querySelector('#userSurname').value,
    email: document.querySelector('#userEmail').value,
    password: document.querySelector('#userPassword').value
  }


  // configuracao para envio da resquest para a API
  var requestConfig = {
    method: 'POST',
    headers: requestHeaders,
    body: JSON.stringify(userInfo)
  }

  //envio de request com os dados de cadastro para a API
  fetch(`${baseUrl}/users`, requestConfig).then(
    response => {
      if (response.ok) {
        response.json().then(
          token => {
            console.log(token)
            localStorage.setItem('authToken', token.jwt)
          })

        alert('Você foi cadastrado com sucesso')
        loginPage()

      } else {
        alert('Erro ao cadastrar')
        loginPage()
      }
    }
  )
}


//Funcao com  as configuracoes para autenticacao do login
export function authLogin() {

  //Objeto com os valores dos inputs para validar
  var userInfo = {
    email: document.querySelector('#inputEmail').value,
    password: document.querySelector('#inputPassword').value
  }

  // configuracao para envio da resquest para a API
  var requestConfig = {
    method: 'POST',
    headers: requestHeaders,
    body: JSON.stringify(userInfo)
  }


  // Envio da Request com os dados de login para a API
  fetch(`${baseUrl}/users/login`, requestConfig).then(
    response => {
      if (response.ok) {
        response.json().then(
          token => {

            console.log(token)
            localStorage.setItem('authToken', token.jwt)
          }
        )

        window.location.href = './pages/tarefas.html'

      } else {
        alert('O seu usuário ou senha está incorreto')

        loginPage()
      }
    }
  )
}






