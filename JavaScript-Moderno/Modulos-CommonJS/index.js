// rodando o script em um só arquivo
// function render(){
//   console.log('Redenrizando a interface da aplicação')
// }
// function store(){
//   console.log('Salvando as informações no banco de dados')
// }
const render = require('./render')
const store = require('./store')
 console.log('Aplicação iniciada.')
 render()
 store()
 console.log('Aplicação finalizada.')