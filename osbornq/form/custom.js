var form = document.forms.theForm;
form.addEventListener("submit",submitForm,false);
function submitForm(event) {
  event.preventDefault();
  var cookie = {
    favoriteCookie: form.cookieInput.value,
  }
  var cookieText = "<p>Your favorite kind of cookie is " + cookie.favoriteCookie + ".</p>";
  
  function dogBox {
    if (document.getElementById("dog").checked) {
      var dog= "dog";
    }
    else {
      break;
      console.log("No dog owned");
    }
  }
}

document.getElementById("cookieAnswer").innerHTML = cookieText;
document.getElementById("petAnswer").innerHTML = "<p>You own the following pets: " + dog + cat + turtle + hamster + rabbit + other + ".</p>";
