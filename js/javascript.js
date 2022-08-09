let round = 1;
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
const aNew_game = document.querySelector("a.new_game");

// Displays player selection in the player img tag of div .resolution
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

// Displays computer selection in the computer img tag of div .resolution
function displayComputerSelection() {
    computerChoice = getComputerChoice();
    computerImg.src = `./images/hand_${computerChoice}.png`;
    displaySelectionEffect(computerDiv);
    setTimeout(playRound.bind(null, playerSelection=playerChoice, computerSelection=computerChoice), 1000);
}

// Resolves a game round
function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {

    } else {
        if (playerSelection === "rock") {
            if (computerSelection === "paper") {
                computerScores();
            } else {
                playerScores();
            } 
        } else if (playerSelection === "paper") {
            if (computerSelection === "rock") {
                playerScores();
            } else {
                computerScores();
            }
        } else if (playerSelection === "scissors") {
            if (computerSelection === "rock") {
                computerScores();
            } else {
                playerScores();
            }
        }
        setTimeout(roundAdvance, 1000);
    }

    setTimeout(() => {
        displaySelectionEffect(spanRound);       
    }, 1000);

    setTimeout(enableButtons(), 1000);

    if (playerScore === 3) {
        disableButtons();
        spanMake_choice.textContent = "GAME OVER. YOU WIN! ";
        aNew_game.textContent = "NEW GAME?"
    } else if (computerScore === 3) {
        disableButtons();
        spanMake_choice.textContent = "GAME OVER. YOU LOSE! ";
        aNew_game.textContent = "NEW GAME?"
    }
}

function playerScores() {
    playerScore += 1;
    spanPlayerScore.textContent = playerScore.toString();
    displaySelectionEffect(spanPlayerScore);
}

function computerScores() {
    computerScore += 1;
    spanComputerScore.textContent = computerScore.toString();
    displaySelectionEffect(spanComputerScore);
}

function roundAdvance() {
    round += 1;
    spanRound.textContent = round.toString();
    displaySelectionEffect(spanRound);
}

rockButton.addEventListener("click", displayPlayerSelection.bind(null, playerSelection="rock"));        
paperButton.addEventListener("click", displayPlayerSelection.bind(null, playerSelection="paper"));
scissorsButton.addEventListener("click", displayPlayerSelection.bind(null, playerSelection="scissors"));