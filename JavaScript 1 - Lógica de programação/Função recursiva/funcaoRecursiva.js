//função recursiva é uma função que chama ela mesma
//cria ndo uma pilha de chamada de funções que vão se repetindo

function dividir(num){
  console.log(num)
  if(num % 2 === 0){
    dividir(num / 2)
  }else{
    return num
  }
}

dividir()

//é preciso tomar cuidado para que essa função não se torne um loop de funções

//exemplo de função loop
// function dobrar(n){
//   console.log(n)
//   dobrar(n * 2)
// }
//essa função vai chamar a função dobrar * 2 até que haja um erro, looping infinito

//é importante ter uma condição de parada para a função, caso contrário ela se tornará infinita

//fatorial de 5: !5 == 5*4*3*2*1
//fatorial multiplica o número por um número menor até que não seja mais possível multiplicar
//fatorial de 0 é 1
function fatorial(num){
  console.log("Número: " + num)
  if(num === 0){//<- caso base
    return 1
  }else if(num === 1){
    return 1
  }else{
    console.log(num + " * !" + (num - 1) )
    return num * fatorial(num - 1)
  }
}

console.log(fatorial(100))

