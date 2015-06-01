var form = document.forms.user;

form.addEventListener("submit", questionName, false);
form.addEventListener("submit", questionGrade, false);

function questionName(event) {
	event.preventDefault();

	var information = {
		name: form.nameAnswer.value,
	}

	var text = "<p>Your name is: "+ information.name +".</p>";

	document.getElementById("nameResult").
		innerHTML = text;
}

function questionGrade(event) {
	event.preventDefault();

	var information = {
		grade: form.gradeAnswer.value,
	}

	var text = "<p>Your grade is: "+ information.grade +".</p>";

	document.getElementById("gradeResult").
		innerHTML = text;
}


