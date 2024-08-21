//adicionando evento para o botão copy
export default function (ev){
  const button = ev.currentTarget
  if(button.innerText === 'Copy'){
    button.innerText = 'Copied!'
    button.classList.add('success')
    //window navigator
    navigator.clipboard.writeText(document.querySelector('#result').value)
  }else{
    button.innerText = 'Copy'
    button.classList.remove('success')
  }
}
