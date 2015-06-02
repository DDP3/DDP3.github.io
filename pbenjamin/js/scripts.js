var randomNumber = 0;

var playerChoice;

var computerChoice;

var score = 0;

function playerRock() {
	playerChoice = 1;
	randomize();
	document.getElementById("playerPic").innerHTML = "<img src='pics/rock.jpg' class='img-responsive center-block' alt='Responsive image'>"
}

function playerPaper() {
	playerChoice = 2;
	randomize();
	document.getElementById("playerPic").innerHTML = "<img src='pics/paper.jpg' class='img-responsive center-block' alt='Responsive image'>"
}

function playerScissors() {
	playerChoice = 3;
	randomize();
	document.getElementById("playerPic").innerHTML = "<img src='pics/scissors.jpg' class='img-responsive center-block' alt='Responsive image'>"
}

function randomize() {
	randomNumber = Math.floor(Math.random()*100);
	computer();
}

// function countdown() {
// 	document.getElementById("countdown").innerHTML = "Go!"
// 	computer();
// }

function computer() {
	if (randomNumber <=33) {
		computerChoice = 1;
		document.getElementById("computerPic").innerHTML = "<img src='pics/rock.jpg' class='img-responsive center-block' alt='Responsive image'>"
	}

	else if (randomNumber <=66) {
		computerChoice = 2;
		document.getElementById("computerPic").innerHTML = "<img src='pics/paper.jpg' class='img-responsive center-block' alt='Responsive image'>"
	}

	else {
		computerChoice = 3;
		document.getElementById("computerPic").innerHTML = "<img src='pics/scissors.jpg' class='img-responsive center-block' alt='Responsive image'>"
	}

	playGame();
}

function playGame() {
	if (playerChoice === computerChoice) {
		document.getElementById("textLarge").innerHTML = "You and the Computer chose the same thing. It's a tie!";
		document.getElementById("textSmall").innerHTML = "You and the Computer chose the same thing. It's a tie!";
	}

	else if (playerChoice === 1 && computerChoice === 2) {
		document.getElementById("textLarge").innerHTML = "Computer chooses Paper. Computer Wins!";
		document.getElementById("textSmall").innerHTML = "Computer chooses Paper. Computer Wins!";
		score >= 1 && score --- 1
	}

	else if (playerChoice === 1 && computerChoice === 3) {
		document.getElementById("textLarge").innerHTML = "Computer chooses Scissors. You Win!";
		document.getElementById("textSmall").innerHTML = "Computer chooses Scissors. You Win!";
		score +++ 1
	}

	else if (playerChoice === 2 && computerChoice === 1) {
		document.getElementById("textLarge").innerHTML = "Computer chooses Rock. You Win!";
		document.getElementById("textSmall").innerHTML = "Computer chooses Rock. You Win!";
		score +++ 1
	}

	else if (playerChoice === 2 && computerChoice === 3) {
		document.getElementById("textLarge").innerHTML = "Computer chooses Scissors. Computer Wins!";
		document.getElementById("textSmall").innerHTML = "Computer chooses Scissors. Computer Wins!";
		score >= 1 && score --- 1
	}

	else if (playerChoice === 3 && computerChoice === 1) {
		document.getElementById("textLarge").innerHTML = "Computer chooses Rock. Computer Wins!";
		document.getElementById("textSmall").innerHTML = "Computer chooses Rock. Computer Wins!";
		score >= 1 && score --- 1 
	}

	else if (playerChoice === 3 && computerChoice === 2) {
		document.getElementById("textLarge").innerHTML = "Computer chooses Paper. You Win!";
		document.getElementById("textSmall").innerHTML = "Computer chooses Paper. You Win!";
		score +++ 1
	}

	document.getElementById("score").innerHTML = score;
}