const vagas = []
let menu = ""


do{
  let filaOrganizada = ""
  for(i = 0; i < vagas.length; i++){
    filaOrganizada += "\n" + (i + 1) + "° - " + vagas[i] + "\n"
  }

  menu = prompt(
    "Olá, bem-vindo(a) ao sistema de gerenciamente de vagas!\n" +
    "\nQual opção você deseja? \n1. Guardar carro\n2. Retirar carro\n3. Sair\n" + "Vagas:\n" + filaOrganizada
  )

  switch(menu){
    case "1":
      let carro = prompt("Insira a marca do carro?")
      const guardaCarro = vagas.push(carro)
      break;
      case "2":
        const retiraCarro = vagas.pop()
        if(retiraCarro){
          alert("Carro removido: " + retiraCarro)
        }else{alert("Não há carros estacionados!")}
        
        break;
        case "3":
          alert("Saindo...")
          break
          default:
            alert("Opção inválida!")
            break;
  }
}while(menu !== "3")