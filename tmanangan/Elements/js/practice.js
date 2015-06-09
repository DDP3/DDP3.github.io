var player;
var choose = function(choice){
	player=choice;
}
var computerChoice = math.random();
if (computerChoice<0.34){
	computerChoice= "fire";
}
else if (computerChoice<0.67){
	computerChoice="water"
}
else {
	computerChoice="earth"
}
var compare= function(choice1,choice2){
	if (choice1 === choice2)
		document.getElementById("result").innerHTML = "Tie!";	
	}
	else if(choice1==="fire" && choice2==="earth"){
			document.getElementById("result").innerHTML = "You Win!";
		}	
	}
		else {
			document.getElementById("result").innerHTML = "You Lost!";
		}
	else if(choice1==="water" && choice2==="fire"){
			document.getElementById("result").innerHTML = "You Win!";
		}
		else if(choice2==="earth"){
			document.getElementById("result").innerHTML = "You Lost!";
		}
	}
	else if(choice1==="earth" && choice2==="water"){
			document.getElementById("result").innerHTML = "You Win!";
		}
		else if(choice2==="fire"){
			document.getElementById("result").innerHTML = "You Lost!";
		}
	}
	else{
		document.getElementById("result").innerHTML = "ERROR!";		
	}
}