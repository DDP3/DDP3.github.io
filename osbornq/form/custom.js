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
    turtle: form.turtleCheck.checked,
    other: form.otherCheck.checked,
  }
  
  if (form.dogCheck.checked) {
    var dogAnswer = "dog";
  }
  if (form.catCheck.checked){
    var catAnswer = "cat";
  }
  if (form.hamsterCheck.checked){
    var hamAnswer = "hamster";
  }
  if (form.rabbitCheck.checked){
    var rabAnswer = "rabbit";
  }
  if (form.turtleCheck.checked){
    var turAnswer = "turtle";
  }
  if (form.otherCheck.checked){
    var otherAnswer = {
    theOther: form.otherInput.value,
   }
  }
  else {
    var dogAnswer = "";
    var catAnswer = "";
    var hamAnswer = "";
    var rabAnswer = "";
    var turAnswer = "";
  }
  var petText = "<p>The pets that you own are: " + dogAnswer + ", " + catAnswer + ", "  + hamAnswer + ", "  + rabAnswer + ", "  + turAnswer + ", "  + otherAnswer.theOther + ".</p>";
  document.getElementById("petAnswer").innerHTML = petText;
}


