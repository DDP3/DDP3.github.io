function depositForm() {
	var person = prompt("What is your routing number?", "05050505050505");
    }
};

function sellInformation() {
			document.getElementById("informationSold").innerHTML = "<p>Thank you for submitting your information to all of the major crime organizations.</p>";
};
		
var form = document.forms.cardForm;
form.addEventListener("submit",submitForm,false);
function submitForm(event) {
  
  
  if (form.visaCheck.checked) {
    var visaAnswer = "VISA,";
  }
  else {
    var visaAnswer = "";
  }
  
  if (form.mcCheck.checked){
    var mcAnswer = " Master Card,";
  }
  else {
    var mcAnswer = "";
  }
  
  if (form.aeCheck.checked){
    var aeAnswer = " American Express,";
  }
  else {
    var aeAnswer = "";
  }
  
  if (form.ubCheck.checked){
    var ubAnswer = " US Bank,";
  }
  else {
    var ubAnswer = "";
  }
  
  if (form.otherCheck.checked){
    var otherState = {
    theOther: form.otherInput.value,
   }
   var otherAnswer = otherState.theOther;
  }
  else {
   var otherAnswer = "";
  }
  var cardText = "<h3>You have Credit Cards from: " + visaAnswer + mcAnswer +  aeAnswer + ubAnswer + otherAnswer + ".</h3>";
  document.getElementById("cardAnswer").innerHTML = cardText;
};		
