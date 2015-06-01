//This part designates the attached html file as a 'form.'
var form= document.forms.example;

	form.addEventListener("submit", displayPerson, false);

	function displayPerson (event){
//This keeps the page from submitting the form to a different page
	event.preventDefault();
//This part defines my different answers, from what your name is to what kind of candy you like.
		var Person = {
		name: form.yourname.value,
		colorchoice: form.colorchoice.value,
		fact: form.fact.value,
		team: form.team.value,
		candy: form.candy.value
	}
//This variable is what actually puts the responses to my questions on the html page. They are all in their separate paragraphs.
	var html = "<p>My name is " + Person.name + ".</p><p>My favorite color is " + Person.colorchoice + ".</p><p>A fun fact about me is:" + Person.fact + "</p><p>The team I think will win the finals is the" + Person.team + ".</p><p>My favorite candy is " + Person.candy + ".</p>";
//These things log my different parts of the javascript into the console, so I can see what is wrong if things go awry
	console.log(form);
	console.log(Person);
	console.log(html);
//This helps put the results (your answers) onto the html page itself so you can see them.
	document.getElementById('result').innerHTML = html;
}