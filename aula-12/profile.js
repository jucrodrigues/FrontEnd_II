const userNameRef = document.querySelector('#userName')
const userAgeRef = document.querySelector('#userAge')
const userJson = localStorage.getItem('user')
const user = JSON.parse(userJson) //transformar o json devolta em objeto

userNameRef.innerText = user.name
userAgeRef.innerText = user.age