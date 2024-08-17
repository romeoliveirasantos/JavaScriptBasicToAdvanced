let turno = false;
let gameOn = false;
let score = 10;
const players = [];

document.getElementById('btnPlayer1').addEventListener('click', () => {
  const playerName1 = document.getElementById('player1').value;
  if (playerName1) {
    players.push(playerName1);
    document.getElementById('player1').value = '';
    console.log('Player 1 added:', playerName1);
  } else {
    alert('Por favor, insira o nome do Jogador 1.');
  }
});

document.getElementById('btnPlayer2').addEventListener('click', () => {
  const playerName2 = document.getElementById('player2').value;
  if (playerName2) {
    players.push(playerName2);
    document.getElementById('player2').value = '';
    console.log('Player 2 added:', playerName2);

    if (players.length === 2) {
      startGame();
    }
  } else {
    alert('Por favor, insira o nome do Jogador 2.');
  }
});

function startGame() {  
  gameOn = true;
  console.log('Game started');
  const displayNamePlayer = document.getElementById('playerName');
  const gameSpots = document.querySelectorAll('.spot');  // Certifique-se de que os spots têm a classe .spot

  gameSpots.forEach((spot) => {
    spot.addEventListener('click', function handleClick() {
      if (spot.innerText === '') { // Evita sobrescrever spots já preenchidos
        if (turno) {
          const player1 = players[0];
          displayNamePlayer.style.color = 'red';
          displayNamePlayer.innerText = `É o turno de: ${player1}`;
          spot.innerText = 'x';
          turno = false;
        } else {
          const player2 = players[1];
          displayNamePlayer.style.color = 'blue';
          displayNamePlayer.innerText = `É o turno de: ${player2}`;
          spot.innerText = 'o';
          turno = true; 
        }

        score--;
        if (score <= 0) {
          gameOn = false;
          displayNamePlayer.innerText = 'Fim de jogo!';
          gameSpots.forEach((spot) => spot.removeEventListener('click', handleClick)); // Remove event listeners
        }
      } else {
        console.log('Spot already filled');
      }
    });
  });
}
