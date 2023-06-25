// estruturas condicionais - Switch
// serve para testar condições para diferentes casos

const idade = 25;

switch(idade){
  case 30:
    alert("30 anos")
    break;
    case 29:
      alert("29 anos")
      break;
      case 25:
        alert("25 anos")
        break;
        case 19:
          alert("19 anos")
          break;
          default:
            alert("Nenhuma das condições foi atendida")
            break;
            
}


const resultado = prompt("Escolha uma das alternativas abaixo: \nA\nB\nC").toLocaleUpperCase()

switch(resultado){
  case "A":
    alert("A foi escolhido")
    break;
    case "B":
      alert("B foi escolhido")
      break; 
      case "C":
        alert("C foi escolhido")
        break;
        default:
          alert("Nenhuma das alternativas foi escolhida")
          break;  
}