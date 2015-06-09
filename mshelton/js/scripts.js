var userChoice;
var compChoice;
var randomNum;

function playerRock () {

	userChoice = 1; //rock is one

	randomNumber();
}


function playerPaper () {

	userChoice = 2; //paper is two

	randomNumber();
}

function playerScissors () {

	userChoice = 3; //scissors is three

	randomNumber();
}

function playerLizard () {

	userChoice = 4; //lizard is four

	randomNumber();
}

function playerSpock () {

	userChoice = 5; //spock is five

	randomNumber();
}

function randomNumber() {

	randomNum = Math.floor(Math.random()*100); //choses random number to compare with number assigned to player choice

	computerChoice();
}

function computerChoice() {

	if (randomNum <= 20) {

		compChoice = 1 //Computer will choose rock

	} else if (randomNum <= 40) {

		compChoice = 2 //Computer will choose paper

	} else if (randomNum <= 60) {

		compChoice = 3 //Computer will choose scissors

	} else if (randomNum <= 80) {

		compChoice = 4 //Computer will choose lizard

	} else if (randomNum <= 100) {

		compChoice = 5 //Computer will choose spock

	};

	compare();

} 

function compare () {

	if (userChoice === compChoice) { //if the choices are the same it will send an alert that says "It's a tie!"
		alert("It's a tie!");

	} else if (userChoice === 1 && compChoice === 2) {
		alert("Computer chooses paper, you lose :(");

	} else if (userChoice === 1 && compChoice === 3) {
		alert("Computer chooses scissors, you win :)");

	} else if (userChoice === 1 && compChoice === 4) {
		alert("Computer chooses lizard, you win :)");

	} else if (userChoice === 1 && compChoice === 5) {
		alert("Computer chooses spock, you lose :(");

	} else if (userChoice === 2 && compChoice === 1) {
		alert("Computer chooses rock, you win :)");

	} else if (userChoice === 2 && compChoice === 3) {
		alert("Computer chooses scissors, you lose :(");

	} else if (userChoice === 2 && compChoice === 4) {
		alert("Computer chooses lizard, you lose :(");

	} else if (userChoice === 2 && compChoice === 5) {
		alert("Computer chooses spock, you win :)");

	} else if (userChoice === 3 && compChoice === 1) {
		alert("Computer chooses rock, you lose :(");

	} else if (userChoice === 3 && compChoice === 2) {
		alert("Computer chooses paper, you win :)");	

	} else if (userChoice === 3 && compChoice === 4) {
		alert("Computer chooses lizard, you win :)");	

	} else if (userChoice === 3 && compChoice === 5) {
		alert("Computer chooses spock, you lose :(");	

	} else if (userChoice === 4 && compChoice === 1) {
		alert("Computer chooses rock, you lose :(");	

	} else if (userChoice === 4 && compChoice === 2) {
		alert("Computer chooses paper, you win :)");	

	} else if (userChoice === 4 && compChoice === 3) {
		alert("Computer chooses scissors, you lose :(");

	} else if (userChoice === 4 && compChoice === 5) {
		alert("Computer chooses spock, you win :)");	

	} else if (userChoice === 5 && compChoice === 1) {
		alert("Computer chooses rock, you win :)");

	} else if (userChoice === 5 && compChoice === 2) {
		alert("Computer chooses paper, you lose :(");	

	} else if (userChoice === 5 && compChoice === 3) {
		alert("Computer chooses scissors, you win :)");	

	} else if (userChoice === 5 && compChoice === 4) {
		alert("Computer chooses lizard, you lose :(");	

	}

};	//jeez, that took a long time
