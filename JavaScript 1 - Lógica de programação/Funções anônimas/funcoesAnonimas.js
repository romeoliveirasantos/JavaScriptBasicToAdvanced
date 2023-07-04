//funções anônimas
//funções podem ser armazenadas em variáveis
function somar(a,b){
  return a + b
}

const operacao = somar

console.log(operacao(4,3))

//funções anônimas são funções que não possuem nome.

const subtrair = function (a,b){
  return a - b
}

console.log(subtrair(3,1))

const concatenaNome = function(nome,sobrenome){
  return nome + " " + sobrenome
}

console.log(concatenaNome("Romário", "Oliveira"))

//atenção pois funções anônimas/functions armazenadas em variáveis não podem ser executadas antes da declaração

//se eu criar uma função anônima e tentar chamar essa função antes da declaração dará erro de cannot acess

//OlaMundo()
//Uncaught ReferenceError: Cannot access 'OlaMundo' before initialization

const OlaMundo = function(){
  console.log("Olá, mundo!")
}

// se chamar a função após a declaração dará certo.

OlaMundo()