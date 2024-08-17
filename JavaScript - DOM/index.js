// // // //Curso javascript - DOM

// // // function onMouseEnter(){
// // //   console.log('mouse entrou')
// // // }
// // // function onClick(){
// // //   console.log('Click no elemento')
// // // }

// // function show(){
// //   //obtendo um elemento pelo ID
// //   const contactList = document.getElementById('contact-list');
// //   console.log(contactList);

// //   //obtendo vários elements HTML collection
// //   const listElements = document.getElementsByTagName('li');  
// //   console.log(listElements);
// //   //obtendo elemento pelo nome da classe
// //   const contactInputs = document.getElementsByClassName('contact-input');
// //   console.log(contactInputs);

// //   //para elementos que possuem seletor name podemos usar getElementByName
// //   //devolve uma nodelist com o elemento encontrado
// //   const contactbyname = document.getElementsByName('contact1');
// //   console.log(contactbyname);

// //   //obtendo elementos com querySelectorAll - nodeList
// //   const contacts = document.querySelectorAll('#contact-list > li > label');
// //   console.log(contacts);
  
// //   //obtendo um único elemento com querySelector
// //   //captura o primeiro elemento que encontrar e devolve mesmo que existam mais elementos com a mesma query.
// //   const firstContact = document.querySelector('#contact-list > li > label');
// //   console.log(firstContact);

// // }


// // function addInput(){
// //   const ul = document.getElementById('inputs');

// //   const newLi = document.createElement('li');

// //   //innerText adiciona conteúdo ao elemento em forma de string
// //   newLi.innerText = 'Novo input: ';

// //   const newInput = document.createElement('input');
// //   newInput.type = 'text';
// //   newInput.name = 'input';

// //   newLi.appendChild(newInput);
// //   ul.appendChild(newLi);
// // }

// // function register(element){
// //   const username = element.children.username.value
// //   const password = element.children.password.value
// //   const passwordConfirmation = element.children.passwordConfirmation.value

// //     if(password == passwordConfirmation){

// //       alert(`Usuário ${username} registrado`)
// //     }else{
// //       alert('as senhas não conferem!')
// //     }
// //   console.log({username,password,passwordConfirmation})
// // }
// // function register(ev){
// //   const sectionElement = ev.currentTarget.parentNode;
// //   const username = sectionElement.children.username.value;
// //   const password = sectionElement.children.password.value;
// //   const passwordConfirmation = sectionElement.children.passwordConfirmation.value;

// //   if(password === passwordConfirmation){
// //     alert(`usuário ${username} registrado!`)
// //   }else{
// //     alert('As senhas não conferem')
// //   }
// // }
// // const button = document.getElementById('register-button');

// // button.addEventListener('click', register)

// // function removeEvent(){
// //   button.removeEventListener('click', register);
// //   alert('event removed')
// // }

// // button.addEventListener('mouseover', function(ev){
// //   console.log(ev.screenX, ev.screenY)
  
// // })

// const form = document.getElementById('orderForm');

// form.addEventListener('submit', function (ev){
//   ev.preventDefault()
  
//   const name = document.querySelector('input[name="name"]').value;
//   const address = document.querySelector('input[name="address"]').value;
//   const breadType = document.querySelector('select[name="breadType"]').value;
//   const main = document.querySelector('input[name="main"]').value;
//   const observations = document.querySelector('textarea[name="observations"]').value;

//   let salad = ''

//   document.querySelectorAll('input[name="salad"]:checked').forEach(function (item){
//     salad += '\n' + item.value; 
//   })
//   console.log({
//     name,
//     address,
//     breadType,
//     main,
//     observations,
//     salad
// })

// alert(
//   'Pedido Realizado!'       +
//   '\nNome do cliente: '     + name +
//   '\nEndereço de entrega: ' + address +
//   '\nTipo de pão: '         + breadType +
//   '\nRecheio: '             + main + salad +
//   '\nObservações'           + observations
// )

// })

// function useLightTheme(){
//   document.body.style.color = '#212529'
//   document.body.style.backgroundColor = '#f1f5f9'
// }
// function useDarkTheme(){
//   document.body.style.color = '#f1f5f9'
//   document.body.style.backgroundColor = '#212529'
// }
// function switchTheme(){
//   document.body.classList.toggle('is-light')
//   document.body.classList.toggle('is-dark')
// }
// document.getElementById('lightBtn').addEventListener('click', useLightTheme)
// document.getElementById('darkBtn').addEventListener('click', useDarkTheme)
// document.getElementById('switchBtn').addEventListener('click', switchTheme)

const input = document.getElementById('input')

//mudar o valor do input
document.getElementById('value').addEventListener('click', function(){
  input.value = 'Olá, mundo!'
  console.log(input.getAttribute('value'))
  console.log(input.value)  
})

//mudar o atributo type do elemento
document.getElementById('type').addEventListener('click', function(){
  //input.type = input.type != 'date' ? 'date' : 'text' 
  input.setAttribute('id','v')
})

document.getElementById('placeholder').addEventListener('click', function(){
  input.placeholder = 'Digite algo'
})
document.getElementById('disable').addEventListener('click', function(){
  input.setAttribute('disabled', !input.disabled)
})

document.getElementById('data').addEventListener('click', function(){
  const data = input.dataset.somethingElse
  console.log('o valor do atributo data-something-else é: ' + data)
})