import calculate from "./calculate.js"

const input = document.querySelector('#input')

export function handlerButtonPress(ev){  
  const value = ev.currentTarget.dataset.value
  input.value += value
}

export function handleClearButton(){
  input.value = ''
  input.focus()  
}

export function handleTyping(ev){
  ev.preventDefault()
  //teclas permitidas para digitar no input
  const allowedKeyes = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]
  //verificando se a tecla existe no array de tecladas permitidas e adicionando ao valor do input
  if(allowedKeyes.includes(ev.key)){
    input.value += ev.key
    return
  }
  //adicionando funcionalidade de apagar ao backspace utilizando slice para remover 1 caractere
  if(ev.key === 'Backspace'){
    input.value = input.value.slice(0, -1)
  }
  //adicionando funcionalidade ao enter para executar o calculo do valor do input
  if(ev.key === 'Enter'){
    calculatete()
  }
}