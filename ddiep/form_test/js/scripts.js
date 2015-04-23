var form = document.forms.example;

form.addEventListener("submit", displayPerson, false);

function displayPerson(event) {
	event.preventDefault();
	console.log("submitted");
	//form.name.value
	
	var Person = {
		name: form.username.value,
		secretData: form.secretData.value,
		bio: form.bio.value,
		gender: form.gender.value,
		//limbs: form.limbs
		car: form.cars.value
	};

	var l = [];

	for(i = 0; i < form.limbs.length; i++) {
		if(form.limbs[i].checked) {
			l.push(form.limbs[i].value);
		}
	}

	Person.limbs = l;

	var html = "<p>My name is " + Person.name + ".</p><p>My secret data is " + Person.secretData + ".</p><p>Here's a bio about me... " + Person.bio + "</p><p>My gender is " + Person.gender + ".</p><p>I have these limbs: " + Person.limbs.join(", ") + ".</p><p>I want this car: " + Person.car + ".</p>";

	$("#content-display").html(html);
	$('html,body').scrollTop(0);
}