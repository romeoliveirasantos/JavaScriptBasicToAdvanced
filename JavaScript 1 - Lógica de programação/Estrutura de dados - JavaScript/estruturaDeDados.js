// // estrutura os dados de uma forma eficiente, de forma 
// que será mmelhor para acessar e modificar os dados.

// estruturas de  dados clássicas

// listas ligadas: coleção ordenadas de valores onde cada  elemento aponta para o próximo. 

// arrays: coleção de elementos que podem ser identificados por um índice

// Queue - fila:  coleção de elementos onde o primeiro elemento que entrou é o primeiro elemento que deve sair. 

// Stack - pilha:  coleção de elementos onde o último elemento que entrou é o primeiro a sair.   

// Árvore: conjunto de elementos chamados de nós organizados em estrutura hierarquica (não sequencial) podendo estar abaixo ou acima de outros nós. 

// valor e referência

// arrays(listas) e objetos(dicionários)

// arrays e objetos possuem valores e refêrencias, ou seja
// se atribuir um novo array à um já existente e depois modificar algum valor, tanto o array referênciado como o novo array será alterado.

const array = [1,2,3]
const novoarray = array

novoarray[0] = 7

console.log(array)
console.log(novoarray)

// no exemplo acima, o valor do novo array foi alterado e isso alterou o valor do array crossOriginIsolated.
