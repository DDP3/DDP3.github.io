var form = document.forms.example;

form.addEventListener("submit", action, false);

function action(event) {
	event.preventDefault();
	alert(form.txtbox.value);
}