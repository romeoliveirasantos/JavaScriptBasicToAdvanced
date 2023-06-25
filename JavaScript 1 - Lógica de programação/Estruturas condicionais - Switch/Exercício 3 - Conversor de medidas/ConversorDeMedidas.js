// escreva um programa em javascript que funcione como um conversor de medidas
// o programa deverá pedir por um valor em metros e então
//dar a opção de escolher para qual unidade de medida esse valor
//deve ser convertido.
// as opções são: 
// -milímetro(mm)
// -centímetro(cm)
// -decimetro(dm)
// -decâmetro(dam)
// -hectômetro(hm)
// -quilômetro(km)

const medidaMETRO = parseFloat(prompt("Qual a médida em metros? Apenas número!"))
const opcoesConversao = prompt("Escolha a medida: \nMM\nCM\nDM\nDAM\nHM\nKM").toUpperCase()

switch(opcoesConversao){
  case "MM":
    alert(medidaMETRO + " Metro(s) em MM é " + (medidaMETRO * 1000) + " Milimetros" )
    break;
    case "CM":
      alert(medidaMETRO + " Metro(s) em CM é " + (medidaMETRO * 100) + " Centímetros" )
      break;
      case "DM":
        alert(medidaMETRO + " Metro(s) em DM é " + (medidaMETRO * 10) + " Decimetros" )
        break;
        case "DAM":
          alert(medidaMETRO + " Metro(s) em DAM é " + (medidaMETRO / 10) + " Decâmetros" )
          break;
          case "HM":
            alert(medidaMETRO + " Metro(s) em HM é " + (medidaMETRO / 100) + " Hectômetros" )
            break;
            case "KM":
              alert(medidaMETRO + " Metro(s) em KM é " + (medidaMETRO / 1000) + " Quilômetros" )
              break; 
                default:
                  alert("Opção inválida")
                  break; 
}


//resolução do instrutor

const medida = prompt("Insira uma medida em metros:")
const unidade = prompt("Para qual medida deseja converter? " +

"\n1. milimetros (mm)" +
"\n2. milimetros (cm)" +
"\n3. milimetros (dm)" +
"\n4. milimetros (dam)" +
"\n5. milimetros (hm)" +
"\n6. milimetros (km)" 
)

switch(unidade){
  case "1":
    alert("Resultado: " + medida + "m = " + medida * 1000 + "mm")
    break;
    case "2":
      alert("Resultado: " + medida + "m = " + medida * 100 + "cm")
      break;
      case "3":
        alert("Resultado: " + medida + "m = " + medida * 10 + "dm")
        break;
        case "4":
          alert("Resultado: " + medida + "m = " + medida / 10 + "dam")
          break;
          case "5":
            alert("Resultado: " + medida + "m = " + medida / 100 + "hm")
            break;
            case "6":
              alert("Resultado: " + medida + "m = " + medida / 1000 + "km")
              break;
              default:
                alert("Opção inválida.")
                break;
                               
}