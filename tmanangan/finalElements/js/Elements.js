var userChoice;
var computerChoice;
var randomNum;

function playerEarth() {
	userChoice = 1; //earth means 1
	randomNumber();
}

function playerFire() {
	userChoice = 2; //Fire means 2
	randomNumber();
}
function playerWater() {
	userChoice = 3; //Water means 3
	randomNumber();
}

function randomNumber() {
	randomNum = Math.floor(Math.random()*100);
	compChoice();//makes computer choose a randome # bitween o and 100
}

function compChoice() {
	if (randomNum <= 33){
		computerChoice = 1; //computerChoice is 1
	} else if (randomNum <= 66){
		computerChoice = 2; //computerChoice is 2
	} else if(randomNum <= 100){
		computerChoice = 3; //computerChoice is 3
	};
	compare();
}

function compare() {
	if (userChoice === computerChoice) {
		alert("It is a tie!");

	} else if (userChoice === 1 && computerChoice === 2) {
		alert("Computer chooses fire and berns your earth!");

	} else if (userChoice === 1 && computerChoice === 3) {
		alert("You chose earth and stoped Computers water!");

	} else if (userChoice === 2 && computerChoice === 1) {
		alert("You chose fire and scorched Computers earth!");

	} else if (userChoice === 2 && computerChoice === 3) {
		alert("Computer chooses water to extinguish your fire!");

	} else if (userChoice === 3 && computerChoice === 1) {
		alert("Computer chose earth to absorb your water!");

	} else if (userChoice === 3 && computerChoice === 2) {
		alert("You have used water to extinguish computers fire!");

	}
}