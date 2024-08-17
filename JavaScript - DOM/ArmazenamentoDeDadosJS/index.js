//session storage
document.getElementById('sessionBtn').addEventListener('click', function(){
  const input = document.getElementById('session')
  sessionStorage.setItem('info', input.value)
  input.value = ''
})
document.getElementById('readSesssion').addEventListener('click', function (){
  const info = sessionStorage.getItem('info')
  alert('A informação salva é: ' + info)
})
//Local storage
document.getElementById('localBtn').addEventListener('click', function(){
  const input = document.getElementById('local')
  localStorage.setItem('text', input.value)
  input.value = ''
})
document.getElementById('readLocal').addEventListener('click', ()=>{
  const text = localStorage.getItem('text')
  alert('O texto salvo no localStorage é: ' + text)
})
//Cookie
document.getElementById('cookieBtn').addEventListener('click', ()=>{
  const input = document.getElementById('cookie')
  //cookieName=value; expires=UTCStringDate; path=/; -> parâmetros separando por ponto e virgula
  const cookie = 'info=' + input.value + ';'
  const expiration = 'expires=' + new Date(2024,8, 16) + ';'
  const path = 'path=/;'
  document.cookie = cookie + expiration + path
  input.value = ''
  console.log(document.cookie)
})

document.getElementById('cookie2Btn').addEventListener('click', ()=>{
  const input = document.getElementById('cookie2')
  //cookieName=value; expires=UTCStringDate; path=/; -> parâmetros separando por ponto e virgula
  const cookie = 'text=' + input.value + ';'
  const expiration = 'expires=' + new Date(2024,8, 16) + ';'
  const path = 'path=/;'
  document.cookie = cookie + expiration + path
  input.value = ''
  console.log(document.cookie)
})