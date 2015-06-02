




window.onload = init;

var userOption = undefined;

/*--------------This styles the boxs upon being clicked---------*/
function playWith(option){

   if (userOption != undefined)
   {
      userSelectionElement = document.getElementById(userOption);

      userSelectionElement.style.border = "5px #F8F8F8  solid";
   }	 		

   userOption = option;
   userSelectionElement = document.getElementById(option);
   userSelectionElement.style.border = "5px #990066 solid";
}

/*------------This determines who wins the game--------------*/

 function playGame(){
  	 		var computerOption = Math.random();
			if (computerOption <0.34){
				computerOption = "stone";
			}else if(computerOption <=0.67){
				computerOption = "paper";
			}else{
				computerOption = "scissor";
			}
			
			resultMessage = compare(userOption, computerOption);
			
			document.getElementById("result").innerHTML = 
			"<p>User select: " + userOption + " - Computer select : " 
			+ computerOption + "</p> <p>" + resultMessage + "</p>";
			
  	    }

/*---------This is the results of the game----------*/

function compare(userSelection, computerSelection)
		{
			if(userSelection == undefined)
			{
				return "Please, select an option before playing"
			}	

		    if (userSelection == computerSelection)
		    {
		       return "It's a draw!";
		    }
		    
		    if (userSelection == "stone")
		    {
		        if (computerSelection == "scissor")
		        {
		             return "You win.";
		        } else {
		            return "The computer wins. Try again.";
		        }
		        
		    } else if (userSelection == "paper") {
		        
		        if (computerSelection == "stone")
		        {
		             return "You win." ;
		        } else if("scissor") {
		            return "The computer wins. Try again." ;
		        }
		        
		    } else if (userSelection == "scissor") {
		      
		        if (computerSelection == "stone")
		        {
		            return "The computer wins. Try again.";
		        }else{
		            return "You win.";
		        }
		    }
		}  

/*---------------google maps---------*/
function initialize() {
        var mapCanvas = document.getElementById('map-canvas');
        var mapOptions = {
          center: new google.maps.LatLng(44.5403, -78.5463),
          zoom: 8,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions)
      }
      google.maps.event.addDomListener(window, 'load', initialize);
		
/*----------------Form--------------------*/

var form = document.forms.myForm; 

//Creates the variable form which is linked to the documents form with the name "Form".  So when I type form here in JavaScript, it will be referring to the HTML element <form name="Form">.  


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

