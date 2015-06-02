var playerChoice;     // 
var computerChoice;    //  This is where I declare all of the variables that I will use later in the code
var computerResponse;   //
var text = "";         //


document.getElementById('buttonRock').addEventListener('click', function() {  // adds a function that when rock picture is clicked the user's choice is set to 1 
	 playerChoice = 1;
	 console.log(playerChoice);  
	 computerPick();    // runs the function that determines the computer's choice for rock paper scissors
	 document.getElementById('userPick').innerHTML = "<img class='img-responsive img-rounded' src='http://blog.wppionline.com/wp-content/uploads/2014/01/Rock-Camera-1.jpg'>";  // puts a picture of a rock in the area of the html called user choice
});



document.getElementById('buttonPaper').addEventListener('click', function() { 
	 playerChoice = 2;
	 console.log(playerChoice);
	 computerPick();
	 document.getElementById('userPick').innerHTML = "<img class='img-responsive img-rounded' src='https://cdn.tutsplus.com/craft/uploads/2013/11/14-snowflakes-lay-paper-copy.jpg'>";
});


document.getElementById('buttonScissors').addEventListener('click', function() { 
	 playerChoice = 3;
	 console.log(playerChoice);
	 computerPick();
	 document.getElementById('userPick').innerHTML = "<img class='img-responsive img-rounded' src='http://wp.production.patheos.com/blogs/lovejoyfeminism/files/2013/08/Small_pair_of_blue_scissors.jpg'>";
});

function number (computerPick) {
	if (computerPick <= 33) {  // if the number is less than 33 the computer chose rock and this image appears under computer choice in the html
	computerResponse = 1;
	document.getElementById('compPic').innerHTML = "<img class='img-responsive img-rounded' src='http://blog.wppionline.com/wp-content/uploads/2014/01/Rock-Camera-1.jpg'>";
	}
	
	else if(computerPick <= 66) {  // if the number is less than 66 the computer chooses paper and the paper image appears under the computer choice in the html
	computerResponse = 2;
	document.getElementById('compPic').innerHTML = "<img class='img-responsive img-rounded' src='https://cdn.tutsplus.com/craft/uploads/2013/11/14-snowflakes-lay-paper-copy.jpg'>";
	}

	else {  
	computerResponse = 3;       // if the number doesn't fall under the other two categories, the computer chooses scissors and the image of scissors appears under the computer choice in the html
	document.getElementById('compPic').innerHTML = "<img class='img-responsive img-rounded' src='http://wp.production.patheos.com/blogs/lovejoyfeminism/files/2013/08/Small_pair_of_blue_scissors.jpg'>";
	}
	console.log(computerResponse)

	result();    // runs function "result"
};


function computerPick (){
	var computerPick = Math.floor(Math.random()* 100);		// multiplies the random decimal by one hundred so that it becomes a number between one and one hundred
	
	console.log(computerPick)    //////////////////////////////////////
	number(computerPick);        // runs function computerPick after this function is completed
};

function result (){     // this fumction compares the two choices and declares a winner, loser, or tie depending on what choices the user and computer made
	if (playerChoice === computerResponse) {   // for whenever the user and computer pick the same thing the result is a tie
		text = "Tie";
	}
	else if (playerChoice === 1 && computerResponse === 2) {   //
		text = "You lose...";
	}
	else if (playerChoice === 1 && computerResponse === 3) {   //
		text ="You win!";
	}																	// All of these compare the result and print the result into the html
	else if (playerChoice === 2 && computerResponse === 1) {   //
		text = "You win!";
	}
	else if (playerChoice === 2 && computerResponse === 3) {    //
		text = "You lose...";
	}
	else if (playerChoice === 3 && computerResponse === 1) {    //
		text = "You lose...";
	}
	else  {
		text = "You win!";
	}
	document.getElementById('gameResult').innerHTML = text;          // prints the result into the html using the id "gameResult"
	
	
};













