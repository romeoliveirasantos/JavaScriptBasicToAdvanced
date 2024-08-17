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