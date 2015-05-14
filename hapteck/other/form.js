var form = document.forms.example;

form.addEventListener("submit", meowMix, false);

function meowMix(event) {
	event.preventDefault();
	var cat = {
		cuteness: form.catAnswer.value,
	};
	var text = "<p>You said: " + cat.cuteness + ".</p>";
	document.getElementById("result").innerHTML = text;
}