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

// Get human choice
function getHumanChoice() {
    let choice = prompt('Choose Rock, Paper or Scissors: ');
    let finalChoice = choice.toLowerCase();

    return finalChoice
}

// Keep score

let humanScore = 0;
let computerScore = 0;

// Game logic

function playRound (humanChoice, computerChoice) {

    if (humanChoice === 'rock' && computerChoice === "scissors") {
        humanScore += 1;
    } else if (humanChoice === 'paper' && computerChoice === "rock") {
        humanScore += 1;
    } else if (humanChoice === 'scissors' && computerChoice === "paper") {
        humanScore += 1;
    } else if (computerChoice === 'paper' && humanChoice === "rock") {
        computerScore += 1;
    } else if (computerChoice === 'rock' && humanChoice === 'scissors') {
        computerScore += 1;
    } else if ( computerChoice === 'scissors' && humanChoice === 'paper') {
        computerScore +=1;
    } else {
        console.log("It's a tie!")
    }
}

function playGame () {
    // create a variable to keep the round number
    let round = 0;

    while (round < 5) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
        round +=1
        console.log('Human choice ' + humanSelection + ' Computer selection ' + computerSelection);
        console.log('Human score ' + humanScore + ' Computer score' + computerScore);
    }

    if ( humanScore > computerScore) {
        console.log('Human wins!')
    } else if (computerScore > humanScore) {
        console.log('Computer wins!')
    } else (
        console.log("It's a tie!")
    )
}

playGame()