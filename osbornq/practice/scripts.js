



function foodButton() {				//button to enter food
	var textA = "";
	var foodList = [];			
	for (i=0;i<4;i++) {  			//"for" loop used for food list
		foodList.push(prompt("What do you wanna eat?"));
		textA += "<li>" + foodList[i] + "</li>";
		document.getElementById("food").innerHTML = textA;
	}
}


function bevButton() {	
	var textB = "";
	var i = 0;
	var drinkList = [];			//button to enter drinks
	while (i < 4) {					//"while" loop used for drink list
		drinkList.push(prompt("What would you like to drink?"));
		textB += "<li>" + drinkList[i] + "</li>";
		document.getElementById("beverage").innerHTML = textB;
		i++;
	}
}

function showPic() {           //shows image
	document.getElementById("pie").src = "http://upload.wikimedia.org/wikipedia/commons/b/be/Pecan_pie,_November_2010.jpg";
	document.getElementById("pie").alt = "pecan pie";
}
