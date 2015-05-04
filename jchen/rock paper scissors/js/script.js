//Variables for the choices of the player and the computer
var player_choice;
var comp_choice;
//Wins, ties, and losses. Pretty self-explanatory.
var wins = 0;
var ties = 0;
var loss = 0;
//The goals of the game. Could be used for acheivements in addition to the above numbers
var streak = 0;
var highscore = 0;

document.getElementById('highscore_stats').innerHTML = 0;
document.getElementById('streak_stats').innerHTML = streak;
function player_rock () {
	//This function runs when the player chooses rock. The reason of why the choices are displayed in strings rather than easily storable integers is because it's easier to directly input a string to the output log rather than creating a table for converting that interger to a string and then adding the string to the output log
	player_choice = "rock";
	document.getElementById('user_action').innerHTML = "ROCK <br><img src='img/rock.png' alt='rock' class='img-rounded'>";
	rand_comp_choice();
}

function player_paper () {
	//The function for when the player chooses paper
	player_choice = "paper";
	document.getElementById('user_action').innerHTML = "PAPER <br><img src='img/paper.jpg' alt='paper' class='img-rounded'>";
	rand_comp_choice();
}

function player_scissors () {
	//Function of when the player chooses scissors
	player_choice = "scissors";
	document.getElementById('user_action').innerHTML = "SCISSORS <br><img src='img/scissors.png' alt='scissors' class='img-rounded'>";
	rand_comp_choice();
}

function rand_comp_choice () {
	//Creates a random float anywhere from 0 to 100. It creates a more accurate number than using Math.float for when comparing the number
	var random = Math.random() * 100;
	//Numbers are not set numbers, rather it is a float made through math. It is more accurate to have 1/3 instead of 0.33333333333333 because 1/3 has the most significant numbers based on the language.
	if (random <= 100/3) {
		//Again, the computer's choice is a string rather than a number because it is sent directly to the output.
		comp_choice = "rock";
		document.getElementById('comp_action').innerHTML = "ROCK <br><img src='img/rock.png' alt='rock' class='img-rounded'>";
	}
	else if (random > 100/3 && random <= 200/3) {
		comp_choice = "paper";
		document.getElementById('comp_action').innerHTML = "PAPER <br><img src='img/paper.jpg' alt='paper' class='img-rounded'>";
	}
	else {
		comp_choice = "scissors";
		document.getElementById('comp_action').innerHTML = "SCISSORS <br><img src='img/scissors.png' alt='scissors' class='img-rounded'>";
	}
	//After the computer has it's choice made, the game's calculation begins. 
	game_calc();
}

function game_calc () {
	//Calculates who won, who lost, or if it's a tie.
	//If the player chose the same thing as the computer, it is automatically a tie.
	if (player_choice === comp_choice) {
		ties += 1;
		output_log("tie");
	}
	//When the player chooses rock, it compares if the computer chose paper or scissors. If the computer chose rock, the first if segment would run first and this if segment should not run.
	else if (player_choice === "rock") {
		if (comp_choice === "paper") {
			loss += 1;
			streak = 0;
			output_log("loss");
		}
		else {
			wins += 1;
			streak += 1;
			output_log("win");
		}
	}
	//When the player chooses scissors, it compares rock and paper to return a win or a loss.
	else if (player_choice === "scissors") {
		if (comp_choice === "rock") {
			loss += 1;
			streak = 0;
			output_log("loss");
		}
		else {
			wins += 1;
			streak += 1;
			output_log("win");
		}
	}
	//When the player chooses paper, determines what to do when the computer chooses scissors or rock.
	else if (player_choice === "paper"){
		if (comp_choice === "scissors") {
			loss += 1;
			streak = 0;
			output_log("loss");
		}
		else {
			wins += 1;
			streak += 1;
			output_log("win");
		}
	}
	else {
		//Occurs if all else fails. It should not occur but rather it is something to aid in the development process in case something does go wrong.
		alert("Something is broken, player_choice has failed to give a proper output.");
	}
}

var output_number = 0;
var output = "";
function output_log (victory) {
//This displays the entire log of what happened and what round the actions occured in.
	output_number += 1;
	output += output_number + ".) Player chose " + player_choice + ". Computer chose " + comp_choice + ". Player got a " + victory + ". <br>";
//This outputs the output as well as gives the current wins, losses, ties, and the current win streak.
	document.getElementById('output').innerHTML = output;
	document.getElementById('win_stats').innerHTML = wins;
	document.getElementById('loss_stats').innerHTML = loss;
	document.getElementById('tie_stats').innerHTML = ties;
	document.getElementById('streak_stats').innerHTML = streak;
	//This would detect if a new streak was acquired from the player. If the streak is higher than the highscore (not equals to), then the highscore changes to a higher number (the streak).
	if (streak > highscore) {
		highscore = streak;
		document.getElementById('highscore_stats').innerHTML = highscore;
	}
}