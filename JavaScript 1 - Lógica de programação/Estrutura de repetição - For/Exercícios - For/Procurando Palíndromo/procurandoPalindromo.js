// Escreva um programa em javascript que seja capaz de identificar se uma palavra
// é um palíndromo. Um palíndromo é uma palavra que lida de trás para frente possui as mesmas letras na mesma ordem. O programa deve iniciar 
// pedindo que seja informada uma palavra e então deve exibir uma mensagem dizendo se aquela
// palavra é um palíndromo. Caso não seja um palíndromo, o programa deve mostrar a palavra lida da esquerda
// para a direita e da direita para esquerda.


const palavra = prompt("Insira a palavra:")
let palavraReversa = ""
let isPalindromo;

for(i = palavra.length -1; i >=0;  i--){

    palavraReversa += palavra[i]

    palavra === palavraReversa? isPalindromo = true : isPalindromo  = false;
   
    console.log(palavra[i] + "\n" + palavraReversa[i])
}

if(isPalindromo === true){
  alert(palavra +" é um palíndromo" + "\n" + palavra + "\n" + palavraReversa)
 }else{
  alert(palavra + " não é um palíndromo" + "\n" +  palavra + "\n"+ palavraReversa)
 }

 //resolução do instrutor

 const palavra = prompt("Informe uma palavra:")
 let palavraInvertida = ""

 for(i = palavra.length -1; i >= 0; i--){
    palavraInvertida += palavra[i]
 }

 if(palavra  === palavraInvertida){
  alert(palavra  + " é um palíndromo!")
 }else{
  alert(palavra + " não é um palíndromo!\n\n" +  
  palavra + " !== " + palavraInvertida
  )
 }