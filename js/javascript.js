function getComputerChoice () {
    let randomNumber = Math.floor(Math.random()*3) + 1;
    let randomChoice = "";
    if (randomNumber === 1) {
        randomChoice = "Rock";
    } else if (randomNumber === 2) {
        randomChoice = "Paper";
    } else {
        randomChoice = "Scissors";
    }
    return randomChoice
}

function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        displaySelections(playerSelection, computerSelection)
        console.log("It's A Draw!");
        return "draw"
    } else {
        if (playerSelection === "rock") {
            if (computerSelection === "paper") {
                displaySelections(playerSelection, computerSelection)
                console.log("You Lose! Paper beats Rock");
                return "lose"
            } else {
                displaySelections(playerSelection, computerSelection)
                console.log("You Win! Rock beats Scissors");
                return "win"
            } 
        } else if (playerSelection === "paper") {
            if (computerSelection === "rock") {
                displaySelections(playerSelection, computerSelection)
                console.log("You Win! Paper beats Rock!");
                return "win"
            } else {
                displaySelections(playerSelection, computerSelection)
                console.log("You Lose! Scissors beat Paper");
                return "lose"
            }
        } else {
            if (computerSelection === "rock") {
                displaySelections(playerSelection, computerSelection)
                console.log("You Lose! Rock beats Scissors");
                return "lose"
            } else {
                displaySelections(playerSelection, computerSelection)
                console.log("You Win! Scissors beat Paper");
                return "win"
            }
        }
    }
}

function displaySelections (playerSelection, computerSelection) {
    console.log(`PLAYER chose: ${playerSelection.toUpperCase()} - COMPUTER chose: ${computerSelection.toUpperCase()}`)
}

function game () {
    let player_score = 0;
    let computer_score = 0;
    while (player_score < 5 && computer_score < 5) {
        playerChoice = prompt("Please enter your choice ('Rock' / 'Paper' / Scissors'): ").toLowerCase();
        while (playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissors") {
            console.log(`${playerChoice} is not a valid choice.`)
            console.log("")
            playerChoice = prompt("Please enter your choice ('Rock' / 'Paper' / Scissors'): ").toLowerCase();
        }
        let result = playRound(playerChoice, getComputerChoice());
        if (result === "win") {
            player_score += 1;
        } else if (result === "lose") {
            computer_score += 1;
        }
        console.log(`The current score is: PLAYER ${player_score} - ${computer_score} COMPUTER`);
        console.log("")
    }
    if (player_score === 5) {
        console.log("GAME OVER! YOU WIN!");
    } else {
        console.log("GAME OVER! YOU LOSE!");
    }
}

// game();