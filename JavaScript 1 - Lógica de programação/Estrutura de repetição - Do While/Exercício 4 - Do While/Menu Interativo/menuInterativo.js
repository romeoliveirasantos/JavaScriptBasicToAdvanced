// escreva um programa em javascript que simule um menu 
// interativo com 5 opções diferentes. O programa deverá iniciar
// mostrando as 5 opções disponíveis, as quatro primeiras não precisam de nenhuma função 
// específica, a última opção deve ser a opção "Encerrar" 
// Ao clicar em alguma das quatros primeiras opções, uma mensagem deve ser 
// exibida na tela indicando qual foi a opção escolhida e depois o programa deve exibir novamente o menu 
// com as 5 opções.  isso deve continuar acontecendo até que o usuário escolha a opção "Encerrar" 
// Ao escolhe-la uma mensagem dizendo que o sistema está sendo encerrado deve ser exibida na tela e então o programa é finalizado.


do{
  opcaoEscolhida = prompt("Digite o número da opção escolhida: " + "\nMenu - 1\nFazer Pedido -  2\nMeios de pagamentos 3\nFinalizar pedido  - 4\nEncerrar - 5")

  switch(opcaoEscolhida){
    case "1":
    alert("Opção escolida: " + opcaoEscolhida + " - Menu") 
    break;
      case "2":
      alert("Opção escolida: " + opcaoEscolhida + " - Fazer pedido")
      break;
        case "3":
        alert("Opção escolida: " + opcaoEscolhida + " - Meios de pagamentos")
        break;
          case "4":
          alert("Opção escolida: " + opcaoEscolhida + " - Finalizar pedido")
          break;    
  }
}while(opcaoEscolhida != "5")
alert("Opção escolida: " + opcaoEscolhida +  " O sistema está sendo encerrado! Até mais!!")

//resolução do instrutor

opcao = ""
do{
  opcao = prompt(
    "Seja bem-vindo(a)\n" +
    "\nEscolha uma das opções abaixo:" +
    "\n1. Opção um" +
    "\n2. Opção um" +
    "\n3. Opção um" +
    "\n4. Opção um" +
    "\n5. Encerrar")

    switch(opcao){
      case "1":
        alert("Você escolheu a opção 1")
        break
        case "2":
        alert("Você escolheu a opção 2")
        break
        case "3":
        alert("Você escolheu a opção 3")
        break
        case "4":
        alert("Você escolheu a opção 4")
        break
        case "5":
        alert("Você escolheu encerrar")
        alert("Encerrando...")
        break
        default:
        alert("Opção inválida!")
        break
    }

}while(opcao != "5")