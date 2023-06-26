// Escreva um programa em javascript que seja capaz de identificar se uma palavra
// é um palíndromo. Um palíndromo é uma palavra que lida de trás para frente possui as mesmas letras na mesma ordem. O programa deve iniciar 
// pedindo que seja informada uma palavra e então deve exibir uma mensagem dizendo se aquela
// palavra é um palíndromo. Caso não seja um palíndromo, o programa deve mostrar a palavra lida da esquerda
// para a direita e da direita para esquerda.


const palavra = prompt("Insira a palavra:")

for(i = 0; i < palavra.length; i++){
  
  let letras = palavra[i]
  if(letras[i] === letras[i]){
    alert("é um palíndromo")
  }else{
    alert(letras)
  }

}