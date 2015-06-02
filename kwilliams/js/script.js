var userChoice;

var compChoice;

var randomNum;



function rockPlayer() {

	userChoice = 1; // rock equals 1 in this case

	randomNumber();
}


function paperPlayer() {

	userChoice = 2; // paper equals 2 in this case

	randomNumber();
}


function scissorsPlayer() {

	userChoice = 3 // scissors equals 3 in this case

	randomNumber();
}


function randomNumber() {
	randomNum = Math.floor(Math.random()*100);

	computerChoice();
}

function computerChoice() {

	if (randomNum <= 33) {
		compChoice = 1; // Computer chooses Rock

	} else if (randomNum <= 66) {

		compChoice = 2; // Computer chooses Paper
	} else if (randomNum <= 100) {

		compChoice = 3; // Computer chooses Scissors
	};

	compare();
}


function compare() {

	if (userChoice === compChoice) {
		alert("It is a tie!");
		alert("Refresh to start again!");

	} else if (userChoice === 1 && compChoice === 2) {
		alert("The computer chooses paper and wins!")

	} else if (userChoice === 1 && compChoice === 3) {
		alert("Rock beates scissors! You win!")

	} else if (userChoice === 2 && compChoice === 1) {
		alert("You win!");

	} else if (userChoice === 2 && compChoice === 3) {
		alert("You lose!");

	} else if (userChoice === 3 && compChoice === 1) {
		alert("You lose!");

	} else if (userChoice === 3 && compChoice === 2) {
		alert("You win!");
	}
	
}

// This determines if the computer wins, the player wins,
// or if there is a tie.
//
///
////
///
///
//
//
//


var form = document.forms.form;

form.addEventListener("submit", displayPerson, false);





function displayPerson (event) {

	event.preventDefault();

	var Person = {
		name: form.username.value,
		age: form.userAge.value,
	};

	var l = [];

	//Iterate through all the limbs

	for(i = 0; i < form.userAnswer.length; i++) {

		//If it is checked, push the value into the array. Note my syntax.

		if(form.userAnswer[i].checked) {
			l.push(form.userAnswer[i].value);
		}

	}

	//Finally, push the l array into the Person object.

	Person.userAnswer = l;

	//This is all the html. You can see how I'm calling all the data. I'm just splicing it into the string.
	//There are better ways to do this with Object Oriented Code but that's more complex than we need it to be
	//and I'm also coding this at 11:30 at night.



	var html = "<p> You said that your name is: " + Person.name + "<br>You said that you are: " + Person.age + " years old.</p>" + "<p>You also said you would be...." + Person.userAnswer.join(", ") + "</p>";

	document.getElementById("displayText").innerHTML = html;


}






