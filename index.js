let round = 1;
let humanScore = 0;
let computerScore = 0;
let ties = 0;

// selects game screens and exit buttons that reset game state
const playScreen = document.querySelector(".play-screen");
const gameScreen = document.querySelector(".game-screen");
const playGameButton = document.querySelector("#play-game-button");
const gameScreenReset = document.querySelector("#game-screen-reset");
const endScreenReset = document.querySelector("#end-screen-reset");

// declare these variables in the global scope
let makeSelectionText;
let roundInfo;
let playerScoreFinal;
let computerScoreFinal;
let tiesScoreFinal;
let resultFinal;
let userChoices;
let computerSelectionText


function getComputerChoice() {
    // generate a random selection for the computer
    let choices = ["rock", "paper", "scissors"];
    let choice = choices[Math.floor(Math.random() * choices.length)];
    computerSelectionText.textContent = `I choose ${choice}!`;

    return choice;
}

function playRound(userChoice, computerChoice) {
    // determines who the winner is by playing a round and comparing user and computer choice and returning the result as a numerical value
    // tie = 0, human win = 1, computer wins = 2
    if (userChoice === 'paper' && computerChoice === 'rock' || userChoice === 'rock' && computerChoice === 'scissors' || userChoice === 'scissors' && computerChoice === 'paper') {
        return 1;
    } else if (computerChoice !== userChoice) {
        return 2;
    } else {
        return 0;
    }
}


function rounds(e) {
    // after the user selects their choice, increment round
    round += 1;

    // then play a round based on what user selected, and the generated computer one and take that result and change the scores based on it
    let result = playRound(e.target.id, getComputerChoice());
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

    // if the internal round reaches six (game ends at 5) then begin end game proceedings
    if (round >= 6) {
        //show end screen and update to final scores
        unblurred.classList.toggle("hidden");
        playerScoreFinal.textContent = `Player Score: ${humanScore}`;
        computerScoreFinal.textContent = `Computer Score: ${computerScore}`;
        tiesScoreFinal.textContent = `Ties: ${ties}`;

        userChoices.forEach(function (userChoice) {
            userChoice.removeEventListener("click", rounds);
        });

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
}

function playGame() {
    // sets the initial values every time playGame is called
    round = 1;
    humanScore = 0;
    computerScore = 0;
    ties = 0;

    makeSelectionText = document.querySelector("#make-selection-text");
    roundInfo = document.querySelector("#round-info");
    playerScoreFinal = document.querySelector("#player-score-final");
    computerScoreFinal = document.querySelector("#computer-score-final");
    tiesScoreFinal = document.querySelector("#ties-score-final");
    resultFinal = document.querySelector("#result-final");
    userChoices = document.querySelectorAll(".user-choice");
    unblurred = document.querySelector("#unblurred");
    computerSelectionText = document.querySelector("#computer-selection-text");

    const playScreen = document.querySelector(".play-screen");
    const gameScreen = document.querySelector(".game-screen");
    playScreen.classList.toggle("hidden");
    gameScreen.classList.toggle("hidden");

    roundInfo.textContent = `Round: ${round} out of 5`;
    makeSelectionText.textContent = "Make a Selection!";
    computerSelectionText.textContent = `Waiting.....`;

    userChoices.forEach(function (userChoice) {
        userChoice.addEventListener("click", rounds);
    });
}



playGameButton.addEventListener("click", function () {
    playGame();
});

// these two event listeners allow for hiding and showing screens depending on the game state and when they are clickable
gameScreenReset.addEventListener("click", function (e) {
    playScreen.classList.toggle("hidden");
    gameScreen.classList.toggle("hidden");
});

endScreenReset.addEventListener("click", function (e) {
    playScreen.classList.toggle("hidden");
    gameScreen.classList.toggle("hidden");
    unblurred.classList.toggle("hidden");
});
