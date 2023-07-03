// funções são estruturas que permitem declarar um procedimento que pode ser chamado
// programaticamente. 
// podem ser vistas como: entrada -> procedimento -> saida.

//sintaxe

function olaMundo(){
  alert("Olá, mundo!")
}

//a função precisa ser chamada para ser executada
//podem ser chamadas quantas vezes forem necessárias.

// olaMundo()

// //parâmetros da função
// // parâmetro é uma variavel que fica armazenada dentro da função mas é informada na hora de chamar a funcão

function dobro(x){
  alert("O dobro de " + x + " é " + (x * 2))
}

// dobro(5)
// dobro(20)


function criarUsuario(nome, email, senha, tipo = "user"){
  const usuario = {
    nome,
    email,
    senha,
    tipo
  }
  console.log(usuario)
}

criarUsuario("Romário", "rome@gmail.com","123456", "Subscriber")
criarUsuario("Vic","vic@email.com","1234")
criarUsuario("Joseph","joseph@342.com",1234,"admin")

//podemos transformar uma função com muitos parâmetros em um objeto

function muitosParametros(nome,telefone,endereco,senha,aniversario,email){
//
}
//chamando a função e passando os parâmetros
muitosParametros("nome","telefone","endreco","senha","aniversário","email")


//utilizando um objeto para armazenar os dados em uma função.
function objetoComoParametro(usuario){

  //declarando os dados que o usuário deve possuir
  usuario.nome
  usuario.telefone
  usuario.endereco
  usuario.senha
  usuario.aniversario
  usuario.email

  console.log(usuario)
}

//armazenando os dados do usuário em um objeto
const dadosUsuario = {
  nome:"roxo",
  telefone: 1234567,
  endereco: "rua dos treze",
  senha: 12345431,
  aniversario:"12/12",
  email:"1234@email.com"
}

//atribuindo os dados ao objto da função
objetoComoParametro(dadosUsuario)




function objetoUsuario(){
  const usuarios = []
  usuarios.nome = prompt("Insira um nome de usuário:")
  usuarios.email = prompt("Insira um e-mail:")
  usuarios.senha = prompt("Insira uma senha:")
  console.log(usuarios)
  alert(usuarios.nome + "\n" + usuarios.email + "\n" + usuarios.senha)
}

//retorno de uma função

// o retorno de uma função é a saida que essa função devolve após o procedimento
// lembrando que ela pode ou não retornar algo.

function calcularMedia(a,b){
  const media = (a + b) / 2

  //dando um retorno para o procedimento realizado pela função
  return media
}

// é preciso chamar a função, porém se a função não tiver um return o valor será undefined

//atribuindo parâmetros e guardando o resultado do procedimento da função
const resultado = calcularMedia(7,2)

console.log(resultado)

//return possibilidade trabalhar com o retorno do procedimento fora da função
function criarProduto (nome, preco, estoque = 1){
  const produto = {
    nome,
    preco,
    estoque // podemos passar no parâmetro um valor fixo porém podemos alterar, é um valor default caso você não atribua nenhum valor
  }
  return produto
}

console.log(criarProduto("Notebook Asus", 3500,10))

// retorno de uma função pode ser qualquer expressão, não necessáriamente precisando ser uma variável

function areaRetangular(base, altura){
  //retornando o valor do procedimento sem necessáriamente armazenar em um variável
  return base * altura
}

console.log(areaRetangular(3,5))

// return também pode ser a chamada de uma outra função

function areaQuadrada(lado){

  //esse return vai chamar o procedimento da função areaRetangular
  return areaRetangular(lado,lado)
}

//a função areaQuadrada é chamada e vai chamar o procedimento da areaRetangular que é o número vezes outro número
console.log(areaQuadrada(9))


//uma função só pode ser retornada uma unica vez

function ola(){
  let texto = "..."
  //ao dar o return a função acaba imediatamente
  return texto

  texto = "Olá,Mundo!"
  console.log(texto)
}

console.log(ola())


// vários retornos em uma função
//podemos ter vários retornos utilizando como por exemplo ramificações como IF-ELSE
function maioridade(idade){
  if(idade > 18){
    return "Maior de idade"
  }else{
    return "Menor de idade"
  }
}

console.log(maioridade(10))
console.log(maioridade(30))

//escopo

// é o contexto onde a variável foi declarada, podendo ser mais interno ou mais externo. 
// as variaves de escopo mais externo podem ser usadas no escopo mais interno, porém o contrário é falso.

//variavel externa
let pokemon = "Charmander"

function evoluir(){
  //mesma variável só que interna
 return pokemon = "Charizard"
}

//ao chamar a variavel, a externa irá ser chamada, caso a função não seja chamada, após a função ser chamada a variavel pokemon externa passará a ter o valor da variável interna.

//antes de chamar a função
console.log("Antes de chamar a function " + pokemon)

//depois de chamar a função
evoluir()
console.log("Depois de chamar a function " + pokemon)

