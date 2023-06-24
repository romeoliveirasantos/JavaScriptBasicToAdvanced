//  escreva um código que pega dois valores e calcula
//  o resultado das quatro operações básicas 
//  soma - subtração - divisão - multiplicação


//minha solução



let n1 = prompt("Insira um número de 1 a 100")

//valida se n1 é igual a 0
while(n1 == "0"){
  alert("Número Inválido")
  n1 = prompt("Insira um número de 1 a 100")
  if(n1 != "0"){
    n1 = n1;
    break;
  }
  
}

let operadorInput = prompt("Digite qual operação você deseja: Soma, Subtração , Multiplicação , Divisão")


let n2 = prompt("Insira um número de 1 a 100") 

//valida se n2 é igual a 0
while(n2 == "0"){
  alert("Número Inválido")
  n2 = prompt("Insira um número de 1 a 100")
  if(n2 != "0"){
    n2 = n2;
    break;
  }
  
}

//convert string para number e operador para UPPERCASE
let n1Convert = parseFloat(n1)
let n2Convert = parseFloat(n2)
let operador = operadorInput.toUpperCase();




function operacoes(){
  
  switch(operador){
    case "SOMA":
      console.log( n1Convert + n2Convert)
      break;
      case "SUBTRAÇÃO":
      console.log( n1Convert - n2Convert)
      break;
      case "DIVISÃO":
      console.log(n1Convert / n2Convert)
      break;
      case "MULTIPLICAÇÃO":
      console.log( n1Convert * n2Convert)
      break;
  }
}

operacoes()





// resolução do instrutor

//entrada dos dados
const entrada1 = prompt("Informe o primeiro número")
const entrada2 = prompt("Informe o segundo número")

//converte string para number
const x = parseFloat(entrada1)
const y = parseFloat(entrada2)

//operações
const soma = x + y
const subtracao = x - y
const multiplicacao = x * y
const divisao = x / y


//exibe na tela
alert(
  "Resultados:\n" + 
  "\nSoma: " + soma +
  "\nSubtração: " + subtracao + 
  "\nMultiplicação: " + multiplicacao +
  "\nDivisão: " + divisao
)