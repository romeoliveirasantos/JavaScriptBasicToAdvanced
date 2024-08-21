export function showUserName(){
  const userName = sessionStorage.getItem('userName')  
  const mainSession = document.getElementById('mainSection')
  const span = document.createElement('span')
  span.innerText = userName
  span.id = 'spanUserName'
  span.style.color = 'green'
  
  const h1User = document.createElement('h1')
  h1User.innerText = `Olá, `
  h1User.style.fontFamily = 'sans-serif'
  h1User.appendChild(span)
  mainSession.appendChild(h1User)
}