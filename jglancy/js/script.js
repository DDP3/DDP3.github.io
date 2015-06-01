var playChoice;
//This stores whether the player has chosen rock, paper, or scissors
var compChoice;
//This stores whether the computer has chosen rock, paper, or scissors
var randNumber;
//This stores the random number the computer generated, which then dictates whether the computer chose rock, paper, or scissors

function rockPlayer() {
	playChoice=1;
	randomNumber();
}
//The function rockPlayer runs when the player picks rock
//The function random number then runs, which generates the computers choice of rock, paper, or scissors

function paperPlayer() {
	playChoice=2;
	randomNumber();
}
//The function paperPlayer runs when the player picks paper
//The function random number then runs

function scissorsPlayer() {
	playChoice=3;
	randomNumber();
}
//The function scissorsPlayer runs when the player picks scissors

 function randomNumber() {
 	randNumber=Math.floor(Math.random()*100);
 	computerChoice();
 }
 //The function randomNumber generates the computers choice of rock, paper, or scissors
 //A random number is generated, multiplied by 100, and then rounded down

 function computerChoice() {
 	//The function computerChoice assigns the random number which the computer generated to be either rock, paper, or scissors
 	if (randNumber <= 33) {
 		compChoice=1;
 		//If the variable randNumber is less than 33, the computer chooses rock
 	} else if (randNumber <= 66) {
 		compChoice=2;
 		//If the variable randNumber is less than 66, the computer chooses paper
 	} else if (randNumber <=100) {
 		compChoice=3;
 		//If the variable randNumber is less than 100, the computer chooses scissors
 	}
	compare();
 }

function compare() {
	//The function compare tells the player whether they or the computer won
	if (playChoice === compChoice) {
		document.getElementById("result").innerHTML = "tie";

	} else if (playChoice === 1 && compChoice === 2) {
		document.getElementById("result").innerHTML = "you chose rock and the computer chose paper, computer wins";

	} else if (playChoice === 1 && compChoice === 3) {
		document.getElementById("result").innerHTML = "you chose rock and the computer chose scissors, you win";

	} else if (playChoice === 2 && compChoice === 1) {
		document.getElementById("result").innerHTML = "you chose paper and the computer chose rock, you win";

	} else if (playChoice === 2 && compChoice === 3) {
		document.getElementById("result").innerHTML = "you chose paper and the computer chose scissors, computer wins";

	} else if (playChoice === 3 && compChoice === 1) {
		document.getElementById("result").innerHTML = "you chose scissors and the computer chose rock, computer wins";

	} else if (playChoice === 3 && compChoice ===2) {
		document.getElementById("result").innerHTML = "you chose scissors and the computer chose paper, you win";
	}
}