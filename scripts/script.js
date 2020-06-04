let playOptions = ['Rock', 'Paper', 'Scissors'];
        
let playerScore = 0;
let computerScore = 0;
let roundNumber;

let rock = playOptions[0];
let paper = playOptions[1];
let scissors = playOptions[2];

function computerPlay() {
    return playOptions[Math.floor(Math.random() * playOptions.length)];
}

function playRound(playerSelection) {
    computerSelection = computerPlay(); 
    if (playerSelection == rock && computerSelection == scissors || playerSelection == scissors && computerSelection == paper || playerSelection == paper && computerSelection == rock) {
        playerScore++;
        document.getElementById('player-points').innerHTML = `${playerScore}`;
        return document.getElementById('info-display').innerHTML = `You won! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection == computerSelection) {        
        return document.getElementById('info-display').innerHTML = 'It\'s a Draw!';
    } else {
        computerScore++;
        document.getElementById('machine-points').innerHTML = `${computerScore}`;
        return document.getElementById('info-display').innerHTML = `You lost! ${playerSelection} loses to ${computerSelection}`;
    }
}



/*
function playGame(totalRounds) {
    let gameResult;
    computerScore = 0;
    playerScore = 0;
        for (actualRound = 1; actualRound <= totalRounds; actualRound++) {
        console.log('Round ' + actualRound);
        playRound();
        console.log(`Player Score: ${playerScore}`)
        console.log(`Computer Score: ${computerScore}`)
        }
    if (playerScore == computerScore) {gameResult = 'the game is a draw'}
    if (playerScore > computerScore) {gameResult = 'you won the game'}
    if (playerScore < computerScore) {gameResult = 'you lost the game'}
    return console.log(`After ${totalRounds} rounds ${gameResult}, the computer scored ${computerScore} and you ${playerScore} points`)
    }
    */