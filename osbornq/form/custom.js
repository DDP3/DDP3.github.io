var form = document.forms.theForm;
form.addEventListener("submit",submitForm,false);
function submitForm(event) {
  event.preventDefault();
  var cookie = {
    favoriteCookie: form.cookieInput.value,
  }
  var cookieText = "<p>Your favorite kind of cookie is " + cookie.favoriteCookie + ".</p>";
  document.getElementById("cookieAnswer").innerHTML = cookieText;
  
  if (form.dogCheck.checked) {
    var dogAnswer = "dog";
  }
  else {
    var dogAnswer = "";
  }
  
  if (form.catCheck.checked){
    var catAnswer = ", cat";
  }
  else {
    var catAnswer = "";
  }
  
  if (form.hamsterCheck.checked){
    var hamAnswer = ", hamster";
  }
  else {
    var hamAnswer = "";
  }
  
  if (form.rabbitCheck.checked){
    var rabAnswer = ", rabbit";
  }
  else {
    var rabAnswer = "";
  }
  
  if (form.turtleCheck.checked){
    var turAnswer = ", turtle";
  }
  else {
    var turAnswer = "";
  }
  
  if (form.otherCheck.checked){
    var otherState = {
    theOther: form.otherInput.value,
   }
   var otherAnswer = ", " + otherState.theOther;
  }
  else {
   var otherAnswer = "";
  }
  var petText = "<p>The pets that you own are: " + dogAnswer + catAnswer +  hamAnswer + rabAnswer + turAnswer + otherAnswer + ".</p>";
  document.getElementById("petAnswer").innerHTML = petText;
}


