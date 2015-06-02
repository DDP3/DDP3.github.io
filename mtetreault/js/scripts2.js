var form = document.forms.example;  // designates this section as a form 

form.addEventListener("submit", displayUser, false);  

function displayUser(event) {           

	event.preventDefault();     // prevents the page from submitting the actual form to a seperate page

	var User = {
		name: form.username.value,
		sport: form.sport.value,             // defines the different parts of the form that the user will respond to
		about: form.about.value,
		siblings: form.siblings.value,
	}








	var html = "<p>Your name is " + User.name + ".</p>" + "<p>After high school your plans are to " + User.about + ".</p>" + "<p>A sport you like is " + User.sport + ".</p>" + "<p> You have " + User.siblings + " siblings.</p>";

	document.getElementById('result').innerHTML = html;     // inserts the text and values into the html
	
}