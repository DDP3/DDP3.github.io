///////////////////////////
//
//  Initial Variables
//
///////////////////////////

var wins;
var losses;

var s = "scissors";
var p = "paper";
var r = "rock";

///////////////////////////
//
//  Choice object constructor
//
///////////////////////////

var Choice = function(win, lose, tie) {
	this.winsAgainst = win;
	this.losesAgainst = lose;
	this.tiesAgainst = tie;
	//Requires functions for handling fancy picture changes if you want them.
};
//If assign function to it later, use Choice.prototype.functionName = function() {};

///////////////////////////
//
//  Choices
//
///////////////////////////

var rock = new Choice(s, p, r);
var paper = new Choice(r, s, p);
var scissors = new Choice(p, r, s);

var choices = [rock, paper, scissors];

///////////////////////////
//
//  Computer choice
//
///////////////////////////

function computerChoice() {
	return choices[Math.floor(Math.random() * 3)];
}

///////////////////////////
//
//  The Match Function
//
///////////////////////////

function match(playerChoice) {
	var compChoice = computerChoice();
	console.log(compChoice);
	console.log("computer choice is " + compChoice.tiesAgainst);
	console.log("your choice is " + playerChoice);
	
	switch(playerChoice) {
		case compChoice.winsAgainst:
			console.log("you lose");
			losses++;
			break;
		case compChoice.tiesAgainst:
			console.log("you tie");
			break;
		case compChoice.losesAgainst:
			console.log("you win");
			wins++;
			break;
		default:
			console.log("invalid");
			break;
	}
	
	//More stuff here probably dealing with wins and losses
}

//need functions for handling a win or loss and adjusting them accordingly

