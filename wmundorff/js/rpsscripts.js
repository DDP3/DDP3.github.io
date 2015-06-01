//This defines most of the variables I will be using later on. They will help the computer decides who 'wins' and what will happen afterwards.
var win;
var lose;
var results = document.getElementById('results');
//These are the rock paper and scissors variables, which I will assign values to to make them make sense.
var r = "rock";
var p = "paper";
var s = "scissors";
//this variable function will decide the winning, losing or tying.
var Choice = function(win, lose, tie, picture){
	this.wins = win;
	this.ties = tie;
	this.loses = lose;
	this.picture = picture;
};
//These images are what will be displayed when you load the page.
var rockImg = "<img src= 'pictures/rock.jpg'>";
var paperImg = "<img src = 'pictures/paper.jpg'>";
var scissorsImg = "<img src = 'pictures/scissors.jpg'>";

var rock = new Choice(s, r, p, rockImg);
var paper = new Choice(r, p, s, paperImg);
var scissors = new Choice(p, s, r, scissorsImg);

var choices = [rock, paper, scissors];
//This is what assigns a number to your opponents choice, which will help it deicde whether you won lost or tied.
function compChoice(){
	return choices[Math.floor(Math.random() * 3)];
}
//This logs the computer response and will also display a picture of whatever they got.
var compResponse = document.getElementById('compResponse');

function match(playerDecision){
	var computerChoice = compChoice();
	compResponse.innerHTML = computerChoice.picture;
//These determine what the response will be when you either win, lose, or tie.
	switch(playerDecision) {
		case computerChoice.wins:
			console.log("You lost...");
			lose++;
			results.innerHTML = 'You Lost...';
			break;
		case computerChoice.ties:
			console.log("You tied");
			results.innerHTML = 'You Tied';
			break;
		case computerChoice.loses:
			console.log("You won!");
			win++;
			results.innerHTML = 'You Won!'
			break;
		default:
			console.log("not valid");
			break;
	}
}

//This is what identifies that you chose paper, rock, or scissors when you click a specific image.
document.getElementById("playerRock").addEventListener("click", function() {
	match("rock");
});

document.getElementById("playerPaper").addEventListener("click", function(){
	match("paper");

});

document.getElementById("playerScissors").addEventListener("click", function(){
	match("scissors");
});











