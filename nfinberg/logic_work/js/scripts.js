
var catList = [prompt("What's your favorite operating system?"), prompt("What's your second favorite operating system?"), 
						prompt("What's your third favorite operating system?"), prompt("What else do you like?")];

var text = "";

for (i=0 ;i < 4; i++) {
	text += catList[i] + "<br>" ;
}

document.getElementById('list').innerHTML = text;
