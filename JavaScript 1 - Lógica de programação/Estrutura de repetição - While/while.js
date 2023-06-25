// while é um laço de repetição, enquando a condição for verdadeira
// o bloco de código dentro do laço será executado até que a condição
//torne-se falsa.

let velocidade = 80

while(velocidade > 0){
  alert("O carro está a " + velocidade + " Km/h")
  velocidade -= 20
  alert("Diminuindo 20 km/h")

  if(velocidade === 40){
    break
  }
}

alert("O carro parou! " + velocidade + " Km/h")