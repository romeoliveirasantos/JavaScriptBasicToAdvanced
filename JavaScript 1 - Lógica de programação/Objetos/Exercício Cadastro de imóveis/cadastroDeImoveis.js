// ## Cadastro de Imóveis

// Escreva um programa em javascript que funcione como um cadastro de imóveis e atenda aos seguintes requisitos:

// - Deve ter um menu interativo que sempre é exibido até que o usuário escolha sair.
// - O menu interativo deve mostrar no topo a quantidade de imóveis cadastrados.
// - O menu deve ter a opção de salvar um imóvel.
// - Para salvar um novo imóvel o programa deve pedir as seguintes informações:
//     - Nome do proprietário.
//     - Quantidade de quartos.
//     - Quantidade de banheiros.
//     - Se possui garagem.
// - O menu também deve ter a opção de mostrar todos os imóveis salvos.

let imoveisCadastrados = 0;
let listaImoveis = ""
let imovel = {
  nomeProprietario: null,
  quantidadeQuartos:null,
  quantidadeBanheiros: null,
  garagem:null
}

do{
  menu = prompt("Cadastro de imóveis\n\nQuantidade de imóveis cadastrados: " + imoveisCadastrados + "\n\nEscolha a opção desejada:\n1. Cadastrar imóvel\n2. Mostrar imóveis cadastrados\n3. Sair")
  
  switch(menu){
    case "1":
      imovel.nomeProprietario = prompt("Insira o nome do proprietário:")
      imovel.quantidadeQuartos = prompt("Quantos quartos o imóvel possui?")
      imovel.quantidadeBanheiros = prompt("Quantos banheiros o imóvel possui?")
      imovel.garagem = prompt("O imóvel tem garagem?\nSim\nNão")
      imoveisCadastrados+= 1
      listaImoveis+= "Imóvel: " + imoveisCadastrados + "\nNome do proprietário: " + imovel.nomeProprietario + "\nQuantidade de quartos: " + imovel.quantidadeQuartos + "\nQuantidade de banheiros: " +  imovel.quantidadeBanheiros + "\nTem garagem? " + imovel.garagem + "\n\n"
      break;
      case "2":
        if(imoveisCadastrados === 0){
          alert("Ainda não temos imóveis cadastrados!")
        }else{
          alert(listaImoveis)
        }
      break;
        case "3":
          alert("Encerrando...")
          break;
          default:
            alert("Opção inválida!")
            break;
  }
}while(menu !== "3")




//resolução do instrutor

const imoveis = []
let opcao  = ""

do{
  opcao  = prompt(
    "Bem-vindo(a) ao cadastro de imóveis!\n" + 
    "Total de imóveis: " + imoveis.length + 
    "\n\nEscolha uma opção:\n1. Novo imóvel\n2. Listar imóveis\n3. Sair"
  )

  switch(opcao){
    case "1":
      const imovel = {}

      imovel.proprietario = prompt("Informe o nome do proprietário do imóvel:")
      imovel.quartos = prompt("Quantos quartos possui o imóvel?")
      imovel.banheiros = prompt("Quantos banheiros possui o imóvel?")
      imovel.garagem = prompt("O imóvel possui garagem? (Sim/Não)")

      const confirmacao = confirm(
        "Salvar este imóvel?\n" +
        "\nProprietário: " + imovel.proprietario +
        "\nQuartos: " + imovel.quartos +
        "\nBanheiros: "  + imovel.banheiros +
        "\nPossui garagem? " + imovel.garagem
      )

      if(confirmacao){
        imoveis.push(imovel)
        alert("Imóvel salvo com sucesso!")
      }else{
        alert("Voltando ao menu!")
      }
      break;
      case "2":
        for(let i = 0; i < imoveis.length; i++){
        alert(
        "Imóvel " + (i + 1) +
        "\nProprietário: " + imoveis[i].proprietario +
        "\nQuartos: " + imoveis[i].quartos +
        "\nBanheiros: "  + imoveis[i].banheiros +
        "\nPossui garagem? " + imoveis[i].garagem
        )
        }
        break;
        case "3":
          alert("Encerrando")
          break;
          default:
            alert("Opção inválida")  

  }
}while(opcao !== "3")