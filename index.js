
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
    if (userChoice === 'paper' && computerChoice === 'rock' || computerChoice === 'scissors') {

    } elseif(userChoice === '')
}
let computerScore = 0;
let humanScore = 0;

const humanSelection = getUserChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

