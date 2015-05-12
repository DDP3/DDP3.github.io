var form = document.forms.theForm;
form.addEventListener("submit",submitForm,false);
function submitForm(event) {
  event.preventDefault();
  var cookie = {
    favoriteCookie: form.cookieInput.value,
  }
  var cookieText = "<p>Your favorite kind of cookie is " + cookie.favoriteCookie + ".</p>";
  var pet = {
    ownedPets: form.petInput.______,
  }
  
}

document.getElementById("cookieAnswer").innerHTML = cookieText;
