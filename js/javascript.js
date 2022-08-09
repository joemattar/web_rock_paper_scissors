let playerScore = 0;
let computerScore = 0;
let playerChoice = "";
let computerChoice = "";
const rockButton = document.querySelector("button.rock");
const paperButton = document.querySelector("button.paper");
const scissorsButton = document.querySelector("button.scissors");

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
function displaySelection (user, userSelection) {
    const userDiv = document.querySelector(`div.${user}`);
    const userImg = document.querySelector(`img.${user}`);
    if (userSelection === "rock") {
        userImg.src = "./images/hand_rock.png";
        displaySelectionEffect(userDiv);
        if (user === "player") {
            playerChoice = "rock";
        }
    } else if (userSelection === "paper") {
        userImg.src = "./images/hand_paper.png";
        displaySelectionEffect(userDiv);
        if (user === "player") {
            playerChoice = "paper";
        }
    } else if (userSelection === "scissors") {
        userImg.src = "./images/hand_scissors.png";
        displaySelectionEffect(userDiv);
        if (user === "player") {
            playerChoice = "scissors";
        }
    }
    disableButtons();    
}

//.resolution div selection effect
function displaySelectionEffect (div) {
    div.classList.add("selecting")
    div.addEventListener("transitionend", () => div.classList.remove("selecting"))
}


// Functions to disable and enable buttons
function disableButtons() {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
}

function enableButtons() {
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
}




rockButton.addEventListener("click", displaySelection.bind(null, user="player", userSelection="rock"));
        
paperButton.addEventListener("click", displaySelection.bind(null, user="player", userSelection="paper"));

scissorsButton.addEventListener("click", displaySelection.bind(null, user="player", userSelection="scissors"));


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