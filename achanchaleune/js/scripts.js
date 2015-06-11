///Form Results
var form = document.forms.questions;
////only starts to listen when form button is clicked so that there isn't an undefined variable that messes up other javascript code
function buttonClicked() {
	form.addEventListener("submit", finished, false);
}
function finished(event) {
	event.preventDefault();
	var user = {
		name: form.fullName.value,
		ssn: form.socialSecurity.value,
		blood: form.bloodOptions.value,
		income: form.incomes.value,
		donate: form.exampleInputAmount.value,


	}
	var text= "<div class='text-center'><p>Your name is " + user.name + ".</p><p>Your SSN is " + user.ssn + ".</p><p>You are " + user.blood + ".</p><p>You make " + user.income + ".</p><p>I am getting $" + user.donate + " and any other revelant information.</p></div>" ;
	document.getElementById("result").innerHTML = text;
}



///Modal
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})

//navbar
$('#topnavbar').affix({
    offset: {
        top: $('#banner').height()
    }   
});



//     Rock Paper Scissor Scripts
var pChoice; // sets the variable for the players choice
var NPChoice; // sets the variable for the computers choice
var rand; //sets the variable for the random number
var NPCWinumb = 0;
var pWinumb = 0;

function pRock() {
	pChoice = 1; // sets the player's choice to rock or 1
	document.getElementById("pPic").src="Final Project/../pictures/rock.png"; //sets the source of the picture
	document.getElementById("pChose").innerHTML="You chose rock"; // states what player chose
	rand(); //runs the random script
	console.log("User picks Rock"); 
}

function pPaper() {
	pChoice = 2; //paper 
	document.getElementById("pPic").src="Final Project/../pictures/paper.png";
	document.getElementById("pChose").innerHTML="You chose paper";
	rand();
	console.log("User picks Paper");
}

function pScissor() { 
	pChoice = 3; // scissors
	document.getElementById("pPic").src="Final Project/../pictures/scissor.png";
	document.getElementById("pChose").innerHTML="You chose scissors";
	rand();
	console.log("User picks Paper");
}


function rand() {
	randVal = Math.random(); //sets the variable "randVal" to be equal a random number 0-1
	NPChoose(); //runs the funtion 
}

function NPChoose() {
	if (randVal<= 0.33) { 	//if randVal is less than or equal to .33, then comp chooses rock
		NPChoice=1; 		//1 is equal to rock for NPC
		document.getElementById("NPCPic").src="Final Project/../pictures/rock.png"; //changes picture
		document.getElementById("NPChose").innerHTML="Computer chose rock"; //states what computer chose
		console.log("Computer chose Rock");
	} else if (randVal<=0.66) { 		//less than .66 chooses paper
		NPChoice=2;
		document.getElementById("NPCPic").src="Final Project/../pictures/paper.png"; 
		document.getElementById("NPChose").innerHTML="Computer chose paper";
		console.log("Computer chose Paper");
	} else if (randVal<=1) {		//between 1 and .66 chooses scissors
		NPChoice=3;
		document.getElementById("NPCPic").src="Final Project/../pictures/scissor.png";
		document.getElementById("NPChose").innerHTML="Computer chose scissors";
		console.log("Computer chose Paper");
	}
	compare(); ///starts the compare function
}

function compare() { //basically compares the values of pChoice and NPChoice and if the number is matched with a number in accordance to the rules of rock, paper, scissors, then it changes the HTML to state which person wins
	if (pChoice===NPChoice) {
		document.getElementById("NPCWin").innerHTML="Tie";
		document.getElementById("pWin").innerHTML="Tie";
		console.log("Tie");
		console.log("Computer Wins " + NPCWinumb);
		console.log("Player Wins " + pWinumb);
	} else if (pChoice===1 && NPChoice===2) { //if player chooses rock and npc chose paper, player wins
		document.getElementById("pWin").innerHTML="Player Loses";
		document.getElementById("NPCWin").innerHTML="Computer Wins";
		NPCWinumb++;
		document.getElementById("computerWins").innerHTML= "Computer Wins: " + NPCWinumb;  ///updates computer wins in html
		console.log("Computer Wins " + NPCWinumb);
		console.log("Player Wins " + pWinumb);
		console.log("Lose");
	} else if (pChoice===1 && NPChoice===3) {
		document.getElementById("pWin").innerHTML="Player Wins";
		document.getElementById("NPCWin").innerHTML="Computer Loses";
		pWinumb++;
		document.getElementById("playerWins").innerHTML= "Player Wins: " + pWinumb;  ///updates player wins in html   
		console.log("Computer Wins " + NPCWinumb);
		console.log("Player Wins " + pWinumb);
		console.log("Win");
	} else if (pChoice===2 && NPChoice===1) {
		document.getElementById("pWin").innerHTML="Player Wins";
		document.getElementById("NPCWin").innerHTML="Computer Loses";
		pWinumb++;
		document.getElementById("playerWins").innerHTML= "Player Wins: " + pWinumb;
		console.log("Computer Wins " + NPCWinumb);
		console.log("Player Wins " + pWinumb);
		console.log("Win");
	} else if (pChoice===2 && NPChoice===3) {
		document.getElementById("NPCWin").innerHTML="Computer Wins";
		document.getElementById("pWin").innerHTML="Player Loses";
		NPCWinumb++;
		document.getElementById("computerWins").innerHTML= "Computer Wins: " + NPCWinumb;
		console.log("Computer Wins " + NPCWinumb);
		console.log("Player Wins " + pWinumb);
		console.log("Lose");
	} else if (pChoice===3 && NPChoice===1) {
		document.getElementById("NPCWin").innerHTML="Computer Wins";
		document.getElementById("pWin").innerHTML="Player Loses";
		NPCWinumb++;
		document.getElementById("computerWins").innerHTML= "Computer Wins: " + NPCWinumb;
		console.log("Computer Wins " + NPCWinumb);
		console.log("Player Wins " + pWinumb);
		console.log("Lose");
	} else if (pChoice===3 && NPChoice===2) {
		document.getElementById("pWin").innerHTML="Player Wins";
		document.getElementById("NPCWin").innerHTML="Computer Loses";
		pWinumb++;
		document.getElementById("playerWins").innerHTML= "Player Wins: " + pWinumb;
		console.log("Computer Wins " + NPCWinumb);
		console.log("Player Wins " + pWinumb);
		console.log("Win");
	}
}

