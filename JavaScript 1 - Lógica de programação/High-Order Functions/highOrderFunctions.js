//High Order Functions
//são funções que recebem outras funções como parâmetro

function calcular(a,b,operacao){
  console.log("Iniciando operação...")
  const resultado = operacao(a,b)
  return resultado
}

//construindo a função que a operação vai receber
function soma(x,y){
  console.log("Realizando uma soma...")
  return x + y
}

//chamando a função calcular e passando a operação soma

console.log(calcular(4,2,soma))

//podemos usar a função anônima como parâmetro

//chamando a função high-order e usando uma função anônima como operação
console.log(calcular(3,2,function(x,y){
  console.log("Realizando uma subtração")
  return x - y
}))

//forEach é uma high-order function

//para exibir elementos de um array usariamos o for, porém podemos usar o forEach que faria a mesma função enconomizando muitas linhas de código

//utilizando o for

//declarando a função que vai exibir os elementos

function exibirElementos(elemento, indice, array){
  console.log(
    elemento,
    indice,
    array
  )
}
//criando o array
const lista = ["Limão","Laranja","Abacaxi", "Uva"]
//criando um for para exibir cada elemento desse array
for(i = 0; i < lista.length; i++){
  exibirElementos(lista[i],i,lista)
}

//utilizando o forEach
//o forEach exibe cada elemento utilizando apenas uma linha de código.
//é uma high-order function, pois é uma função que passa outra função como parâmetro
lista.forEach(exibirElementos)

//as high-orderns functions pode ser muito útil para deixar o código mais legível e funcional

//podemos utilizar uma função anônima como parâmetro para o forEach também.
lista.forEach(function(elemento,indice,array){
  console.log(
    elemento,
    indice,
    array
  )
})

const nomes = ["Romário","José","Hugo","Thiago"]

nomes.forEach(function(nome,indice){
  console.log("Nome:" + nome + " " + " posição: " + indice)
})