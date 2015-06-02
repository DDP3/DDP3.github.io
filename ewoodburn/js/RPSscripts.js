//ROCK PAPER SCISSORS JS

var playerChoice;
var computerChoice;    //Declaring the variables here (will use them later)
var randomNumber = 0;

//When the player chooses rock, then it gives it a number and runs the function randomize
function playerRock() {
	playerChoice = 1;
	randomize();
}
document.getElementById('buttonRock').addEventListener('click', playerRock); 

//Same thing as above, but slightly different (paper w/ 2)
function playerPaper() {
	playerChoice = 2;
	randomize();
}
document.getElementById('buttonPaper').addEventListener('click', playerPaper);

//Same thing as above, but slightly different (scissors w/ 3)
function playerScissors() {
	playerChoice = 3
	randomize();
}
document.getElementById('buttonScissors').addEventListener('click', playerScissors);

//Makes the computer choice random because of a random number, also runs the function "computer"
function randomize(){
	randomNumber = Math.floor(Math.random()* 100);
	computer();
	console.log(randomNumber);
}

//Gives the computer a number when the random number is generated (then later this number can compete against the number that was assigned to the player's choice earlier)
function computer(){
	if (randomNumber <= 33){
		computerChoice = 1;
	}

	else if (randomNumber <= 66){
		computerChoice = 2;
	}

	else {
		computerChoice = 3;
	}

	playGame();
}


//This whole thing compares the computer's number to the player's number and decides who wins. An image of a thumbs up, thumbs down, or an equal sign will appear in the html if the player wins, loses, or ties. Also, some text will appear explaining the results.
function playGame(){

	if (playerChoice == computerChoice){
		document.getElementById("winner").innerHTML = '<h4>Tie</h4> <p><img src="equal.jpg" class="center-block img-responsive"></p>';
	}
 
	else if (playerChoice == 1 && computerChoice == 2){
		document.getElementById("winner").innerHTML = '<h4>Computer chooses paper. You lose.</h4> <p><img src="thumbsDown.jpg" class="center-block img-responsive"></p>';
	}

	else if (playerChoice == 1 && computerChoice == 3){
		document.getElementById("winner").innerHTML = '<h4>Computer chooses scissors. You win!</h4> <p><img src="thumbsUp.jpg" class="center-block img-responsive"></p>';
	}

	else if (playerChoice == 2 && computerChoice == 3){
		document.getElementById("winner").innerHTML = '<h4>Computer chooses scissors. You lose.</h4> <p><img src="thumbsDown.jpg" class="center-block img-responsive"></p>';
	}

	else if (playerChoice == 2 && computerChoice == 1){
		document.getElementById("winner").innerHTML = '<h4>Computer chooses paper. You win!</h4> <p><img src="thumbsUp.jpg" class="center-block img-responsive"></p>';
	}

	else if (playerChoice == 3 && computerChoice == 1){
		document.getElementById("winner").innerHTML = '<h4>Computer chooses rock. You lose.</h4> <p><img src="thumbsDown.jpg" class="center-block img-responsive"></p>';
	}

	else {
		document.getElementById("winner").innerHTML = '<h4>Computer chooses rock. You win!</h4> <p><img src="thumbsUp.jpg" class="center-block img-responsive"></p>';
	}
	
}

