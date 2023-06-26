// Escreva um programa em Javascript que seja capaz de calcular
// a tabuada de um determinado número de 1 a 20. O programa deve começar
// pedindo o número a ser usado nos cálculos e então salvar todos os resultado de mulplicaçaõ de 1 a 20
// usando o número informado dentro de uma variável do tipo String. Depois o programa 
// deve exibir esses resultados e finalizar. 

const multiplicador = parseFloat(prompt("Insira o multiplicador: 1 a 10"))
let multiplicando = 0;
let resultado = ""

for(i = 0; i < 20; i++){
  
  resultado += multiplicador + "x" + multiplicando + " é: " + multiplicador * multiplicando + "\n"
  alert(resultado)
  multiplicando++
 

}
alert("Encerrando...")