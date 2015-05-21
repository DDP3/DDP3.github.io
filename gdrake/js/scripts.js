var userChoice = 0; //for these choices, 1 = rox 2 = papes 3 = scizz
var computerChoice = 0;
var nWins = 0; //keeps track of the score
var nLosses = 0;
var nTies = 0;
var userChoiceArray = ["ROCK", "PAPER", "SCISSORS"]; //converts # to words for printout
var userPictureArray = [' <img src="images/rock.jpg">',' <img src="images/paper.jpg">',' <img src="images/scissors.jpg">']; //holds the pictures corresponding to the stuff

function setUserChoiceRock(){
	userChoice = 1; //sets the user choice to rock
	outputChoice();
	determineComputerChoice();
}

function setUserChoicePaper(){
	userChoice = 2; //sets to paper
	outputChoice();
	determineComputerChoice();
}

function setUserChoiceScissors(){
	userChoice = 3; //sets to scissors
	outputChoice();
	determineComputerChoice();
} //all these trigger the user output and starts up the computer

function determineComputerChoice(){
	var rando = Math.random(); //when this runs, it sets a variable that is a random number
	console.log("randomNumber: "+rando);
	if (rando < .33){ // if it's less than .33 they get rock
		computerChoice = 1;
	}else if(rando < .66){ //if it's less than .66 they're scissors
		computerChoice = 2;
	}else{
		computerChoice = 3; //the computer is weighted by .01 to choose paper.
	}
	outputComputerChoice(); //outputs the computer choice
	determineWinner(); //triggers the comparison
}

function outputChoice(){
	document.getElementById("yourChoice").innerHTML = "You chose "+userChoiceArray[(userChoice - 1)]+userPictureArray[(userChoice-1)]; //uses the choice array to place your choice in thar
	console.log("userChoice: "+userChoice+" "+userChoiceArray[(userChoice-1)]);
}

function outputComputerChoice(){
	document.getElementById("compChoice").innerHTML = "The computer chose "+userChoiceArray[(computerChoice - 1)]+userPictureArray[(computerChoice-1)]; //same deal, but for the computer's choice
	console.log("computerChoice: "+computerChoice+" "+userChoiceArray[(computerChoice-1)]);
}

function determineWinner(){ //this monster if/else statement compares all the possible matchups
	if (userChoice === computerChoice){
		document.getElementById("result").innerHTML = "The match is a tie!";
		nTies += 1; //based on wins, losses, or ties, it updates the scoreboard variables
		console.log("user = computer, tie");
	}else if (userChoice === 1 && computerChoice === 2 ){
		document.getElementById("result").innerHTML = "You lose!";
		nLosses += 1;
		console.log("paper beats rock, lose");
	}else if (userChoice === 1 && computerChoice === 3){
		document.getElementById("result").innerHTML = "You win!";
		nWins +=1;
		console.log("rock beats scissors, win");
	}else if (userChoice === 2 && computerChoice === 1 ){
		document.getElementById("result").innerHTML = "You win!";
		nWins +=1;
		console.log("paper beats rock, win");
	}else if (userChoice === 2 && computerChoice === 3) {
		document.getElementById("result").innerHTML = "You lose!";
		nLosses +=1;
		console.log("scissors beats paper, lose");
	}else if (userChoice === 3 && computerChoice === 1){
		document.getElementById("result").innerHTML = "You lose!";
		nLosses +=1;
		console.log("rock beats scissors, lose");
	}else if (userChoice === 3 && computerChoice === 2){
		document.getElementById("result").innerHTML = "You win!";
		nWins +=1;
		console.log("rock beats scissors, win");
	}else{
		document.getElementById("result").innerHTML = "You CHEATED!!";
	} 
	updateScoreboard(); //triggers an update, post-comparison
}

function updateScoreboard(){ //changes scoreboard sentences to match the new w/l/t
	document.getElementById("wins").innerHTML = "WIN: "+nWins;
	document.getElementById("losses").innerHTML = "LOSE: "+nLosses;
	document.getElementById("ties").innerHTML = "TIE: "+nTies; 
	updateWinStatus();
	console.log("w: "+nWins+" l: "+nLosses+" t: "+nTies);
}

function updateWinStatus(){
	if (nLosses > nWins){ //if you're losing more than you're winning
		document.getElementById("overallWinner").innerHTML = "<img src=\"images/losing.png\" class=\"img-responsive\">"; //a thumbso down
		console.log("winningOverall");
	}else{
		document.getElementById("overallWinner").innerHTML = "<img src=\"images/winning.png\" class=\"img-responsive\">"; //a thumbso up otherwise!
		console.log("losingOverall");
	}
}

//adds event listeners for the buttons IF it's the right page for that sort of thing.

if(document.getElementById("cRock")){ //if this doesn't exist, you're on the form page. form scripts will run instead.

document.getElementById("cRock").addEventListener("click", setUserChoiceRock);
document.getElementById("cPaper").addEventListener("click", setUserChoicePaper);
document.getElementById("cScissors").addEventListener("click", setUserChoiceScissors);

}
//////////////***** FORM FUN ******////////////////////////////

var form = document.forms.agentForm;

if(document.forms.agentForm){

form.addEventListener("submit", outputForm, false);

}

function outputForm(event){
	event.preventDefault();

	var agent = {
		name: form.name.value,
		email: form.email.value,
		agentID: form.agentID.value,
		type: form.agentType.value,
		bio: form.bio.value
	}

	var jobs = []

	for(i=0;i<form.workHistory.length;i++){
		if(form.workHistory[i].checked){
			jobs.push(form.workHistory[i].value);
		}
	}

	var html ="<h2>Your application has been submitted!</h2><h3>Review details below.</h3><br>";
	if (agent.name){
		html += "<p>Your name is: "+agent.name+"<br>";
	}else{
		html += "<p>You didn't give us your name. It might be hard to find you.<br>";
	}
	if (agent.email){
		html +="Your e-mail is: "+agent.email+"<br>";
	}else{
		html +="You have no e-mail.<br>";
	}

	if (jobs.length > 0){
		///////////////////////////////////////////////
		var miniHtml = "You've worked at...<ul>";
		for(i=0;i<jobs.length;i++){
			miniHtml += "<li>"+jobs[i]+"</li>";
		}
		miniHtml +="</ul>";
		html += miniHtml;
		//////////////////////////////////////////////
	}else{
		html +="You have no work experience.<br>";
	}
	if (agent.agentID){
		html +="Your agent ID is: "+agent.agentID+"<br>";
	}else{
		html +="You don't have an agent ID.<br>";
	}
	html +="Your style of secret agenting is: "+agent.type+"<br>";
	if (agent.bio){
		html +="Here's your bio: <br> "+agent.bio+"</p>";
	}else{
		html +="You didn't give us a bio. </p>";
	}

	document.getElementById("applicationOutput").innerHTML = html;

}




