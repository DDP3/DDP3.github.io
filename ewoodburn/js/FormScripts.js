//FORM JS


//Defines form as the form in my html
var form = document.forms.example; 


form.addEventListener("submit", displayPerson, false);


function displayPerson(event) {
	
	event.preventDefault();  //prevents the default action of submitting the form to a different page
	
//Takes whatever the user input in the certain class and turns it into something that javascript can understand
	var Person = {       
		crush: form.crush.value,
		adjective: form.adjective.value,
		firstVerb: form.chooseVerb.value,
		bodyPart: form.bodyPart.value,
		number: form.number.value,
		firstNoun: form.firstNoun.value,
		adverb: form.adverb.value,
		secondNoun: form.secondNoun.value,
		yourName: form.yourName.value,
		term: form.term.value

	};

//This whole thing is what prints to the page
	var html = "<p><h3>Dear " + Person.crush + ",</p><p>You are extremely " + Person.adjective + " and I " + Person.firstVerb + " you! I want to kiss your " + Person.bodyPart + " " + Person.number + " times. You make my " + Person.firstNoun + " burn with desire. When I first saw you, I " + Person.adverb + " stared at you and fell in love. Will you go out with me? Don't let your " + Person.secondNoun + " discourage you, they are just jealous. </p><p>Your " + Person.term + ",</p><p>" + Person.yourName + "</p>";

//These two things are jquery stuff I believe
	$("#content-display").html(html);
	$('html,body').animate({ scrollTop: 0 }, 'fast');
}


