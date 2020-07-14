let playOptions = ['rock', 'paper', 'scissors'];

let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

let rock = playOptions[0];
let paper = playOptions[1];
let scissors = playOptions[2];

const displayInfo = document.getElementById('info-display');
const displayPlayer = document.getElementById('player-score');
const displayComputer = document.getElementById('machine-score');
const button = document.querySelectorAll('button');

button.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (roundsPlayed < 5) {
            playGame(btn.id);
        } else {
            resetGame();
        }
  });
});

function playGame(playerSelection) {
    playRound(playerSelection);
    roundsPlayed++;
    checkRounds(roundsPlayed);
};

function playRound(playerSelection) {
    computerSelection = computerPlay();
    if (playerSelection == rock && computerSelection == scissors || playerSelection == scissors && computerSelection == paper || playerSelection == paper && computerSelection == rock) {
        addPoints('player');
        return displayInfo.textContent = `You won! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`;
    } else if (playerSelection == computerSelection) {        
        return displayInfo.textContent = 'It\'s a Draw!';
    } else {
        addPoints('computer');
        return displayInfo.textContent = `You lost! ${capitalize(playerSelection)} loses to ${capitalize(computerSelection)}`;
    }
};

function computerPlay() {
  return playOptions[Math.floor(Math.random() * playOptions.length)];
};

function checkRounds(roundsPlayed) {
    if (roundsPlayed == 5) {
    displayWinner(playerScore, computerScore);
    }
};

function addPoints(winner) {
    if (winner == 'player') {
        playerScore++;
        displayPlayer.textContent = `${playerScore}`;
    } else {
        computerScore++;
        displayComputer.textContent = `${computerScore}`;
    }
};

function displayWinner(playerScore, computerScore) {
    if (computerScore > playerScore) {
        return displayInfo.textContent = `After 5 rounds you lost :(`;
    } else if (computerScore == playerScore) {
        return displayInfo.textContent = `After 5 rounds it's a draw :P`;
    } else {
        return displayInfo.textContent = `After 5 rounds you won :)`;
    }
};

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    roundsPlayed = 0;
    displayPlayer.textContent = `${playerScore}`;
    displayComputer.textContent = `${computerScore}`;
    displayInfo.textContent = 'Choose your move to start a new game'
};

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};