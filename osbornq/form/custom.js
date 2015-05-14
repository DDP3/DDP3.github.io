var form = document.forms.theForm;
form.addEventListener("submit",submitForm,false);
function submitForm(event) {
  event.preventDefault();
  var cookie = {
    favoriteCookie: form.cookieInput.value,
  }
  var cookieText = "<p>Your favorite kind of cookie is " + cookie.favoriteCookie + ".</p>";
  document.getElementById("cookieAnswer").innerHTML = cookieText;
  
  var pet = {
    dog: form.dogCheck.checked,
    cat: form.catCheck.checked,
    hamster: form.hamsterCheck.checked,
    rabbit: form.rabbitCheck.checked,
    other: form.otherCheck.checked,
  }
  var petText = "<p>The pets that you own are " + pet.dog + ".</p>";
  document.getElementById("petAnswer").innerHTML = petText;
}


