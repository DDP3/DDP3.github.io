var computerChoice;
var winner;

function randomizeComp() {
    computerChoice = Math.random();
    if (computerChoice < 0.34) {
    computerChoice = "rock";
    } else if(computerChoice <= 0.67) {
    computerChoice = "paper";
    } else {
    computerChoice = "scissors";
    }
    console.log("Computer chose " + computerChoice);
}


var compare = function (choice1, choice2) {
    if (choice1 === choice2) {
        return "tie";

    } else if (choice1 == "rock") {
        if (choice2 === "scissors") {
            return "rock wins";
        } else {
            return "paper wins";
        }
    } else if (choice1 == "paper") {
        if (choice2 === "rock") {
            return "paper wins";
        } else {
            return "scissors wins";
        }
    } else if (choice1 == "scissors") {
        if (choice2 === "paper") {
            return "scissors wins";
        } else {
            return "rock wins";
        }
    }
}

function chooseRock () {
    randomizeComp();
    console.log("you chose rock");
    winner = compare("rock", computerChoice);
    document.getElementById('theWinner').innerHTML = winner;
}

function choosePaper () {
    randomizeComp();
    console.log("you chose paper");
    winner = compare("paper", computerChoice);
    document.getElementById('theWinner').innerHTML = winner;
}

function chooseScissors () {
    randomizeComp();
    console.log("you chose scissors");
    winner = compare("scissors", computerChoice);
    document.getElementById('theWinner').innerHTML = winner;
}