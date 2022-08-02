function getComputerChoice () {
    let randomNumber = Math.floor(Math.random()*3) + 1;
    let randomChoice = "";
    if (randomNumber === 1) {
        randomChoice = "Rock";
    } else if (randomNumber === 2) {
        randomChoice = "Paper";
    } else {
        randomChoice = "Scissors"
    }
    return randomChoice
}

function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()
    if (playerSelection === computerSelection) {
        return ("It's A Draw!")
    } else {
        if (playerSelection === "rock") {
            if (computerSelection === "paper") {
                return ("You Lose! Paper beats Rock")
            } else {
                return ("You Win! Rock beats Scissors")
            }
        } else if (playerSelection === "paper") {
            if (computerSelection === "rock") {
                return ("You Win! Paper beats Rock!")
            } else {
                return ("You Lose! Scissors beat Paper")
            }
        } else {
            if (computerSelection === "rock") {
                return ("You Lose! Rock beats Scissors")
            } else {
                return ("You Win! Scissors beat Paper")
            }
        }
    }
}

for (let i = 1; i < 50; i++) {
    console.log(playRound(getComputerChoice(), getComputerChoice()))
}
