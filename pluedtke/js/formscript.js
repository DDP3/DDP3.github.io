var form = document.forms.example;

form.addEventListener("submit", displayPerson, false);


function displayPerson(event) {
	
	event.preventDefault();
	

	var Person = {
		name: form.username.value,
		bio: form.bio.value,
		gender: form.gender.value,
		Iwant: form.Iwant.value
	};

	var l = [];

	for(i = 0; i < form.food.length; i++) {

		if(form.food[i].checked) {
			l.push(form.food[i].value);
		}

	}

	Person.food = l;

	var html = "<p>My name is " + Person.name + ".</p><p>Here's a bio about me... " + Person.bio + "</p><p>My gender is " + Person.gender + ".</p><p>I have: " + Person.food.join(", ") + ".</p><p>I want a: " + Person.Iwant + ".</p>";

	$("#content-display").html(html);

}