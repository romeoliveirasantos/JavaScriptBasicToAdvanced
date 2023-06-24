// operadores lógicos
//verdadeiro ou falso
//serve para avaliar expressões envolvendo valores booleanos
// existem 3 operadores lógicos &&(AND) - || (OR) - ! (NOT)

//&&
idade1 = 40
idade2 = 30
if(idade1 === 40 && idade2 === 30){
  console.log("Idade 1 é idêntico a " + idade1 + "\nIdade 2 é idêntico a " + idade2)
}
console.log( true && true)

//OR
if( idade1 === 40 || idade2 === 20){
  console.log("Idade 1 é idêntico a " + idade1 + "\nIdade 2 não é idêntico a " + idade2)
}
console.log(true || false)

//NOT

if(!idade1 === 40){
  console.log("Idade 1 é idêntico a " + idade1)
}else{
  console.log("Idade 1 não é idêntico a " + idade1)
}
console.log(!true)
