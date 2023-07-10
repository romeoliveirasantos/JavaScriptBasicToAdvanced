// # 53 - Exercício 10

// ## Sistema de Vagas de Emprego

// Escreva um programa em javascript que simule um sistema de vagas de emprego, onde é possível gerenciar as vagas e adicionar candidatos às vagas. Ele deve atender aos seguintes requisitos:

// - Ter um um menu onde é possível escolher entre as diferentes funcionalidades do sistema
//     - Listar vagas disponíveis
//     - Criar um nova vaga
//     - Visualizar uma vaga
//     - Inscrever um candidato em uma vaga
//     - Excluir uma vaga
//     - Sair
// - A opção de listar as vagas deve mostrar o índice, o nome e a quantidade de candidatos inscritos de todas as vagas.
// - A opção de criar uma nova vaga deve pedir um nome para a vaga, uma descrição e uma data limite, e também deve pedir que o usuário confirme as informações antes de salvá-las.
// - A opção de visualizar uma vaga deve pedir o índice da vaga e mostrar todas as informações dela: índice, nome, descrição, data limite, quantidade de candidatos e o nome dos candidatos.
// - A opção de inscrever um candidato em uma vaga de pedir o nome do candidato, o índice da vaga e então uma confirmação exibindo as informações da vaga antes de salvar o candidato na vaga.
// - A opção de excluir uma vaga deve pedir o índice da vaga, mostrar suas informações e pedir que o usuário confirme a exclusão da vaga antes de realmente exclui-la.

// Este é o exercício de revisão do módulo, então aproveite para utilizar todos os recursos vistos até agora sempre que possível, como os objetos, arrays e funções.
// const candidaturas = []
// const vagas = []

// function criarVaga(){
//   vagas.nome = prompt("Insira o nome da vaga")
//   vagas.desc = prompt("Insira a descrição da vaga")
//   vagas.dataLimite = prompt("Insira a data limite da vaga")
//   alert("Deseja criar esta vaga?")
// }
// function salvaCandidaturas(){
//   if(vagas.nome == vagas.nome){
//     candidaturas.push(vagas.nome)
//   }
// }


// let menu = ""
// do{
//   menu = prompt("Bem-vindo ao Vagas.com, seleciona a opção desejada: \n1. Listar vagas.\n2.visualizar uma vaga.\n3.Inscrever-se em uma vaga.\n4. Criar uma vaga.\n5. Excluir uma vaga.\n6. Sair")

//   switch(menu){
//     case "1":
//       break;
//       case "2":
//       break;
//       case "3":
//       break;
//       case "4":
//         criarVaga()
//         console.log(vagas)
//       break;
//       case "5":
//       break;
//       case "6":
//       break;
//       default:
//        alert("Opção inválida!")
//        break
//   }
// }while(menu !== "6")


// resolução do instrutor

//array armazena vagas criadas
const vagas = []

//função para listar as vagas
function listarVagas(){
  const vagasEmTexto = vagas.reduce(function(textoFinal,vaga,indice){
    textoFinal += indice + ". "
    textoFinal += vaga.nome
    textoFinal += " (" + vaga.candidatos.length + " candidatos)\n"
    return textoFinal
  },"")
  alert(vagasEmTexto)
}

//função para criar uma nova vaga
function novaVaga(){
  const nome = prompt("Informe um nome para a vaga:")
  const descricao = prompt("Informe uma descrição para a vaga:")
  const dataLimite = prompt("Informe uma data limite dd/mm/aaaa para a vaga:")

  const confirmacao = confirm(
    "Deseja criar uma nova vaga com essas informações?\n" +
    "Nome: " + nome + "\nDescrição: " + descricao + "\nData limite: " + dataLimite
  )

  if(confirmacao){
    const novaVaga = {nome,descricao,dataLimite,candidatos: []}
    vagas.push(novaVaga)
    alert("Vaga Criada")
  }
}

//função para exibir vaga
function exibirVaga(){
  const indice = prompt("Informe o índice da vaga que deseja exibir:")
  if(indice >= vagas.length || indice < 0 ){
    alert("Índice inválido")
    return
  }
  const vaga = vagas[indice]

  const candidatosEmTexto = vaga.candidatos.reduce(function(textoFinal,candidato){
    return textoFinal + "\n - " + candidato
  },"")

  alert(
    "Vaga n° " + indice +
    "\nNome: " + vaga.nome +
    "\nDescrição: " + vaga.descricao +
    "\nData limite: " + vaga.dataLimite +
    "\nQuantidade de candidatos: " + vaga.candidatos.length +
    "\nCandidatos inscritos: " + candidatosEmTexto
  )
}

//função para inscrever o candidato na vaga
function inscreverCandidatos(){
  const candidato = prompt("Informe o nome do candidato(a):")
  const indice = prompt("Informe o índice da vaga para qual o(a) candidato deseja se inscrever:")
  const vaga = vagas[indice]
  
  const confirmacao = confirm(
    "Deseja inscrever o candidato " + candidato + " na vaga " + indice + "?\n" +
    "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.dataLimite
  )

  if(confirmacao){
    vaga.candidatos.push(candidato)
    alert("Inscrição realizada.")
  }
}

//função para excluir uma vaga
function excluirVaga(){
  const indice = prompt("Informe o índice da vaga que deseja excluir:")
  const vaga = vagas[indice]

  const confirmacao = confirm(
    "Tem certeza que deseja excluir a vaga " + indice + "?\n" +
    "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.dataLimite
  )
  if(confirmacao){
    vagas.splice(indice,1)
    alert("Vaga excluída.")
  }
}

//função para exibir o menu
function exibirMenu(){
  const opcao = prompt(
    "Sistema de vagas de emprego" +
    "\n\nEscolha uma das opções abaixo:" +
    "\n1. Listar vagas disponíveis" +
    "\n2. Criar uma nova vagas" +
    "\n3. Visualizar uma vaga" +
    "\n4. Inscrever um(a) candidato(a)" +
    "\n5. Excluir uma vaga" +
    "\n6. Sair" 
  )
  return opcao
}

//função que executa o programa
function executar(){
  let opcao = ""

  do{
    opcao = exibirMenu()

    switch(opcao){
      case "1":
        listarVagas()
        break;
        case "2":
          novaVaga()
        break;
        case "3":
          exibirVaga()
        break;
        case "4":
          inscreverCandidatos()
        break;
        case "5":
          excluirVaga()
        break;
        case "6":
          alert("Encerrando...")
        break;
        default:
          alert("Opção inválida!")
          break;
    }
  }while(opcao !== "6")
}

//chamando a função que executa o programa
executar()