import calculate from "./calculate.js"
import copyToClipBoard from "./copyToClipBoard.js"
import themeSwitcher from "./themeSwitcher.js"
import {handlerButtonPress, handleClearButton, handleTyping} from "./keyHandlers.js"

//aplicando evento de click aos botões da calc
document.querySelectorAll('.charKey').forEach(function(charKeyBtn){
  charKeyBtn.addEventListener('click',handlerButtonPress)
})

//evento botão clear (C)
document.getElementById('clear').addEventListener('click', handleClearButton)

//eventos de apertar tecla da calc
document.getElementById('input').addEventListener('keydown', handleTyping)

//evento no botão (=) para calcular a operação
document.getElementById('equal').addEventListener('click', calculate)

//adicionando evento para o botão copy
document.getElementById('copyToClipboard').addEventListener('click', copyToClipBoard)

//trocar o tema de dark para light e vice-versa
document.getElementById('themeSwitcher').addEventListener('click', themeSwitcher)