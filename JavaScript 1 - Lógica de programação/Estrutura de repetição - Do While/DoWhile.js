// Do While é um laço de repetição que garante que o bloco de código
// seja executado pelo menos uma vez, mesmo que a condição seja falsa.


let velocidade = 50

do{
  alert("A velocidade do veículo é " + velocidade + " km/h")
  velocidade -= 20
}while(velocidade > 0)

alert("Velocidade final: " + velocidade + " km/h")


