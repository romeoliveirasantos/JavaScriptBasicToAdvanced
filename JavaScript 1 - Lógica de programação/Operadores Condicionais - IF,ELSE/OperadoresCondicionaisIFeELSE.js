//estrutura condicional IF-ElSE
// é uma estrutura de controle que permite controlar melhor o fluxo de uma aplicação
// condicionais são blocos de códigos que só serão executados se uma operação lógica for verdadeira

//se condição === true Então faça algo.
// além disso pode ser usado com o else para acrescentar um bloco de código que será executado quando a condição for false

const nome = "Romário"

if(nome === "Romário"){
  console.log("Olá, " + nome)
}else{
  console.log("Olá, " + nome, "Você não é o Romário!")
}


if(5 === 5){
  console.log("verdadeiro")
}

if( 5 === "5"){
  console.log("Verdadeiro")
}else{
  console.log('5 não é idêntico à "5"')
}


// operador ternário

console.log(5 > 4 ? "True" : "False")

console.log(nome === "Romário" ? "Olá, Romário" : "Você não é o Romário")