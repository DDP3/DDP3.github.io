var result = document.getElementById("result");

var one = document.getElementById("1");
var two = document.getElementById("2");
var three = document.getElementById("3");

function setResult(number) {
	result.innerHTML = result.innerHTML + number;
}

one.addEventListener("click", function() {
	setResult("1");
});

two.addEventListener("click", function() {
	setResult("2");
});

three.addEventListener("click", function() {
	setResult("3");
});



