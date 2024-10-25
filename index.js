
// generates a random selection for the computer
function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function getUserChoice() {
    let choice = prompt("Enter either Rock, Paper, or Scissors: ").toLowerCase();
    return choice;
}

function playRound(userChoice, computerChoice) {
    // tie = 0, human win = 1, computer wins = 2
    console.log(userChoice);
    console.log(computerChoice);
    // checks if user wins
    if (userChoice === 'paper' && computerChoice === 'rock' || userChoice === 'rock' && computerChoice === 'scissors' || userChoice === 'scissors' && computerChoice === 'paper') {
        return 1;
        // checks if computer wins
    } else if (computerChoice != userChoice) {
        return 2;
        // all else fails must be a tie
    } else {
        return 0;
    }
}

function playGame() {
    let computerScore = 0;
    let humanScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanSelection = getUserChoice();
        const computerSelection = getComputerChoice();

        let result = playRound(humanSelection, computerSelection);

        if (result === 0) {
            console.log("You tied with the computer!");
        } else if (result === 1) {
            console.log("You won!");
            humanScore += 1;
        } else {
            console.log("You Lost!");
            computerScore += 1;
        }
    }

    console.log(`Final Score\nComputer: ${computerScore}\nPlayer: ${humanScore}`)
    if (humanScore > computerScore) {
        console.log("You won the game!");
    } else {
        console.log("You lost the game!");
    }
}

playGame();