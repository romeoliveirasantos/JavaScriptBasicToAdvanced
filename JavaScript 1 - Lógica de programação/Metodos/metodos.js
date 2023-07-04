//metodos são funções atreladas à objetos.
let pessoa = {
  nome: "Romário",
  idade: 29
}

console.log(pessoa)

//criando um metodo dentro de um objeto
let carro = {
  placa: "123fab1",
  ano: 1994,
  //metodo
   exibirPlaca(){
    alert(carro.placa)
   },
  
   //o "this" referência o próprio objeto, propriedades ou metodos
   exibirAno(){
    //referenciando a propriedade ano
    console.log("ano: " + this.ano)
    //referênciando o método exibirPlaca
    this.exibirPlaca()
   }
}
//chamando o metodo

carro.exibirAno()

