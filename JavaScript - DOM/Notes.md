## DOM - document object model
Utilizado para:
Combinar html + css + javascript
Criar comportamentos dinâmicos nas paginas web
Manipular eventos

## Eventos HTML
Eventos são formas dinâmicas de executar javascript dentro de uma página HTML
Permite executar Javascript sem travar o comportamento da página.
São acionados por ações específicas.

Podemos utilizar vários eventos como por exemplo:
onclick =''
onmouseenter=''
onfocus=''
onchange=''
onblur=''

# O DOM permite que um documento (HTML,XML) seja acessado pelo javascript
isso é feito atravez de uma arvore de objetos, estrutura pai/filho dentro de uma hierarquia.

## Obtendo elementos do HTML via JS
Para obter vários elementos em uma HTML COLLECTION podemos utilizar
document.getElementsByTagName()
document.getElementsByClassName()

Para obter vários elementos em uma nodeList podemos utilizar
document.getElementsByName()
document.querySelectorAll()

Para obter um único elemento podemos utilizar
document.querySelector()

 //obtendo um elemento pelo ID
  const contactList = document.getElementById('contact-list');
  console.log(contactList);

  //obtendo vários elements HTML collection
  const listElements = document.getElementsByTagName('li');  
  console.log(listElements);
  //obtendo elemento pelo nome da classe
  const contactInputs = document.getElementsByClassName('contact-input');
  console.log(contactInputs);

  //para elementos que possuem seletor name podemos usar getElementByName
  //devolve uma nodelist com o elemento encontrado
  const contactbyname = document.getElementsByName('contact1');
  console.log(contactbyname);

  //obtendo elementos com querySelectorAll - nodeList
  const contacts = document.querySelectorAll('#contact-list > li > label');
  console.log(contacts);
  
  //obtendo um único elemento com querySelector
  //captura o primeiro elemento que encontrar e devolve mesmo que existam mais elementos com a mesma query.
  const firstContact = document.querySelector('#contact-list > li > label');
  console.log(firstContact);

  # como criar novos elementos com DOM
  passos
  - criar elemento
  document.createElement()
  - adicionar conteúdo ao elemento
  elementoCriado.innerHTML = 'conteúdo' <- essa propriedade é perigosa pois abre brecha de segurança é preciso usar com cuidado - innerText é mais seguro
  - adicionar o elemento como um novo nó no DOM
  appendChild(elementoCriado)

 # como remover elementos com DOM
 passos
 - remover elemento utilizando o pai > remove o filho:  elementoPAI.removeChild(elemento)
 - é possível remover o próprio elemento direto com: elemento.remove();

 ## Enviando valoresdo DOM para o javascript
 podemos referênciar elementos dentro da propria função no HTML
 exemplo: <button onclick="register(this.parentNode)">Registrar</button>
 parentNode é usado pra referenciar o elemento pai.

 podemos referênciar diretamente também usando o nome do element HTML
 conforme exemplo na função abaixo
 
 function register(element){
  const username = element.children.username.value <- refêrencia o elemento input que tem a propriedade name (username) e pega o valor dele.
  const password = element.children.password.value <- refêrencia o elemento input que tem a propriedade name (password) e pega o valor dele.
  const passwordConfirmation = element.children.passwordConfirmation.value <- refêrencia o elemento input que tem a propriedade name (passwordConfirmation) e pega o valor dele.

  console.log({username,password,passwordConfirmation})
}
## trabalhando com eventos no JS
para isso precisamos trabalhar com o **addEventListener** que basicamente é um monitorador de eventos
responsável por capturar eventos HTML quando o mesmo acontece.
exige dois parâmetros -> evento e função callback
elemento.addEventListener('evento DOM', função a ser executada)
**podemos adicionar mais de um evento com addEventListener no mesmo elemento**

