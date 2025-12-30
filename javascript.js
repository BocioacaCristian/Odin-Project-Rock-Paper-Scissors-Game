// Get computer choice 

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)
    let finalChoice = ""
    
    if (choice === 0) {
        finalChoice = "rock"
    } else if (choice === 1) {
        finalChoice = "paper"
    } else {
        finalChoice = "scissors"
    }
    return finalChoice
}

// Keep score

let humanScore = 0;
let computerScore = 0;

// Game logic

function playRound (humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        return "tie";
    }

    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        return "human";
    }

    return "computer";
}

const buttons = document.querySelectorAll("button");

const roundResult = document.querySelector("#round-result");
const scoreDisplay = document.querySelector("#score");
const winnerDisplay = document.querySelector("#winner")

function disableButton() {
    buttons.forEach(button => button.disabled = true);
}

function updateScore() {
    scoreDisplay.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
}

function checkWinner() {
    if (humanScore === 5) {
        winnerDisplay.textContent = "Human wins the game!"
        disableButton();
    } else if (computerScore === 5) {
        winnerDisplay.textContent = "Computer wins the game!"
        disableButton();
    }
}


buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (humanScore === 5 || computerScore === 5) return;

        const humanChoice = button.id;
        const computerChoice = getComputerChoice();

        const result = playRound(humanChoice, computerChoice);

        if (result === "human") {
            humanScore++;
            roundResult.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        } else if (result === "computer") {
            computerScore++;
            roundResult.textContent = `Computer wins! ${computerChoice} beats ${humanChoice}`;
        } else {
            roundResult.textContent = "It's a tie!";
        }
        updateScore();
        checkWinner();
    })
})
