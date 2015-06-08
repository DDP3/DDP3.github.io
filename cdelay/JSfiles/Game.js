var userChoice;
var compChoice;
var randomNum;


function playerRock() {

	userChoice = 1;

	console.log("User chooses Rock");
	randomNumber();
}

function playerPaper() {

	userChoice = 2;
	console.log("Paper")
	randomNumber();
}

function playerScissors() {

	userChoice = 3;
	console.log("Scissors")
	randomNumber();
}

function randomNumber() {
	randomNum = Math.floor(Math.random()*100)

	computerChoice();
}


function computerChoice() {

	if (randomNum <= 33){
		compChoice = 1;
		console.log("comp Rock")
	} else if (randomNum <= 66){

		compChoice = 2;
		console.log("comp Paper")
	} else if (randomNum <= 100){
		compChoice = 3;
		console.log("Comp Scissors")
	}

	compare();
}

function compare() {

	if (userChoice === compChoice) {
		alert("A tie!");
		
	} else if (userChoice === 1 && compChoice === 2) {
		alert("The computer's paper beats your rock!");
	}

	 else if (userChoice === 1 && compChoice === 3) {
		alert("Your rock beats the computer's Scissors!");
	}

	 else if (userChoice === 2 && compChoice === 1) {
		alert("Your paper beats the computer's rock!");
	}

	 else if (userChoice === 2 && compChoice === 3) {
		alert("The computer's scissors beat your paper!");
	}

	 else if (userChoice === 3 && compChoice === 1) {
		alert("The computer's rock beats your scissors!");
	}

	 else if (userChoice === 3 && compChoice === 2) {
		alert("Your Scissors beat the computers paper!");
	}

}