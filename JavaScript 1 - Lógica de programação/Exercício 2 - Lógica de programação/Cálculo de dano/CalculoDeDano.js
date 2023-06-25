// primeiro personagem nome e poder
const player1 = prompt("Qual é o nome do personagem 1")
const inputPowerPlayer1 = prompt("Quanto de ataque tem o personagem 1")

//segundo personagem nome pontos de vida poder de defesa e se possui escudo
const player2 = prompt("Qual é o nome do personagem 2")
let inputLifePlayer2 = prompt("Quanto de vída tem o player 2?")
const inputDefensePlayer2 = prompt("Quanto de defesa tem o personagem 2?")
const haveShield = prompt("O player 2 possui shield? sim ou não")
//convert haveShield para upperCase
const temEscudo = haveShield.toUpperCase()



//convertendo string para number
const powerPlayer1 = parseFloat(inputPowerPlayer1)
let LifePlayer2 = parseFloat(inputLifePlayer2)
const DefensePlayer2 = parseFloat(inputDefensePlayer2)


if(powerPlayer1 > DefensePlayer2 && temEscudo === "NÃO"){
  const dano1 = powerPlayer1 - DefensePlayer2
  const vidaFinalPlayer2 = LifePlayer2 - dano1
  alert(
    "Nome personagem 1: "  + player1 + 
    "\n Poder personagem 1: "  + powerPlayer1 +
    "\n Nome personagem 2: "  + player2 +
    "\n Vida inicial do personagem 2: "  + LifePlayer2 +
    "\n Defesa personagem 2: "  + DefensePlayer2 +
    "\n Tem escudo? "  + temEscudo +
    "\n Dano causado: "  + dano1 +
    "\n Vida Atual personagem 2: " + vidaFinalPlayer2
  )
 
}else if(powerPlayer1 > DefensePlayer2 && temEscudo === "SIM"){

  const dano2 = powerPlayer1 - DefensePlayer2
  const danoFinal = dano2 / 2
  const vidaFinalPlayer2elseif = LifePlayer2 - danoFinal
  alert(
    "Nome personagem 1: "  + player1 + 
    "\n Poder personagem 1: "  + powerPlayer1 +
    "\n Nome personagem 2: "  + player2 +
    "\n Vida inicial do personagem 2: "  + LifePlayer2 +
    "\n Defesa personagem 2: "  + DefensePlayer2 +
    "\n Tem escudo? "  + temEscudo +
    "\n Você recebeu " + dano2 + " de dano" +
    "\n Seu escudo absorveu 50% do dano" +
    "\n Dano causado: "  + danoFinal +
    "\n Vida Atual personagem 2: " + vidaFinalPlayer2elseif
  )

}else if(powerPlayer1 <= DefensePlayer2 && temEscudo === "SIM" || temEscudo === "NÃO"){
  const dano3 = 0
  alert(
    "Nome personagem 1: "  + player1 + 
    "\n Poder personagem 1: "  + powerPlayer1 +
    "\n Nome personagem 2: "  + player2 +
    "\n Vida inicial do personagem 2: "  + LifePlayer2 +
    "\n Defesa personagem 2: "  + DefensePlayer2 +
    "\n Tem escudo? "  + temEscudo +
    "\n Você recebeu " + dano3 + 
    "\n Seu escudo absorveu 50% do dano" +
    "\n Não sofreu dano" +
    "\n Vida Atual personagem 2: " + LifePlayer2
  )
}







//resolução do instrutor

const atacante = prompt("Qual é o nome do personagem atacante?")
const poderDeAtaque = parseFloat(prompt("Qual é o seu poder de ataque?"))

const defensor = prompt("Qual é o nome do personagem defensor?")
let pontosDeVida = parseFloat(prompt("Quantos pontos de vida ele possui?"))
const poderDeDefesa = parseFloat(prompt("Qual é seu poder de defesa?"))
const possuiEscudo = prompt("Ele possui um escudo? (Sim/Não)")

let danoCausado = 0;

if(poderDeAtaque > poderDeDefesa && possuiEscudo === "Não"){
  danoCausado = poderDeAtaque - poderDeDefesa
}else if(poderDeAtaque > poderDeDefesa && possuiEscudo === "Sim"){
  danoCausado = (poderDeAtaque - poderDeDefesa) / 2
}

pontosDeVida -+ danoCausado

alert(atacante + " causou " + danoCausado + " pontos de dano em " + defensor)
alert(
  atacante + "\nPoder de ataque: " + poderDeAtaque + "\n\n" +
  defensor + "\nPontos de vida: " + pontosDeVida +
  "\nPoder de defesa: " + poderDeDefesa + "\nPossui escudo " + possuiEscudo
)