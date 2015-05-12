
var form = document.forms.phillip;

form.addEventListener("submit", citcat,false);

function citcat(event){
	event.preventDefault();

	var kitty = {
		vindictiveness: form.answer.value, 
	};

	var text = "<p>You are a monster, you " + kitty.vindictiveness + "</p>"

	document.getElementById("rezult").innerHTML = text;
};
