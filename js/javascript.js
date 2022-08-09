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
const spanRound = document.querySelector("span.round");
const spanPlayerScore = document.querySelector("span.player");
const spanComputerScore = document.querySelector("span.computer");
const spanMake_choice = document.querySelector("span.make_choice");

// Displays user selection in the respective img tag of div .resolution
function displayPlayerSelection (playerSelection) {
    if (playerSelection === "rock") {
        playerImg.src = "./images/hand_rock.png";
        displaySelectionEffect(playerDiv);
        playerChoice = "rock";
    } else if (playerSelection === "paper") {
        playerImg.src = "./images/hand_paper.png";
        displaySelectionEffect(playerDiv);
        playerChoice = "paper";
    } else if (playerSelection === "scissors") {
        playerImg.src = "./images/hand_scissors.png";
        displaySelectionEffect(playerDiv);
        playerChoice = "scissors";
    }
    disableButtons();
    // The timout below is related to the transition time in .resolution div
    setTimeout(displayComputerSelection, 1000);

}

//.resolution div selection effect
function displaySelectionEffect (tag) {
    tag.classList.add("selecting")
    tag.addEventListener("transitionend", () => tag.classList.remove("selecting"))
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

function displayComputerSelection() {
    computerChoice = getComputerChoice();
    computerImg.src = `./images/hand_${computerChoice}.png`;
    displaySelectionEffect(computerDiv);

}







rockButton.addEventListener("click", displayPlayerSelection.bind(null, playerSelection="rock"));        
paperButton.addEventListener("click", displayPlayerSelection.bind(null, playerSelection="paper"));
scissorsButton.addEventListener("click", displayPlayerSelection.bind(null, playerSelection="scissors"));




function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        displaySelections(playerSelection, computerSelection)
        console.log("It's A Draw!");
        return "draw"
    } else {
        if (playerSelection === "rock") {
            if (computerSelection === "paper") {
                console.log("You Lose! Paper beats Rock");
                return "lose"
            } else {
                console.log("You Win! Rock beats Scissors");
                return "win"
            } 
        } else if (playerSelection === "paper") {
            if (computerSelection === "rock") {
                console.log("You Win! Paper beats Rock!");
                return "win"
            } else {
                console.log("You Lose! Scissors beat Paper");
                return "lose"
            }
        } else {
            if (computerSelection === "rock") {
                console.log("You Lose! Rock beats Scissors");
                return "lose"
            } else {
                console.log("You Win! Scissors beat Paper");
                return "win"
            }
        }
    }
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