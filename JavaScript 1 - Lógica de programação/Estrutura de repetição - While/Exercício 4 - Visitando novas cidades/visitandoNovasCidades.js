// escreva um programa em javascript que peça o nome de um turista
// e então pergunte se ele já visitou alguma cidade. Caso a resposta
// seja SVGImageElement, pergunte o nome da cidade e armazene em uma variável, então continue
// perguntando se o turista visitou alguma outra cidade até que a resposta seja não. no fim,
// o programa deve exibir o nome do turista, quantas e quais cidades ele visitou.


const nomeTurista = prompt("Qual é o seu nome?")

let visitouCidade = prompt("Você já visitou alguma cidade? insira: sim/não")
let respostaVisitouCidade = 0;
let qtdCidades = 0;
   let cidades = ""

while(visitouCidade === "sim"){
    let nomeCidade = prompt("Qual o nome da cidade?")
    qtdCidades+=1
    cidades += nomeCidade + "\n"
    respostaVisitouCidade+=1

    if(respostaVisitouCidade > 0){
      visitouCidade = prompt("Você já visitou alguma cidade? insira: sim/não")
    }
    if(visitouCidade === "não"){
      break
    }  
}
alert(nomeTurista + " Você visitou " + qtdCidades + " cidades" + "\nsão elas: \n" + cidades)



//resolução do instrutor

const turista = prompt("E aí, turista! Qual é o seu nome?")
let cidades = ""
let contagem = 0

let continuar = prompt("Você visitou alguma cidade? (sim/não)")

while(continuar === "sim"){
  let cidade = prompt("Qual é o nome da cidade visitada?")
  cidades+= " - " + cidade + "\n"
  contagem++
  continuar = prompt("Você visitou alguma outra cidade? (sim/não)")
}

alert(
  "Turista: " + turista +
  "\nQuantidade de cidades visitadas: " + contagem +
  "\nCidades visitadas:\n" + cidades
)