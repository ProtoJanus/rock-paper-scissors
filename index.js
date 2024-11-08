function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let choice = choices[Math.floor(Math.random() * choices.length)];
    const computerSelectionText = document.querySelector("#computer-selection-text");
    computerSelectionText.textContent = `I choose ${choice}!`;

    return choice;
}

function playRound(userChoice, computerChoice) {
    // tie = 0, human win = 1, computer wins = 2
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
    const roundInfo = document.querySelector("#round-info");
    const makeSelectionText = document.querySelector("#make-selection-text");
    const computerSelectionText = document.querySelector("#computer-selection-text");
    const unblurred = document.querySelector("#unblurred");

    // this gets the scoreboard text so we can modify and display to user when game is over
    const playerScoreFinal = document.querySelector("#player-score-final");
    const computerScoreFinal = document.querySelector("#computer-score-final");
    const tiesScoreFinal = document.querySelector("#ties-score-final");
    const resultFinal = document.querySelector("#result-final");

    const playScreen = document.querySelector(".play-screen");
    const gameScreen = document.querySelector(".game-screen");
    playScreen.classList.toggle("hidden");
    gameScreen.classList.toggle("hidden");

    // Sets the initial state of the game on new call of "playGame()"
    round = 1;
    let computerScore = 0;
    let humanScore = 0;
    let ties = 0;
    roundInfo.textContent = `Round: ${round} out of 5`;
    makeSelectionText.textContent = "Make a Selection!";
    computerSelectionText.textContent = `Waiting.....`;


    const userChoices = document.querySelectorAll(".user-choice")

    userChoices.forEach(function (userChoice) {
        userChoice.addEventListener("click", function rounds(e) {
            round += 1;
            let result = playRound(e.target.id, getComputerChoice());
            // change selection text on winner
            if (result === 0) {
                makeSelectionText.textContent = "Looks like you tied, choose again!";
                ties += 1;
            } else if (result === 1) {
                makeSelectionText.textContent = "Looks like you won, choose again!";
                humanScore += 1;
            } else {
                makeSelectionText.textContent = "Looks like you lost, choose again!";
                computerScore += 1;
            }

            if (round >= 6) {
                unblurred.classList.toggle("hidden");
                playerScoreFinal.textContent = `Player Score: ${humanScore}`;
                computerScoreFinal.textContent = `Computer Score: ${computerScore}`;
                tiesScoreFinal.textContent = `Ties: ${ties}`;

                userChoices.forEach(function (userChoice) {
                    userChoice.removeEventListener("click", rounds);
                })

                if (computerScore > humanScore) {
                    resultFinal.textContent = "Computer Wins! Exit to play again!";
                } else if (humanScore > computerScore) {
                    resultFinal.textContent = "You win! Exit to play again!";
                } else {
                    resultFinal.textContent = "It was a tie! Exit to play again!";
                }

            } else {
                roundInfo.textContent = `Round: ${round} out of 5`;
            }
        })
    })
}
const playScreen = document.querySelector(".play-screen");
const gameScreen = document.querySelector(".game-screen");
const playGameButton = document.querySelector("#play-game-button");
const gameScreenReset = document.querySelector("#game-screen-reset");
const endScreenReset = document.querySelector("#end-screen-reset");
const unblurred = document.querySelector("#unblurred");
let round = 1;

playGameButton.addEventListener("click", function () {
    playGame();
})

gameScreenReset.addEventListener("click", function (e) {
    playScreen.classList.toggle("hidden");
    gameScreen.classList.toggle("hidden");
})

endScreenReset.addEventListener("click", function (e) {
    playScreen.classList.toggle("hidden");
    gameScreen.classList.toggle("hidden");
    unblurred.classList.toggle("hidden")
})