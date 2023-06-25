// minha solução
const Veiculo1 = prompt("Insira uma marca de carro para o veículo 1")
const VelocidadeVeiculo1 = prompt ("Insira a velocidade do veículo 1")

const Veiculo2 = prompt("Insira uma marca de carro para o veículo 1")
const VelocidadeVeiculo2 = prompt ("Insira a velocidade do veículo 1")


if( VelocidadeVeiculo1 > VelocidadeVeiculo2){
  alert(
    Veiculo1 + " velocidade: " + VelocidadeVeiculo1 +
    "\n" + Veiculo2 + " velocidade: " + VelocidadeVeiculo2 +
    "\n" + Veiculo1 + " é mais rápido que " + Veiculo2)
}else if(VelocidadeVeiculo2 > VelocidadeVeiculo1){
  alert(
    Veiculo2 + "velocidade: " + VelocidadeVeiculo2 +
    "\n" + Veiculo1 + " velocidade: " + VelocidadeVeiculo1 +
    "\n" + Veiculo2 + " é mais rápido que " + Veiculo1)
}else if(VelocidadeVeiculo1 === VelocidadeVeiculo2){
  alert(
    Veiculo1 + "velocidade: " + VelocidadeVeiculo1 +
    "\n" + Veiculo2 + " velocidade: " + VelocidadeVeiculo2 +
    "\n" +  Veiculo1 + " tem a mesma velocidade que " + Veiculo2)
}





//resolução do instrutor
const veiculo1 = prompt("Informe o nome do primeiro veículo: ")
const velocidade1 = parseFloat(prompt("Informe a velocidade do primeiro veículo: "))

const veiculo2 = prompt("Informe o nome do primeiro veículo: ")
const velocidade2 = parseFloat(prompt("Informe a velocidade do primeiro veículo: "))


if(velocidade1 > velocidade2){
  alert(veiculo1 + " é mais rápido do que " + veiculo2)
}else if(velocidade2 > velocidade1){
  alert(veiculo2 + " é mais rápido do que " + veiculo1 )
}else{
  alert(veiculo1 + " e " + veiculo2 + " Possuem velocidades iguais.")
}
