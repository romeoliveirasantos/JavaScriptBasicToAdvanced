const Btnform = document.getElementById('newStack');
const btnCadastrar = document.getElementById('CadastrarDev');

Btnform.addEventListener('click', function(ev){
  ev.preventDefault();
  const newStack = document.getElementById('stacks');

  const newStackRow = document.createElement('div');

  const newStackInputLabel = document.createElement('label')
  newStackInputLabel.innerText = '\n' + 'Tecnologia: '
  const newStackInput = document.createElement('input');
  newStackInput.type = 'text'
  newStackInput.id = 'stack'
  newStackRow.appendChild(newStackInputLabel)
  newStackRow.appendChild(newStackInput)
  
  const newStackRadioDiv = document.createElement('div');

  const newStackRadioLabel0_2 = document.createElement('label')
  newStackRadioLabel0_2.innerText = '\n' + '0-2 anos' 
  const newStackRadio0_2 = document.createElement('input')
  newStackRadio0_2.type = 'radio'
  newStackRadio0_2.id = '0_2'
  newStackRadio0_2.name = 'experience'
  newStackRadioDiv.appendChild(newStackRadioLabel0_2)
  newStackRadioDiv.appendChild(newStackRadio0_2)
  newStackRow.appendChild(newStackRadioDiv)

  newStackRadioLabel3_4 = document.createElement('label')
  newStackRadioLabel3_4.innerText = '\n' + '3-4 anos'
  newStackRadio3_4 = document.createElement('input')
  newStackRadio3_4.type = 'radio'
  newStackRadio3_4.id = '3_4'
  newStackRadio3_4.name = 'experience'
  newStackRadioDiv.appendChild(newStackRadioLabel3_4)
  newStackRadioDiv.appendChild(newStackRadio3_4)
  newStackRow.appendChild(newStackRadioDiv)

  newStackRadioLabel5 = document.createElement('label')
  newStackRadioLabel5.innerText = '\n' + '5+ anos' 
  newStackRadio5 = document.createElement('input')
  newStackRadio5.type = 'radio'
  newStackRadio5.id = '5'
  newStackRadio5.name = 'experience'
  newStackRadioDiv.appendChild(newStackRadioLabel5)
  newStackRadioDiv.appendChild(newStackRadio5)
  newStackRow.appendChild(newStackRadioDiv)

  

  const btnRemoveStack = document.createElement('button');
  btnRemoveStack.id = 'removeStack'
  btnRemoveStack.innerText = 'Remover Stack'
  btnRemoveStack.addEventListener('click', function(ev){
    ev.preventDefault();
    newStackRow.remove();
  })
  newStackRow.appendChild(btnRemoveStack)

  
  newStack.append(newStackRow)
  
})

btnCadastrar.addEventListener('click', function(ev){
  ev.preventDefault()
  let listaDevs = []
  const Devs = {}
  const elemento = document.querySelectorAll('input:checked')
  
  elemento.forEach(elemento =>{
    const valor = elemento.value
    const id = elemento.id
    switch(id){
      case '0_2':
        Devs.exp = '0 a 2 anos de experiência'
        break;
      case '3_4':
          Devs.exp = '3 a 4 anos de experiência'
          break;
      case '5':
        Devs.exp = 'Mais de 5 anos de experiência'
        break;
      default:
        Devs.exp = 'Nenhuma experiência informada!'
    }
  })
  const nome = document.querySelector('input[id="name"]').value;
  const stacks = document.querySelectorAll('input[id="stack"]');
  Devs.nome = nome
  Devs.stack = []
  stacks.forEach(stack => {
    const stackValue = stack.value;
    const expValue = stack.nextElementSibling.querySelector('input:checked')?.value || 'Nenhuma experiência informada!';
    if (stackValue) {
      Devs.stack.push(`${stackValue} - ${expValue}`);
    }
  });

  console.log(`Nome: ${Devs.nome} - Stacks: ${Devs.stack.join(', ')}`);
  })
  
  


