//Write in a Decision`
function DeciderFunction() {
	var decision = prompt("Enter the Decision you wish to make.");

		if (decision != null){
			document.getElementById("writenDecision").innerHTML = decision;
		}
}
//Add Pros to the Pro List
function ProFunction() {
	var textPro = "";
	var pros = [];
	for(i=0; i<4; i++){
		pros.push(prompt("What is a Pro?"));
		textPro += pros[i] + "<br>";
		document.getElementById("pList").innerHTML = textPro;
		console.log(textPro);
	}
}
//Add Cons to the Con List
function ConFunction(){
	var textCon = "";
	var cons = [];
	var i = 0;
	while(i<4){
		cons.push(prompt("What are some Cons?"));
		textCon += cons[i] + "<br>";
		document.getElementById("cList").innerHTML = textCon;
		console.log(textCon);
		i++;
	}
}
//Show Picture
function PictureFunction(){
	document.getElementById("RandomPicture").style.display = "block";
}
