var form = document.forms.myForm; 

//Creates the variable form which is linked to the documents form with the name "Form".  So when I type form here in JavaScript, it will be referring to the HTML element <form name="Form">.  


console.log("working");


form.addEventListener("submit", displayPerson, false);  
	//When the submit is pressed it will run this function


function displayPerson(event) {
	
	event.preventDefault();
		//This stop a new page from popping up like php does
	

	var Person = {
		name: form.username.value,
	};


		//puts together the information that you typed.
	var html = "<p>You typed: " + Person.name + ".</p>";

	
		//This is where the text gooes when all is said and done.
	document.getElementById("displayText").innerHTML = html;
}

