//função para calcular o valor do input utilizando eval()
export default function calculate(){
  const resultInput = document.querySelector('#result')
  resultInput.value = 'ERROR'
  resultInput.classList.add('error')

  const result = eval(input.value)

  resultInput.value = result
  resultInput.classList.remove('error')
}