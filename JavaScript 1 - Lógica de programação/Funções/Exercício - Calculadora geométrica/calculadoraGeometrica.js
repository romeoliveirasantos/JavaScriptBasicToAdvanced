// ### Calculadora Geométrica

// Escreva um programa em javascript para calcular a área de diferentes formas geométricas. O programa deve iniciar com um menu contendo as diferentes opções de cálculas. As opções devem ser:

// - área do triângulo: base * altura / 2
// - área do retângulo: base * altura
// - área do quadrado: lado²
// - área do trapézio: (base maior + base menor) * altura / 2
// - área do círculo: pi * raio² (considere pi = 3.14)

// Você deve escrever o programa usando funções sempre que possível para separar os procedimentos. O programa também deve ter uma opção de “Sair” e enquanto ela não for escolhida deverá voltar ao menu.



do{
  let opcoes = prompt(
    "Olá, seja bem-vindo!\n" + 
    "Calculadora Geométrica: escolha uma opção de cálculo:\n1. Calcular área do triângulo\n2. Calcular área do retângulo\n3.Calcular área do quadrado\n4. Calcular área do trapézio\n5. Calcular área do círculo\n6. Sair"
  )
  switch(opcoes){
    case "1":
      function areaTriangulo(base = parseFloat(prompt("Insira o valor da base:")),altura = parseFloat(prompt("Insira o valor da altura:"))){
        return alert("O valor da area do triângulo é: " + (base * altura) / 2)
      }
      areaTriangulo()
      break;
      case "2":
        function areaRetangulo(base = parseFloat(prompt("Insira o valor da base:")),altura = parseFloat(prompt("Insira o valor da altura:"))){
          return alert("O valor da area do retângulo é: " + base * altura )
        }
        areaRetangulo()
      break;
      case "3":
        function areaQuadrado(lado = parseFloat(prompt("Insira o valor dos lados:"))){
          return alert("O valor da area do quadrado é: " + lado * lado )
        }
        areaQuadrado()
      break;
      case "4":
        function areaTrapezio(baseMaior = parseFloat(prompt("Insira o valor da base maior:")),baseMenor = parseFloat(prompt("Insira o valor da base menor:")), altura = parseFloat(prompt("Insira o valor da altura:"))){
          return alert("O valor da area do trapézio é: " + (baseMaior + baseMenor) * altura / 2 )
        }
        areaTrapezio()
      break;
      case "5":
        function areaCirculo(raio = parseFloat(prompt("Insira o valor do raio:"))){
          return alert("O valor da area do círculo é: " + 3.14 * (raio * raio))
        }
        areaCirculo()
      break;
    case "6":
      alert("Saindo...")
      break;
      default:
        alert("Opção inválida!")
        break;
  }
}while(opcoes !== "6")


//resolução do instrutor

function calcularAreaTriangulo(){
  const base = prompt("Informe a base do triângulo:")
  const altura = prompt("Informe a base do triângulo:")
  return base * altura / 2
}

function calcularAreaRetangulo(){
  const base = prompt("Informe a base do retângulo:")
  const altura = prompt("Informe a base do retângulo:")
  return base * altura
}

function calcularAreaQuadrado(){
  const lado = prompt("Informe o lado do quadrado:")
  return lado * lado
}

function calcularAreaTrapezio(){
  const baseMaior = parseFloat(prompt("Informe a base maior do trapézio:"))
  const baseMenor = parseFloat(prompt("Informe a base menor do trapézio:"))
  const altura = prompt("Informe a altura do trapézio:")
  return (baseMaior + baseMenor) * altura / 2
}

function calcularAreaCirculo(){
  const raio = prompt("Informe o raio do círculo")
  return (3.14 * raio * raio)
}

function exibirMenu(){
  return prompt(
    "Calculadora Geométrica\n" +
    "1. Calcular área de triangulo\n" +
    "2. Calcular área de retângulo\n" +
    "3. Calcular área de quadrado\n" +
    "4. Calcular área de trapézio\n" +
    "5. Calcular área de círculo\n" +
    "6. Sair\n" 
  )
}

function executar(){
  let opcao = ""

  do{
    opcao = exibirMenu()
    let resultado

    switch(opcao){
      case "1":
        resultado = calcularAreaTriangulo()
        break;
        case "2":
          resultado = calcularAreaRetangulo()
          break;
          case "3":
            resultado = calcularAreaQuadrado()
            break;
            case "4":
              resultado = calcularAreaTrapezio()
              break;
              case "5":
                resultado = calcularAreaCirculo()
                break;
                case "6":
                  alert("Saindo...")
                  break;
                  default:
                    alert("Opção inválida!")
                    break;
    }
    if(resultado){
      alert("Resultado: " + resultado)
    }
  }while(opcao !== "6")
}

executar()