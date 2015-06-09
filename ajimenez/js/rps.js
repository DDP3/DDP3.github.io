var userChoice;
var compChoice;
var randomNum;


function playerRock() {

	userChoice = 1; // Rock is 1

	randomNumber();
}

function playerPaper() {

	userChoice = 2; //Paper is 2

	randomNumber();
}

function playerScissors() {
	userChoice = 3; //Scissors (or sword in this case) is 3

	randomNumber();
}

function randomNumber() { //Makes the computer choose randomly)
	randomNum = Math.floor(Math.random()*100);

	computerChoice();
}

function computerChoice() {

	if (randomNum <= 33) {
		compChoice = 1; 

	} else if (randomNum <= 66) {

		compChoice = 2;
	} else if (randomNum <= 100) {

		compChoice = 3; 
	};

	compare();
}

//The following compares player choices with computer choices to determine a result.

function compare() {

	if (userChoice === compChoice) {
		 document.getElementById("result").innerHTML=
	"<img class='img-responsive' src = 'https://budoreview.files.wordpress.com/2010/12/bow.gif' alt='bow'>"
		alert("You chose the same item as your opponent. Bow and move on.");
//If the player choice is the same as the computer choice, the answer will result in a draw.
	   
	} else if (userChoice === 1 && compChoice === 2) {
		 document.getElementById("result").innerHTML=
	"<img class='img-responsive'src = 'https://i0.wp.com/imagizer.imageshack.us/v2/640x480q90/911/X27VM1.jpg' alt='brokensword'>"

		alert("Your rock is suffocated by paper cranes. You lose!");
//If the player picks rock and the computer picks paper, the player would lose.
		

	} else if (userChoice === 1 && compChoice === 3) {
		 document.getElementById("result").innerHTML=
	"<img class='img-responsive' src = 'http://media.liveauctiongroup.net/i/10800/11314341_1.jpg?v=8CE5E63F1D61110' alt='brokensword'>"

		alert("Your rock blocks a sword and breaks its blade! You win!");
//If the player chooses rock and the computer chooses sword, the player would win.
		
	} else if (userChoice === 2 && compChoice === 1) {
		 document.getElementById("result").innerHTML=
	"<img class='img-responsive' src = 'https://i0.wp.com/imagizer.imageshack.us/v2/640x480q90/911/X27VM1.jpg' alt='paperCranes'>"

		alert("Your paper cranes flock a rock. You win!");
//If the player chooses paper and the computer chooses rock, the player would win.

	} else if (userChoice === 2 && compChoice === 3) {
		 document.getElementById("result").innerHTML=
	"<img class='img-responsive' src = 'http://media-cache-ec0.pinimg.com/736x/22/1f/55/221f556358d924377db34a3cb3575215.jpg' alt='shredded'>"

		alert("Your paper cranes get shredded by your opponent's sword! You lose!");
//If the player chooses paper and the computer chooses sword, the player would lose.
		
		
	} else if (userChoice === 3 && compChoice === 2) {
		 document.getElementById("result").innerHTML=
	"<img class='img-responsive' src = 'http://media-cache-ec0.pinimg.com/736x/22/1f/55/221f556358d924377db34a3cb3575215.jpg' alt='shredded'>"

		alert("You use the sword to shred your opponent's paper cranes! You win!");
//If the player chooses sword and the computer chooses paper, the player would win.
	}
	
}

//http://media.liveauctiongroup.net/i/10800/11314341_1.jpg?v=8CE5E63F1D61110
//https://i0.wp.com/imagizer.imageshack.us/v2/640x480q90/911/X27VM1.jpg
//http://media-cache-ec0.pinimg.com/736x/22/1f/55/221f556358d924377db34a3cb3575215.jpg