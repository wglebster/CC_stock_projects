let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => Math.floor(Math.random() * 9);

const compareGuesses = (humanGuess, computerGuess, targetSecret) => {
    const humanDifference = Math.abs(targetSecret - humanGuess);
    const computerDifference = Math.abs(targetSecret - computerGuess);
    return humanDifference <= computerDifference;
    
};

const updateScore = winner => {
    if(winner === 'human'){
        return humanScore++;
    } else if(winner === 'computer'){
        return computerScore ++;
    }
};

const advanceRound = () => currentRoundNumber++;
