var form = document.forms.example;

form.addEventListener("submit", story, false);

function story(event) {

	event.preventDefault();

	var words = {

		writing: form.wordsAnswer.value,
		genre: form.genreAnswer.value,
	};

	var text = "<h1>Here is your magical story. Share it with the world: </h1>" + "<p>" + words.writing + "<p> The genre of this story is " +	words.genre + ".</p>";

	document.getElementById("result").innerHTML = text;
}

/*
form.addEventListener("submit2", abs, false);

function abs(event) {

	event.preventDefault();

	var dog = {

		
	};

	var text = "<p>You said: " + dog.genre +	".</p>";

	document.getElementById("result2").innerHTML = text;
}


*/