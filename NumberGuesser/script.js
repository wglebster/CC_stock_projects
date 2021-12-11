let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
    let randomNumber = 0;
    randomNumber = Math.floor(Math.random() * 9);
    return randomNumber;
}

function compareGuesses(currentHumanGuess, computerGuess, target = generateTarget()) {
    if (Math.abs(target - currentHumanGuess) < Math.abs(target - computerGuess)) {
        return false;
    } else {
        return true;
    }
}

function updateScore(winner) {
    switch (winner) {
        case winner === 'human':
            humanScore = humanScore + 1;
            break;
        case winner === 'computer':
            computerScore = computerScore + 1;
            break;
    }
}

function advanceRound() {
    currentRoundNumber += 1;
}