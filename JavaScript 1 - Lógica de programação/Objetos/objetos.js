//o que são objetos JS
// é uma estrutura de dado como o Array, porém podemos trabalhar com chave e valor
// a chave é como o nome da propriedade e o valor é o valor que está armazenado na propriedade
//os elementos dentro do objeto não possuem ordem
// dentro de um objeto pode ter strings, números e booleanos em sua chave
// uma propriedade pode armazenar qualquer tipo de dado como valor
//as propriedades e funções podem ser referenciadas por encadeamento com ponto ou colchetes

let pessoa = {
  nome: "Romário",
  idade: 28,
  documents:{
    CPF: 12345678-23,
    RG: 13234563-43,
  },
  endereco:{
    rua: "Rua 123",
    numero: 32,
    bairro: "santo",
    cidade: "São paulo"
  }
}

console.log(pessoa)
