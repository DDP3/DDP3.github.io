var playerPick;
var computerPick;

function rock() {
	playerPick = 1
	computerPick = Math.random()

	if (computerPick < .33334 ){
		computerPick = 1;
		document.getElementById('compChoice').innerHTML ="Rock";
	}

	else if ( computerPick < .666667 ) {
		computerPick = 2;
		document.getElementById('compChoice').innerHTML ="Paper";
	}

	else{  
		computerPick = 3;
		document.getElementById('compChoice').innerHTML ="Scissors";
	}

console.log("computerPick");
console.log(computerPick);
console.log("playerPick R ");
console.log(playerPick);

	if (computerPick === playerPick){
		console.log("tie")
		document.getElementById('compResponse').innerHTML ="Tie";
	};

	if (computerPick === 2 ){
		console.log("You Lose")
		document.getElementById('compResponse').innerHTML ="You Lose";
	};

	if(computerPick === 3) {
		console.log("You Win")
		document.getElementById('compResponse').innerHTML ="You Win";
	};
}



function paper(){
	playerPick = 2;	
	computerPick = Math.random()

	if (computerPick < .33334 ){
		computerPick = 1;
		document.getElementById('compChoice').innerHTML ="Rock";
	}

	else if ( computerPick < .666667 ) {
		computerPick = 2;
		document.getElementById('compChoice').innerHTML ="Paper";
	}

	else{  
		computerPick = 3;
		document.getElementById('compChoice').innerHTML ="Scissors";
	}

console.log("computerPick");
console.log(computerPick);
console.log("playerPick P ");
console.log(playerPick);

	if (computerPick === playerPick){
		console.log("tie")
		document.getElementById('compResponse').innerHTML ="Tie";
	};

	if (computerPick === 3 ){
		console.log("You Lose")
		document.getElementById('compResponse').innerHTML ="You Lose";
	};

	if(computerPick === 1) {
		console.log("You Win")
		document.getElementById('compResponse').innerHTML ="You Win";
	};
}

function scissors(){
	playerPick = 3;	
	computerPick = Math.random()

	if (computerPick < .33334 ){
		computerPick = 1;
		document.getElementById('compChoice').innerHTML ="Rock";
	}

	else if ( computerPick < .666667 ) {
		computerPick = 2;
		document.getElementById('compChoice').innerHTML ="Paper";
	}

	else{  
		computerPick = 3;
		document.getElementById('compChoice').innerHTML ="Scissors";
	}

console.log("computerPick");
console.log(computerPick);
console.log("playerPick S ");
console.log(playerPick);

	if (computerPick === playerPick){
		console.log("tie")
		document.getElementById('compResponse').innerHTML ="Tie";
	};

	if (computerPick === 1 ){
		console.log("You Lose")
		document.getElementById('compResponse').innerHTML ="You Lose";
	};

	if(computerPick === 2) {
		console.log("You Win")
		document.getElementById('compResponse').innerHTML ="You Win";
	};
}











