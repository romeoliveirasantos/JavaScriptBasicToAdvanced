# Introdução ao JavaScript Moderno
Temas abordados no módulo
- Situação do javascript moderno
- Novos recursos do javascript : **template literals | desestruturação | Módulos**
- Gerenciamento de pacotes com NPM
- Compilação de javascript com babel
- Empacotamente (bundling)
40 aulas.
### Versões ECMAScript
- ES1 - 1997
- ES2 1998
- ES3 1999
- ES4 Nunca foi lançada
- ES5 2009
em 2015 o modelo de atualização mudou para anual e suas versões passaram a ser identificadas por ano.
- ES6 - 2015
- ES2016
- ES2017
- ES2018 etc...
### Compatibilidade de recursos
Os recursos precisam ser implementados pelo navegador e seus interpretadores para que funcionem
No entanto os navegadores podem demorar a implementar os recursos das atualizações do javascript
Isso cria o problema de nem sempre os recursos mais novos do javascript estarem disponíveis nos navegadores
Para saber mais sobre a compatibilidade dos recursos temos duas fontes principais: mdn - mozilla.org | caniuse.com
### Template literals
É uma forma de declarar string no javascript moderno.
Utiliza o acento grave (crase)
Permite interpolação de string e quebra de linha automática
Exemplo:
let str = `Essa linha será
quebrada automaticamente
 e essa quebrará e terá um espaço no começo
Resultado de uma expressão: ${2 + 2}`
### Arrows functions
É uma forma diferente de escrever funções anônimas
Não utiliza a palavra function no começo
Utiliza => após os parâmetros
Não possui seus próprios this, arguments, super e new.target
Também permite retornar diretamente uma expressão, caso seja uma função de uma única linha
exemplo:
const sum = (a,b) =>{
  return a + b
}
const multiply = (a , b) => a * b  -> usado quando temos apenas uma linha
Não são criadas soltas
Podem ser passadas como parâmetros para outras funcões
formas de utilizar arrow functions com as **high-order functions [métodos de array]**
const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen']
const startingWithP = towns.filter(town => town[0] === 'P') -> verificar o array e filtra as palavras que iniciam com P
### Desestruturação de objetos
- Funcionalidade que permite criar variáveis a partir de propriedades de um objeto ou elementos de um array
- No caso das propriedades do objeto, as variáveis são criadas com o mesmo nome da propriedade
- No caso dos elementos do array, podemos atribuir qualquer nome para a variávl
- Também pode ser utilizada de outras formas, como nos parâmetros de uma função
Exemplo:
const {name, email} = person
const [x,y] = coordinates
function hello([name]){
  console.log(`Hello, ${name}`)
}
Desestruturando um objeto
const person = {
  name: 'Luke',
  job : 'Developer',
  parents: ["Anakin", "Padme"]
}
const {job, parents} = person -> desestruturando o objeto person e pegando os valores de job e parents e guardando nas variáveis

Desestruturando um array
const [father, mother] = parents -> a desestruturação de array acontece com base no index do elemento, é feito de forma sequencial onde a posição da variável afeta seu valor, sendo variavel1 primeiro indice do array e variável dois segundo indice do array e assim por diante.

Desestruturando uma function
exemplo:
function createUser({name, job, parents}){ -> **desestruturando direto nos parâmetros da função assim não é preciso referencia o objeto "person.name, person.job, person.parents"**
  const id = math.floor(Math.random() * 9999)
  return{
    id,
    name,
    job,
    parents
  }
}
### Operador Spread
Permite espalhar os elementos de um objeto iteravél (array, string, etc)
Utiliza os três pontos: ...iterableObject
pode ser usado para diferentes fins
Exemplo:
let str = 'Olá, mundo!'
let arr =  [4,2,8,3,1]

console.log(...str)// separa as letras O l á , M u n d o
console.log(...arr)// separa os elementos 4 2 8 3 1
Usado para:
- passar vários parâmetros de uma única vez
- clonar objetos iteráveis
- fazer manipulação sem afetar o bojeto original
- transformar strings em arrays
const towns = ['Prontera', 'Maxera', 'Visera', 'Ledas', 'Loxus', 'Albert', 'Mathus']
console.log(towns)
console.log(...towns)
console.log(...towns[0])

const townsCopy = towns
townsCopy.pop()
townsCopy.pop()
townsCopy.push('Juno')
console.log({towns, townsCopy})

const townsClone = [...towns]
townsClone.push('Aldebaran')
console.log({towns, townsCopy, townsClone})

const townsObj = {...towns}
const townsObjClone = {...townsObj}
townsObjClone.test = 'Test'
console.log({townsObj, townsObjClone})
### Rest Params
É uma técnica no JS que permite que uma função receba qualquer número de parâmetros
Também permite manipular esses parâmetros como um array na definição da função (o que diferencia do objeto arguments)
Exemplo: 
function sum(...numbers){
  return numbers.reduce((accum, num)=> accum + num, 0)
}
pode ser usado outro parâmetro junto ao rest param
o rest param sempre tem que ser o último parâmetro.
function sum(param,...numbers){
  return numbers.reduce((accum, num)=> accum + num, 0)
}
### Encadeamento opcional
- optional chaining
é um operador que permite ler propriedades internas de uma cadeia
de objetos sem que a validação de ada referência da cadeia seja realizada
Permite acessar propriedades internas sem lançar erros quando uma propriedade é nulllish (null ou undefined)
Funciona de forma similar ao encadeamento normal (operador .) porem é escrito com '?'
Sintaxe:
const user = {
  name: 'Rome',
  email: 'rome.qualquercois@hotmail.com',
  adress:[
    {
      street:'rua 1',
      number: 89
    }
  ],
  age: 30,
  phone:[{
    countryCode: "+55",
    ddd: '11',
    number:'999999999'
  }]
}
console.log(user?.adress?.[0]?.phone?.ddd?.number)
O encadeamento acontece se a propriedade existir (?) -> é como se fosse uma pergunta (?existe? se existir, acesse!)
em casos de array, podemos passar o '?' para verificar se a posição do array existe
adress?.[4] -> verifica se existe elemento nessa posição.
Serve para prevenir erros de cannot read null properties of null -> passa a ser apenas undefined
### Operador de Coalescência Nula
Nullish coalescing -> é um operador lógico que tem o funcionamento parecido com || e &&
Utiliza dois pontos de interrogação "??"
Retorna o operando do lado direito quando o operador do lado esquerdo é null ou undefined
exemplo:
const a = null
const b = null
const c = 'Não nulo'
console.log(a ?? b ?? c) -> retorna o valor de c pois não é null ou undefined
### Introdução aos módulos