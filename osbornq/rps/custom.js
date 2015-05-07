//////////////////////////////////////////////////////////////////////////
//Rock, Paper, Scissors game created by Quinton Osborn
/////////



var randomNumber = 0;    //sets initial variables to be manipulated later in the script
var playerChoice;
var computerChoice;

var score = 0;


function chooseRock() {    //this is what occurs if the player chooses the rock
	document.getElementById("playerChoose").innerHTML = "<img src='http://i.imgur.com/Y5Aj2hV.jpg' class='img-responsive center-block'>";
	playerChoice = 1;  //number assigned to choice in order to decide winner
	randomize();
}

function choosePaper() {   //this is what occurs if the player chooses paper
	document.getElementById("playerChoose").innerHTML = "<img src='http://i.imgur.com/KOycsmT.jpg' class='img-responsive center-block'>";
	playerChoice = 2;
	randomize();
}

function chooseScissors() {   //this is the script following a player's selection of scissors
	document.getElementById("playerChoose").innerHTML = "<img src='http://i.imgur.com/zeb2wWO.png' class='img-responsive center-block'>";
	playerChoice = 3;
	randomize();
}

function randomize() {  //script that generates a random number for computer's option
	randomNumber = Math.floor(Math.random()*100); //pick number between 0 and 1.0, multiply by 100 to make 0-100 (real quick)
	console.log(randomNumber);
	computerChoose();
}

function computerChoose() {  //function that decides computer's choice based on random number generated above
	if (randomNumber <=33) {
		computerChoice = 1;  //number assigned to choice in order to decide winner
		document.getElementById("computerChoose").innerHTML = "<img src='http://i.imgur.com/Y5Aj2hV.jpg' class='img-responsive center-block'>";
	}
	else if (randomNumber <=67) {
		computerChoice = 2;
		document.getElementById("computerChoose").innerHTML = "<img src='http://i.imgur.com/KOycsmT.jpg' class='img-responsive center-block'>";
	}

	else { //accounts for all options not accounted for above (68-100)
		computerChoice = 3; 
		document.getElementById("computerChoose").innerHTML = "<img src='http://i.imgur.com/zeb2wWO.png' class='img-responsive center-block'>";
	}
	play();
}


var win = "You win!";
var tie = "Tie!";
var lose = "You lose!";

function play() {  //this decides who wins, or if the game is a tie
	if (playerChoice==computerChoice) {
		document.getElementById("result").innerHTML = tie;
		updateScore();
	}

	else if (playerChoice==1 && computerChoice==2) {
		document.getElementById("result").innerHTML = lose;
		updateScore();
	}

	else if (playerChoice==1 && computerChoice==3) {
		document.getElementById("result").innerHTML = win;
		score++;
		updateScore();
	}

	else if (playerChoice==2 && computerChoice==3) {
		document.getElementById("result").innerHTML = lose;
		updateScore();
	}

	else if (playerChoice==2 && computerChoice==1) {
		document.getElementById("result").innerHTML = win;
		score++;
		updateScore();
	}

	else if (playerChoice==3 && computerChoice==1) {
		document.getElementById("result").innerHTML = lose;
		updateScore();
	}

	else {
		document.getElementById("result").innerHTML = win;
		score++;
		updateScore();
	}
}

function updateScore() {
	document.getElementById("points").innerHTML = score;
}
