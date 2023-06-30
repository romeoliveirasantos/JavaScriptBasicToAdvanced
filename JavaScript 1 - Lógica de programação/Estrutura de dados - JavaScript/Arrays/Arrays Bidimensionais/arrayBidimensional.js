//array bidimensional - matrizes
// é um array com uma ou mais dimenções
// arrays bidimensionais se comportam como matriz

const array = [
  ["1° nível",
  "2° nível",
  "3° nível"],

  ["4° nível",
  "5° nível",
  "6° nível"],
  [
    ["7° nível"],
    ["8° nível","9° nível"]
  ]
]

console.log(array[2][1][1])

const matriz = [
  ["l1, c1","l1, c2","l1, c3","l1, c4"],
  ["l2, c1","l2, c2", "l2, c3", "l2, c4"],
  ["l3, c1","l3, c3", "l3, c3", "l3, c4"],
]

console.table(matriz)

//iterando sobre array bidimensional
// o código abaixo criará um novo array na última posição do index 0
matriz[0].push(["Nova Linha"])
console.table(matriz)


//o código abaixo vai adicionar um elemento no array index 1 na posição 0
matriz[1].unshift("Deus")
console.table(matriz)

//iterando sobre arrays usando o FOR

for(i = 0; i < matriz.length; i++){
  //para iterar sob os arrays na camada de dentro é preciso utilizar outro for
  for(d = 0; d < matriz[i].length; d++){
    const mostraElemento = matriz[i][d]
  }
  
}


const alunos = [
  ["1° série",
  ["Alunos"],
  ["Romário","Camila","Juliana","Roberta","Maria","Jefferson"]
  ],

  ["2° série",
  ["Alunos"],
  ["Cleber","João","Pedro","Leandro","Jéssica","Jenifer"]
  ],

  ["3° série",
  ["Alunos"],
  ["Priscila","Paulo","Gabriela","Karol","Fabiana","Fabrício"]
  ],

  ["4° série",
  ["Alunos"],
  ["Pedro Paulo","Rogério","Roger","Lucas","Gustavo","Julia"]
  ],

]

console.table(alunos)

for(i = 0; i < alunos.length; i++){
  //acessando os arrays dentro de aluno
  for(j = 0; j < alunos[i].length; j++){
    const alunosPorSerie = alunos[i][j]
  }
  for(f = 0; f < alunos[j].length; f++){
    const mostrarAlunos = alunos[f]
    console.log(mostrarAlunos)
  }
}