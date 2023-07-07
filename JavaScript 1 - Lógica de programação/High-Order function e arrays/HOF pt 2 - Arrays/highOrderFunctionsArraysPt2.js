//HOF - PT2

//método sort
//é um método que serve para ordenar arrays com base em algum crítério


const produtos = [
  {nome:"Tênis Nike SB", preco: 450, estoque: 10, categoria: "Calçados"},
  {nome:"Camiseta SpitFire Limited Edition", preco: 150, estoque: 2, categoria: "Camisetas"},
  {nome:"Blusa moletom New Era", preco: 250, estoque: 6, categoria: "Agasalhos"},
  {nome:"Calça cargo nike", preco: 95, estoque: 40, categoria: "Calças"},
  {nome:"Jaqueta corta-vento", preco: 170, estoque: 3, categoria: "Agasalhos"},
  {nome:"Tênis Addidas yeezy boost 350", preco: 650, estoque: 30, categoria: "Calçados"},
]

//ordenando com base no preço


//ordem crescente do menor para o maior
produtos.sort(function(a,b){
  return a.preco - b.preco
})

console.log(produtos)


//ordem decrescente do maior para o menor
produtos.sort(function(a,b){
  return b.preco - a.preco
})

console.log(produtos)

//o sort modifica o array existente, para que esse comportamento não aconteça
//podemos usar o slice() pois passando o slice para o sort, criará um novo array e manterá o array original intacto

const produtosCrescente = produtos.slice().sort(function(a,b){
  return a.preco - b.preco
})

console.log(produtosCrescente)

const produtosDecrescente = produtos.slice().sort(function(a,b){
  return b.preco - a.preco
})
console.log(produtosDecrescente)