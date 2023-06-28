// escreva um programa em javascript para simular uma fila de espera
// em um consultório  médico.
// O programa deve iniciar mostrando na tela um menu interativo contendo a lista de todos os pacientes
// esperando em ordem mostrando sua posição ao lado do nome
// exemplo: 1° Matheus, 2° Marcos, etc. 
// O  menu também deve permitir  escolher entra as opções de "novo paciente" para 
// adicionar um novo paciente ao fim da fila(pedindo o nome do paciente) "consultar paciente" para retirar o primeiro paciente da fila
// e mostrar na t ela o nome do paciente consultado, e sair. O programa só deve ser encerrado ao escolher a opção de sair caso contrário deve voltar ao menu.


// let listaDePacientes = []
// let pacientesOrdenados;
// let senhaPaciente = 0
// let exibirLista = ""

// do{
//   console.log(listaDePacientes)

  

//   var menu = prompt(
//     "Insira qual opção você deseja:\n" + "1 - Adicionar paciente\n" + "2 - Remover paciente\n"+ "3 - Sair\n\n" +
//     "Fila de pacientes: " + "\n" + exibirLista
//   )
  
//   for(pacientesOrdenados = 1; pacientesOrdenados <= listaDePacientes.length; pacientesOrdenados++){
    
//   }

  
//   switch(menu){
//     case "1":
//       let novoPaciente = prompt("Insira o nome do paciente: ")
//       senhaPaciente++
//       exibirLista += senhaPaciente + "° - " + novoPaciente + "\n"
//       listaDePacientes.push(exibirLista)
//       break;
//        case "2":
//         const removerPaciente = listaDePacientes.shift()
//         senhaPaciente--
//         alert("Paciente consultado: " + removerPaciente )
//         exibirLista = listaDePacientes.shift()
//         break;
//   }
  
//  }while(menu !== "3")
// alert("Opção escolhida: " + menu + " - Sair.\n" + "Encerrando...")


let fila = []
let opcao  = ""

do{
  let pacientes = ""
  for(let i =  0; i  <  fila.length; i++){
    pacientes += (i + 1) + "° - " + fila[i] + "\n"
  }
  opcao = prompt(
    "Pacientes: \n" +  pacientes + 
    "\nEscolha uma ação:\n1. Novo paciente\n2. Consultar paciente\n3. Sair"
  )
  switch(opcao){
    case "1":
      const novoPaciente = prompt("Qual é o nome do paciente?")
      fila.push(novoPaciente)
      break;
        case "2":
          const pacienteConsultado =  fila.shift()
          if(pacienteConsultado){
            alert(pacienteConsultado + " foi removido da fila.")
          }else{
            alert("Não há pacientes na fila!")
          }
          break;
            case "3":
              alert("Encerrando...")
              break;
                  default:
                    alert("Opção inválida!")
                    break;
  }
}while(opcao !== "3")


