


var playerScore = 0;
var computerScore = 0;
var randomNumber = 0;
var playerChoice;
var computerChoice;

function playerRock() {
	document.getElementById("innerPlayerChoice").innerHTML= "<br> <img src='pictures/rock.jpg' alt='rock' class='img-responsive img-center'> <br> <p>Rock</p>";
	playerChoice = 1;
	randomize();
}

function playerPaper() {
	document.getElementById("innerPlayerChoice").innerHTML= "<br> <img src='pictures/paper.jpg' alt='paper' class='img-responsive img-center'> <br> <p>Paper</p>";
	playerChoice = 2;
	randomize();
}

function playerScissors() {
	document.getElementById("innerPlayerChoice").innerHTML= "<br> <img src='pictures/scissors.jpg' alt='scissors' class='img-responsive img-center'> <br> <p>Scissors</p>";
	playerChoice = 3;
	randomize();
}

function randomize() {
	randomNumber = Math.floor(Math.random()*100);
	compChoice();
}

function compChoice() {
	if (randomNumber <= 33) {
		computerChoice = 1;
		document.getElementById("innerComputerChoice").innerHTML= "<br> <img src='pictures/rock.jpg' alt='rock' class='img-responsive img-center'> <br> <p>Rock</p>";
	} else if (randomNumber <= 66) {
		computerChoice = 2;
		document.getElementById("innerComputerChoice").innerHTML= "<br> <img src='pictures/paper.jpg' alt='paper' class='img-responsive img-center'> <br> <p>Paper</p>";
	} else if (randomNumber <= 100) {
		computerChoice = 3;
		document.getElementById("innerComputerChoice").innerHTML= "<br> <img src='pictures/scissors.jpg' alt='scissors' class='img-responsive img-center'> <br> <p>Scissors</p>";
	};

	compare();
}

function compare() {
	if (playerChoice === computerChoice) {
		document.getElementById("winnerText").innerHTML = "It's a Tie!";
	} else if (playerChoice === 1 && computerChoice === 2) {
		document.getElementById("winnerText").innerHTML = "Computer Wins!";
		computerScore += 1;
		printScore();
	} else if (playerChoice === 1 && computerChoice === 3) {
		document.getElementById("winnerText").innerHTML = "You Win!";
		playerScore += 1;
		printScore();
	} else if (playerChoice === 2 && computerChoice === 1) {
		document.getElementById("winnerText").innerHTML = "You Win!";
		playerScore += 1;
		printScore();
	} else if (playerChoice === 2 && computerChoice === 3) {
		document.getElementById("winnerText").innerHTML = "Computer Wins!";
		computerScore += 1;
		printScore();
	}else if (playerChoice === 3 && computerChoice === 1) {
		document.getElementById("winnerText").innerHTML = "Computer Wins!";
		computerScore += 1;
		printScore();
	} else if (playerChoice === 3 && computerChoice === 2) {
		document.getElementById("winnerText").innerHTML = "You Win!";
		playerScore += 1;
		printScore();
	}
}

function printScore() {
	document.getElementById("player").innerHTML = playerScore;
	document.getElementById("computer").innerHTML = computerScore;
}