- podemos acessar eventos via função
ev é o evento que vai ser disparado e é passado automáticamente quando usado como parâmetro da função
substitui o método event (event global) que foi depreciado.
function register(ev){
  console.log(ev)  <- mostra várias funções disponíveis para esse método
  podemos acessar elementos utilizando ev
  currentTarget é o elemento que está disparando o evento.
  parentNode é o elemento pai
  children é o elemento filho que estamos acessando
  username é o elemento em sí
  value é o valor do elemento
  const username = ev.currentTarget.parentNode.children.username.value;

  para facilitar e organizar podemos utilizar uma variável para armazenar uma parte do código do evento
  const elemento = ev.currentTarget.parentNode
  e ai aplicamos ele no código total
  const username = elemento.children.username.value
}

- podemos remover eventos utilizando **removeEventListener**

elemento.removeEventListener('tipo do evento', função que está ligada ao evento)
irá remover o evento que tem o tipo do evento informado e o nome da função ligada ao evento.
ou seja remove eventos específicos.

## Trabalhando com formulários no JS
conseguimos acessar elementos utilizando query
por exemplo para acessar o elemento abaixo
select name="breadType" id="breadType"
podemos usar
const elemento = document.querySelector('input[name="breadType"]') -> estou acessando o elemento onde a propriedade **"name"** é igual a breadType, isso serve para id`s e classes ou qualquer seletor de elemento HTML

método
evento preventDefault() -> muito utilizado para trabalhar com eventos de formulário, não executa o evento padrão de formulário.

esse evento tem que estar ligado diretamente ao elemento.
no caso para que a pagina não recarregue ao clicar no botão de um form, o evento **preventDefault()** tem que estar ligado ao elemento form.

## Manipulando estilos com JS
cada propriedade CSS é mapeada no javascript utilizando camelCase
exemplo: backgroundColor
estilo inline tem prioridade sobre estilo em classes
existe uma propriedade interessante chamada toggle no método classList, ela remove ou adiciona a classe
document.body.classList.toggle('is-light') -> aplica o thema claro
document.body.classList.toggle('is-dark') -> aplica o thema escuro

## Manipulando atributos com JS
conseguimos manipular qualquer atributo HTML usando javascript
getAttribute em elemento, captura o atributo inicial do elemento, se não houver valor no atributo o mesmo é null
setAttribute seta qualquer atributo para o elemento em foco. setAttribute('id', 'ID' ) 
alguns exemplos
 input.value = 'Olá, mundo!'
 input.setAttribute('id','v')
 input.type = input.type != 'date' ? 'date' : 'text' 
 input.placeholder = 'Digite algo'
 input.setAttribute('disabled', !input.disabled)

 Atributos data, servem para armazenar valores customizados dentro do elemento HTML
 dataset acessa qualquer atributo do tipo data e é um objeto
 const data = input.dataset.somethingElse -> captura o valor de data-something
 console.log('o valor do atributo data-something-else é: ' + data) -> exibe o valor guardado no atributo data-something

## Armazenando dados no navegador
- Session Storage -> armazenamento de sessão
forma simples de armazenar dados no navegador durante a navegação|
persistem mesmo após mudar de página em um mesmo site enquanto a aba/janela estiver aberta|
existem somente enquanto a aba estiver aberta, ao fechar, o sessionStorage é limpo
* sessionStorage.setItem('info', input.value)
* const info = sessionStorage.getItem('info')

- Local Storage -> armazenamento local
Dados armazenados no navegador que persistem mesmo após fechar a aba/janela
existem para sempre até serem removidos, não possuem data de expiração
*localStorage.setItem('text', input.value)
*const text = localStorage.getItem('text')
as informações ficam salvas até que sejam excluídas manualmente

- Cookies -> são dados armazenados em arquivos de texto no computador do usuário
podem possuir uma data de expiração.
é o mais usado para permitir lembrar de dados mesmo após fechar o navegador.
são enviados nas requisições e podem existir no servidor, sendo devolvidos
quando uma pagina html for solicitada.
const input = document.getElementById('cookie')
 * //cookieName=value; expires=UTCStringDate; path=/; -> parâmetros separando por ponto e virgula
 * const cookie = 'info=' + input.value + ';'
 * const expiration = 'expires=' + new Date(2024,8, 16) + ';'
 * const path = 'path=/;'
 * document.cookie = cookie + expiration + path
 * input.value = ''
