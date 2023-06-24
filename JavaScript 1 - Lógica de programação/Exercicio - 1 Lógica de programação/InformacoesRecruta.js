// programa 1 - informações de um recruta

// let NomeRecruta = prompt("Digite seu primeiro nome")
// let SobrenomeRecruta = prompt("Digite seu sobrenome")
// let CampoDeEstudo = prompt("Qual é o seu campo de estudo?")
// let AnoDeNascimento = prompt("Qual é o seu ano de nascimento?")

// let convertAnoDeNascimento = parseFloat(AnoDeNascimento)

// let idade =  2023 - convertAnoDeNascimento;

// console.log(
//   "Nome: " + NomeRecruta + " " + SobrenomeRecruta
// )

// console.log("Campo de estudo: " + CampoDeEstudo);

// console.log("Idade: " + idade + " Anos.")


//resolução do instrutor

const primeiroNome = prompt("Informe o primeiro nome do recruta:")
const sobrenome = prompt("Informe o sobrenome do recruta:")
const campoDeEstudo = prompt("Qual é o campo de estudo do recruta?")
const anoDeNascimento = prompt("Qual é o ano de nascimento do recruta?")

alert(
  "Recruta cadastrado com sucesso!\n" +  
  "\nNome completo: " + primeiroNome + " " + sobrenome +
  "\nCampo de estudo: " + campoDeEstudo + 
  "\nIdade: " + (2023 - anoDeNascimento)
)
