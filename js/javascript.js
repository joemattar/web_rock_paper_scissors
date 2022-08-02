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


for (let i = 1; i < 50; i++) {
    console.log(getComputerChoice())
}
