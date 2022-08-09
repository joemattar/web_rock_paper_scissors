let playerScore = 0;
let computerScore = 0;
let playerChoice = "";
let computerChoice = "";
const rockButton = document.querySelector("button.rock");
const paperButton = document.querySelector("button.paper");
const scissorsButton = document.querySelector("button.scissors");
const playerDiv = document.querySelector("div.player");
const computerDiv = document.querySelector("div.computer");
const playerImg = document.querySelector("img.player");
const computerImg = document.querySelector("img.computer");

// User is either Player or Computer
// Returns a random computer choice. Independent of GUI
function getComputerChoice () {
    let randomNumber = Math.floor(Math.random()*3) + 1;
    let randomChoice = "";
    if (randomNumber === 1) {
        randomChoice = "rock";
    } else if (randomNumber === 2) {
        randomChoice = "paper";
    } else {
        randomChoice = "scissors";
    }
    return randomChoice
}

// Displays user selection in the respective img tag of div .resolution
function displayPlayerSelection (playerSelection) {
    if (playerSelection === "rock") {
        userImg.src = "./images/hand_rock.png";
        displaySelectionEffect(playerDiv);
        playerChoice = "rock";
        } else if (playerSelection === "paper") {
        userImg.src = "./images/hand_paper.png";
        displaySelectionEffect(playerDiv);
        playerChoice = "paper";
    } else if (playerSelection === "scissors") {
        userImg.src = "./images/hand_scissors.png";
        displaySelectionEffect(playerDiv);
        playerChoice = "scissors";
    }
    disableButtons();    
}

//.resolution div selection effect
function displaySelectionEffect (div) {
    div.classList.add("selecting")
    div.addEventListener("transitionend", () => div.classList.remove("selecting"))
}

// Functions to disable buttons
function disableButtons() {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
}

// Functions to enable buttons
function enableButtons() {
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
}



rockButton.addEventListener("click", displayPlayerSelection.bind(null, user="player", playerSelection="rock"));        
paperButton.addEventListener("click", displayPlayerSelection.bind(null, user="player", playerSelection="paper"));
scissorsButton.addEventListener("click", displayPlayerSelection.bind(null, user="player", playerSelection="scissors"));




function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
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
    while (playerScore < 3 && computerScore < 3) {        

        let result = playRound(playerChoice, getComputerChoice());
        if (result === "win") {
            playerScore += 1;
        } else if (result === "lose") {
            computerScore += 1;
        }
        console.log(`The current score is: PLAYER ${playerScore} - ${computerScore} COMPUTER`);
        console.log("")
    }
    if (playerScore === 3) {
        console.log("GAME OVER! YOU WIN!");
    } else {
        console.log("GAME OVER! YOU LOSE!");
    }
}

// game();