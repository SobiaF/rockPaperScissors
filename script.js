let playerOne = 0;
let playerTwo = 0;

function rockPaperScissors(playerOneChoice, playerTwoChoice) {
    if (playerOneChoice === "paper") {
        if (playerTwoChoice === "rock") {
            playerOne++;
            return "paper wins";
        } else if (playerTwoChoice === "scissors") {
            playerTwo++;
            return "scissors wins";
        } else {
            return "it's a tie!"
        }
    }
    if (playerOneChoice === "scissors") {
        if (playerTwoChoice === "rock") {
            playerTwo++;
            return "rock wins";
        } else if (playerTwoChoice === "paper") {
            playerOne++;
            return "scissors wins";
        } else {
            return "it's a tie!"
        }
    }

    if (playerOneChoice === "rock") {
        if (playerTwoChoice === "scissors") {
            playerOne++;
            return "rock wins";
        } else if (playerTwoChoice === "paper") {
            playerTwo++;
            return "paper wins";
        } else {
            return "it's a tie!"
        }
    }
}

console.log(rockPaperScissors("rock", "rock"));
console.log(rockPaperScissors("paper", "scissors"));
console.log(rockPaperScissors("scissors", "rock"));

console.log("Player One's Score " + playerOne + ",", "Player Two's Score " + playerTwo);