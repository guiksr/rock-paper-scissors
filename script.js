let playOptions = ['rock', 'paper', 'scissors'];
        
let playerScore;
let computerScore;
let roundNumber;

let rock = playOptions[0];
let paper = playOptions[1];
let scissors = playOptions[2];

function computerPlay() {
    return playOptions[Math.floor(Math.random() * playOptions.length)];
}

function humanPlay() {
    return playOptions[Math.floor(Math.random() * playOptions.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = humanPlay();
    computerSelection = computerPlay();
    if (playerSelection == rock && computerSelection == scissors || playerSelection == scissors && computerSelection == paper || playerSelection == paper && computerSelection == rock) {
        playerScore++;
        return console.log(`You win!`);
    } else if (playerSelection == computerSelection) {        
        return console.log(`It's a draw!`);
    } else {
        computerScore++;
        return console.log(`You lose!`);
    }
}

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

playGame(5);