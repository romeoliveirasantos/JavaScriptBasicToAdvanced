//High-Order Function e Arrays
//são muito utilizados na programação com javascript
//metodos para trabalhar com array

const personagens = [
  { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
  { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
  { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
  { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
  { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
]

//primeiro método ".MAP" serve para fazer
//transformação em arrays, conseguimos pegar um array 
//existente e criar um novo array baseado no existente.
//o map percorre cada elemento do array e vai criando um novo array para cada elemento

//comportamento do map, sem utilizar o map
const nomes = []
for(let i = 0; i < personagens.length; i++){
  nomes.push(personagens[i].nome)
}
console.log(nomes)

//utilizando o map

const nomePersonagens = personagens.map(function(personagem){
  
  return personagem.nome

})
console.log(nomePersonagens)
//......................................................
//método filter hof(high-order function)

//imagine que você queira filtrar apenas os personagens da raça orc, para isso é preciso conseguir um novo array só com os personagens da raça orc
//método sem o filter
const orcs = []

for (let i = 0; i < personagens.length; i++) {
  if(personagens[i].raca === "Orc"){
    orcs.push(personagens[i])
  }
}
console.log(orcs)

//método utilizando o filter
//estamos utilizando o filter e passando como parâmetro uma função que retorna o nome do personagem
//dentro dessa método filter, temos uma condicional para retornar só personagens que tenham a raçã "Orc"
// const personagensOrcs = personagens.filter(function(nomePersonagens){
//   return nomePersonagens.raca === "Orc"
// })
// console.log(personagensOrcs)
//......................................................
//método reduce serve para transformar um array em outro valor, seja um novo array, um objeto, uma string ou qualquer outra coisa
// o reduce faz uma iteração no array e vai atualizando os valores e acumula o valor total no final
//elemento 1 -> elemento 2 -> etc

reduce para somar todos os valores do nível do personagem, ele passa por todos os elementos e vai acumulando os valores para devolver o valor total no final
const nivelTotal = personagens.reduce(function(valorAcumulado,nomePersonagens){
  return valorAcumulado + nomePersonagens.nivel
},0)

console.log(nivelTotal)

//utilizando o reduce para organizar e reorganizar os dados


//utilizando o reduce para criar um novo array de objetos com os personagens agrupados por raça

const racas = personagens.reduce(function(valorAcumulado,nomePersonagens){
    if(valorAcumulado[nomePersonagens.raca]){
      valorAcumulado[nomePersonagens.raca].push(nomePersonagens)
    }else{
      valorAcumulado[nomePersonagens.raca] = [nomePersonagens]
    }
    return valorAcumulado
},{})

console.log(racas)

//treinando array de personagens
const personagens = [
  {nome:"Vholmor", nivel: 40, raca: "Humano",classe: "Mago"},
  {nome:"Gloeder", nivel: 20, raca: "Humano",classe: "Selvagem"},
  {nome:"Phusziz", nivel: 40, raca: "Morto-vivo",classe: "Necromante"}
]

//agrupando personagens por raça
const raca = personagens.reduce(function(personagensPorRaca,personagens){
  if(personagensPorRaca[personagens.raca]){
    personagensPorRaca[personagens.raca].push(personagens)
  }else{
     personagensPorRaca[personagens.raca] = [personagens]
  }
  return personagensPorRaca
},{})

//foi criado dois novos arrays de objetos
//1 dos arrays contem dois objetos da raça humana
// o outro tem o objeto da raca morto vivo
console.log(raca)