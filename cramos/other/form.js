var social = document.forms.ssn;

social.addEventListener("submit", form);

function form(event) {
	event.preventDefault();
	var ssn = {
		number: social.ssn.value,
	};
	var ram = social.ram.value;
	var text = "<p>Your SSN is " + ssn.number + " and you now have " + ram + " of RAM. Your PC should be 10X as fast and you'll have $1,000,000 by tomorrow! :D</p>";
	document.getElementById("yourSocial").innerHTML = text;
}