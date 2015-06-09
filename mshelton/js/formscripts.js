var form = document.forms.example;

form.addEventListener("submit",  meowMix , false);

function meowMix(event) {

	event.preventDefault ();

	var cat = {

		cuteness: form.colorAnswer.value,
	}

	var text = "<p>You freakin' said " + cat.cuteness + " and that's freakin' awesome!</p>";

	document.getElementById("result").innerHTML = text;
}