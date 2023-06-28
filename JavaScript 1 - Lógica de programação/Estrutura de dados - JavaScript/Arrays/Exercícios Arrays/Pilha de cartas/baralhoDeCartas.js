// escreva um programa em javascript que simula um baralho de cartas 
// O programa deve iniciar mostrando na tela  um menu interativo contendo as cartas 
// que estão atualmente no baralho e as opções de "adicionar  uma carta", "puxar uma carta" e "sair".
// Ao escolher "adicionar uma carta"  o programa deve perguntar o nome da carta e adicioná-la no topo do baralho. 
// Ao escolher "puxar uma carta" o programa deve retirar a carta do topo e mostrar na tela o nome da carta puxada. o programa 
// só deve ser encerrado  ao escolher a opção "sair", caso contrário deve voltar ao menu.  

const baralho = []
let opcao = ""

do{
  opcao = prompt(
    "Cartas no baralho: " + baralho.length +
    "\n\n1. Adicionar uma carta\n2. Puxar uma carta\n3. Sair")

    switch(opcao){
      case "1":
        const novaCarta = prompt("Qual é a carta?")
        baralho.push(novaCarta)
        break;
        case "2":
          const cartaPuxada = baralho.pop()
          if(!cartaPuxada){
            alert("Não há nenhuma carta no baralho")
          }else{
            alert("Carta puxada: " + cartaPuxada)
          }
          break;
          case "3":
            alert("Encerrando...")
            break;
            default:
              alert("Opção inválida")
              break;
    }
}while(opcao != "3")