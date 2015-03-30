//////////////////////////////////////////////////////////
// Created by Austin Goodrich
// Used for FHS Digital Design & Computer Coding Class
// http://github.com/austingoodrich/RockPaperScissors
//////////////////////////////////////////////////////////

// Define our Variables
// Set Defined Variable, randomNumber
var randomNumber = 0;
// Set Undefined Variable, playerChoice
// playerChoice, 0 = None, 1 = Rock, 2 = Paper, 3 = Scissors
var playerChoice;
// Set Undefined Variable, computerChoice
// computerChoice, 0 = None, 1 = Rock, 2 = Paper, 3 = Scissors
var computerChoice;
// Set Defined Variable, Score
var score = 0;

//When player picks Rock, run this function
function playerRock(){
		//Set The Image & Text
		document.getElementById("player").innerHTML = "<h3>Rock</h3><img src='img/rock.png'>"
		//Set playerChoice variable to Rock
		playerChoice = 1;
	// Run Computer's Turn, Randomize
	randomize();
}

//When player picks Paper, run this function
function playerPaper(){
		//Set The Image & Text
		document.getElementById("player").innerHTML = "<h3>Paper</h3><img src='img/paper.png'>"
		//Set playerChoice variable to Paper
		playerChoice = 2;
	// Run Computer's Turn, Randomize
	randomize();
}

//When player picks Scissors, run this function
function playerScissors(){
		//Set The Image & Text
		document.getElementById("player").innerHTML = "<h3>Scissors</h3><img src='img/scissors.png'>"
		//Set playerChoice variable to Scissors
		playerChoice = 3;
	// Run Computer's Turn, Randomize
	randomize();
}

// Create a Function to randomize the number, so we don't have to repetitively do it.
function randomize(){
	// Set predefined variable to a new number between 0 - 100.
	// Math.random() automatically does a range from 0.0 - 1.0, 
	// Multiply it by 100 and you'll get a number above 1.0, using 
	// Math.floor(Math.random() * 100) will round it and give you a whole number
	randomNumber = Math.floor(Math.random() * 100);
	// Log number in to console.
	console.log(randomNumber);
	// Run Computer If, else if statements.
	computer();
}

function computer(){
	//If the Number is 'Less Than' or 'Equal to' "<=" to 33. 
	// 0 - 33 numbers are Rock.
 	if(randomNumber <= 33){
		//Rock
		console.log('Rock.');
		document.getElementById("computer").innerHTML = "<h3>Rock</h3><img src='img/rock.png'>"
		computerChoice = 1;
	} 
	// If it isn't 'Less Than' 33, is it 'Less Than' or 'Equal to' "<=" to 66
	// 34 - 66 numbers are Papers
	else if (randomNumber <= 66){
		//Paper
			console.log('Paper.');
			document.getElementById("computer").innerHTML = "<h3>Paper</h3><img src='img/paper.png'>"
			computerChoice = 2;
	} 
	// If it isn't 'Less Than' 66, is it 'Less Than' or 'Equal to' "<=" to 100
	// 66 - 100 numbers are Scissors
	else if (randomNumber <= 100){
		//Scissors
			console.log('Scissors.');
			document.getElementById("computer").innerHTML = "<h3>Scissors</h3><img src='img/scissors.png'>"
			computerChoice = 3;
	}
	// Run the Game
	playGame();
}

function playGame(){
	// If Player Choice is the same as Computer Choice.
	if(playerChoice == computerChoice){
		// Place Text of the Winner.
		document.getElementById("winner").innerHTML = "Tie";
		console.log("Tie");
	}
	// If Player Choice is Rock & Computer Choice is Paper
	if(playerChoice == 1 && computerChoice == 2){
		// Place Text of the Winner.
		document.getElementById("winner").innerHTML = "Computer Wins";
		console.log("Computer Wins");
	}
	// If Player Choice is Rock & Computer Choice is Scissors
	if(playerChoice == 1 && computerChoice == 3){
		// Place Text of the Winner.
		document.getElementById("winner").innerHTML = "Player Wins";
		console.log("Player Wins");
		// Add ONE to score.
		score++;
		// Place Score Text
		document.getElementById("score").innerHTML = "Times Won: " + score;
	}
	// If Player Choice is Paper & Computer Choice is Rock
	if(playerChoice == 2 && computerChoice == 1){
		// Place Text of the Winner.
		document.getElementById("winner").innerHTML = "Player Wins";
		console.log("Player Wins");
		// Add ONE to score.
		score++;
		// Place Score Text
		document.getElementById("score").innerHTML = "Times Won: " + score;
	}
	// If Player Choice is Paper & Computer Choice is Scissors
	if(playerChoice == 2 && computerChoice == 3){
		// Place Text of the Winner.
		document.getElementById("winner").innerHTML = "Computer Wins";
		console.log("Computer Wins");
	}
	// If Player Choice is Scissors & Computer Choice is Paper
	if(playerChoice == 3 && computerChoice == 2){ 
		// Place Text of the Winner.
		document.getElementById("winner").innerHTML = "Player Wins";
		console.log("Player Wins");
		// Add ONE to score.
		score++;
		// Place Score Text
		document.getElementById("score").innerHTML = "Times Won: " + score;
	}
	// If Player Choice is Scissors & Computer Choice is Rock
	if(playerChoice == 3 && computerChoice == 1){
		// Place Text of the Winner.
		document.getElementById("winner").innerHTML = "Computer Wins";
		console.log("Computer Wins");
	}

}