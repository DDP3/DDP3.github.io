//1. set ul width 
//2. image when click prev/next button
var ul;
var li_items;
var imageNumber;
var imageWidth;
var prev, next;
var currentPostion = 0;
var currentImage = 0;


function init(){
	ul = document.getElementById('image_slider');
	li_items = ul.children;
	imageNumber = li_items.length;
	imageWidth = li_items[0].children[0].clientWidth;
	ul.style.width = parseInt(imageWidth * imageNumber) + 'px';
	prev = document.getElementById("prev");
	next = document.getElementById("next");
	//.onclike = slide(-1) will be fired when onload;
	/*
	prev.onclick = function(){slide(-1);};
	next.onclick = function(){slide(1);};*/
	prev.onclick = function(){ onClickPrev();};
	next.onclick = function(){ onClickNext();};
}

function animate(opts){
	var start = new Date;
	var id = setInterval(function(){
		var timePassed = new Date - start;
		var progress = timePassed / opts.duration;
		if (progress > 1){
			progress = 1;
		}
		var delta = opts.delta(progress);
		opts.step(delta);
		if (progress == 1){
			clearInterval(id);
			opts.callback();
		}
	}, opts.delay || 17);
	//return id;
}

function slideTo(imageToGo){
	var direction;
	var numOfImageToGo = Math.abs(imageToGo - currentImage);
	// slide toward left

	direction = currentImage > imageToGo ? 1 : -1;
	currentPostion = -1 * currentImage * imageWidth;
	var opts = {
		duration:100,
		delta:function(p){return p;},
		step:function(delta){
			ul.style.left = parseInt(currentPostion + direction * delta * imageWidth * numOfImageToGo) + 'px';
		},
		callback:function(){currentImage = imageToGo;}	
	};
	animate(opts);
}

function onClickPrev(){
	if (currentImage == 0){
		slideTo(imageNumber - 1);
	} 		
	else{
		slideTo(currentImage - 1);
	}		
}

function onClickNext(){
	if (currentImage == imageNumber - 1){
		slideTo(0);
	}		
	else{
		slideTo(currentImage + 1);
	}		
}




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
			"<p>User select: " + userOption + " - Computer select: " 
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

/*-------This is a google maps copy and paste for the contact page---------*/
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


/*----------------Forms-------------------*/

var form = document.forms.practiceForm; 

//Creates the variable form which is linked to the documents form with the name "practiceForm".  So when I type form here in JavaScript, it will be referring to the HTML element <form name="practiceForm">.  


form.addEventListener("submit", displayPerson, false);  
	//When the submit button is pressed, it will run the function displayPerson which is coded below


function displayPerson(event) {
	
	event.preventDefault();
		//This prevents the default action that most forms do. Normally a form would be submitted to the server to be processed using a server-side language like PHP or Ruby.  However, we don't know any of that yet, so we are preventing this from happening and doing something else instead:
	
	
		//The code below will make more sense when I explain objects.  That video will be up on moodle by 5/14/15.

	var Person = {
		name: form.username.value,
	};

	//The object "Person" with the property "name" and the value of "name" being linked to whatever was typed in the box in the <input> tag called "username".



		//You've seen this before.  We did this with Alerts, but now we are doing it with a mix of objects (the object is Person) and forms.  
	var html = "<p>You typed: " + Person.name + ".</p>";

	
		//You've also seen this before.  Make a placeholder in HTML for the results to appear.  
	document.getElementById("displayText").innerHTML = html;
}



//Possible Questions:

//  Why doesn't my form look all fancy?

	// You need to add bootstrap style or find your own style to spice it up.  It can be found by going to http://getbootstrap.com/css/#forms  

//  "I have no idea what I'm doing....."

	//  I'm very sorry that you still think you have no idea what you are doing.  Lets slow this down and try to go step by step.  You don't have to understand every last piece of this code all at once.  Sit on it and see what works.  Start with "When I type this one thing, the result is this...". Also, the code has been given for you in multiple ways.  There is Dustin's example with bootstrap, my example with bootstrap, and this example.  You have the code....you can do this people :)
