window.onload = function () {
	document.getElementById("drop").style.display = "none";
}

function dropdown () {
	if(document.getElementById("drop").style.display == "none") {
		console.log("show");
		document.getElementById("drop").style.display = "block";
		document.getElementById("drop").style.opacity = "1";
		document.getElementById("drop").style.visibility = "visible";

		document.getElementById("drop2").style.display = "block";
		document.getElementById("drop2").style.opacity = "1";
		document.getElementById("drop2").style.visibility = "visible";

		document.getElementById("drop3").style.display = "block";
		document.getElementById("drop3").style.opacity = "1";
		document.getElementById("drop3").style.visibility = "visible";
	} else {
		console.log("hide");
		document.getElementById("drop").style.display = "none";
		document.getElementById("drop").style.opacity = "0";
		document.getElementById("drop").style.visibility = "hidden";

		document.getElementById("drop2").style.display = "none";
		document.getElementById("drop2").style.opacity = "0";
		document.getElementById("drop2").style.visibility = "hidden";

		document.getElementById("drop3").style.display = "none";
		document.getElementById("drop3").style.opacity = "0";
		document.getElementById("drop3").style.visibility = "hidden";
	}
}