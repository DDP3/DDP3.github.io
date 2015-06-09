var computerChoice;
var winner;
var whoWon;
var timesWon = 0;
var timesLost = 0;
var timesTied = 0;

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

function addWon () {
    timesWon = timesWon + 1;
}

function addLost () {
    timesLost = timesLost + 1;
}

function addTie () {
    timesTied = timesTied + 1;
}

function chooseRock () {
    randomizeComp();
    console.log("you chose rock");
    winner = compare("rock", computerChoice);
    if (winner == "rock wins") {
        whoWon = "You Win!";
        addWon();
    } else if (winner == "tie") {
        whoWon = "You Tied."
        addTie();
    } else {
        whoWon = "You Lose.";
        addLost();
    }
    document.getElementById('theWinner').innerHTML = "The computer chose " + computerChoice + ". " + whoWon;
    document.getElementById('timesWon').innerHTML = "Times you've won: " + timesWon;
    document.getElementById('timesLost').innerHTML = "Times you've lost: " + timesLost;
    document.getElementById('timesTied').innerHTML = "Times you've Tied: " + timesTied;
}

function choosePaper () {
    randomizeComp();
    console.log("you chose paper");
    winner = compare("paper", computerChoice);
    if (winner == "paper wins") {
        whoWon = "You Win!";
        addWon();
    } else if (winner == "tie") {
        whoWon = "You Tied."
        addTie();
    } else {
        whoWon = "You Lose.";
        addLost();
    }
    document.getElementById('theWinner').innerHTML = "The computer chose " + computerChoice + ". " + whoWon;
    document.getElementById('timesWon').innerHTML = "Times you've won: " + timesWon;
    document.getElementById('timesLost').innerHTML = "Times you've lost: " + timesLost;
    document.getElementById('timesTied').innerHTML = "Times you've Tied: " + timesTied;
}

function chooseScissors () {
    randomizeComp();
    console.log("you chose scissors");
    winner = compare("scissors", computerChoice);
    if (winner == "scissors wins") {
        whoWon = "You Win!";
        addWon();
    } else if (winner == "tie") {
        whoWon = "You Tied."
        addTie();
    } else {
        whoWon = "You Lose.";
        addLost();
    }
    document.getElementById('theWinner').innerHTML = "The computer chose " + computerChoice + ". " + whoWon;
    document.getElementById('timesWon').innerHTML = "Times you've won: " + timesWon;
    document.getElementById('timesLost').innerHTML = "Times you've lost: " + timesLost;
    document.getElementById('timesTied').innerHTML = "Times you've Tied: " + timesTied;
}