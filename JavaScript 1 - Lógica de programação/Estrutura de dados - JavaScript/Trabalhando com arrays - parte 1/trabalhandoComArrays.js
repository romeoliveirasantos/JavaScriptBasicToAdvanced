//formas de trabalhar com arrays em Javascript

const array = ["Roxo","Azul","Vermelho","Preto","Cinza","Amarelo","Lilas","Laranja"]
console.log(array)

//função push - adicionar elemento no final do array
// podemos guardar o novo tamanho do array em uma variavel
let tamanho = array.push("Verde")
console.log(array)
console.log(tamanho)

//função unshift - adiciona elemento no inicio do array

tamanho = array.unshift("Azul Escuro")
console.log(array)
console.log(tamanho)

//função pop - remove um elemento que está no final do array
//voce pode armazenar o elemento que vc vai remover em uma váriavel para exibilo depois

let ultimoElementoRemovido = array.pop()
console.log(array)
console.log(ultimoElementoRemovido)

//função shift - remove elementos no começo do array
console.log(array)
ultimoElementoRemovido = array.shift()
console.log(ultimoElementoRemovido)

console.log(array)

//função includes - pesquisar por um elemento, devolve um valor boolean true ou false

const inclui = array.includes("Roxo")

console.log(inclui)

//podemos procurar pelo indice utilizando o indexOf, devolve o index do elemento

const indice = array.indexOf("Laranja")
console.log(indice)

//cortar e concatenar
// slice - cortar uma parte do array

const cortar = array.slice(0,4)

console.log(cortar)
//podemos usar o slice para cortar o array pelo último elemento usando um valor negativo

const cortarInvertido = array.slice(-3)
console.log(cortarInvertido)

//o array original continua com os mesmos valores.
console.log(array)

//concat - concatenar arrays

const novasCores = array.concat(cortar,cortarInvertido)
console.log(novasCores)

//função splice - substituição dos elementos ou substituir por nada
//splice(remove na posição,quantos elementos,elemento para substituir)
const elementosRemovidos = novasCores.splice(indice,1, "Roxo is the new color") 
console.log(novasCores)
// splice retorna os elementos removidos em forma de array diferente do slice

//declarando array
const arrayDeFrutas = ["Uva","Maçã","Pêssego", "Jambo"]
console.log(arrayDeFrutas)
//cortando o elemento UVA e substituindo por Morango
const elementoSlice = arrayDeFrutas.splice(0,1,"Morango")

console.log(arrayDeFrutas)
console.log(elementoSlice)

//iterar sobre os elementos - mostra o nome do elemento e a posição, percorre o array

for( let indice = 0; indice < arrayDeFrutas.length; indice++){

  const elemento = arrayDeFrutas[indice]

  console.log(elemento + " se encontra na posição " + indice)
}
