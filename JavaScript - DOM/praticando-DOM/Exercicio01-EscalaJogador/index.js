function escalarJogador() {
  const inputPosicaoJogador = document.getElementById("posicaoJogador");
  const posicaoJogador = inputPosicaoJogador.value;
  console.log(posicaoJogador);

  const inputNomeJogador = document.getElementById("nomeJogador");
  const nomeJogador = inputNomeJogador.value;
  console.log(nomeJogador);

  const inputCamisaJogador = document.getElementById("camisaJogador");
  const camisaJogador = inputCamisaJogador.value;
  console.log(camisaJogador);

  if (escalarJogador) {
    const confirm = window.confirm(`Deseja escalar ${nomeJogador} como ${posicaoJogador}?`);
    if (confirm) {
      const escalacaoList = document.createElement("ul");
      escalacaoList.innerText = `${nomeJogador} - ${camisaJogador}`;

      const posicaoLi = document.createElement("li");
      posicaoLi.innerText = posicaoJogador;
      escalacaoList.appendChild(posicaoLi);

      escalacaoList.id = 'player-' + camisaJogador;
      

      const sectionEscalacao = document.getElementById("escalacao");

      sectionEscalacao.append(escalacaoList);

      inputPosicaoJogador.value = '';
      inputNomeJogador.value = '';
      inputCamisaJogador.value = '';
    }
  }
}

function removerJogador(){
  
  const number = document.getElementById('numberToRemove').value;
  const playerToRemove = document.getElementById('player-' + number);
  
  const confirm = window.confirm('Remover o jogador ' + playerToRemove.innerText + '?')
  
  if(confirm){
    playerToRemove.remove();
    //document.getElementById('escalacao').removeChild(playerToRemove);
    document.getElementById('numberToRemove').value = '';
  }else{
    window.alert('Ação inválida!');
    document.getElementById('numberToRemove').value = '';
  }
  
}