// Initialize Parse System
Parse.initialize("DMDqpA0wsEZrrdL80ySOYWfQvoeCcOmdexqSfKzP", "rt0Mou7el8rYdpdQpct0BQFk0Bad89iDILNgfCHj");

function createStudent(){
	var StudentCollection = Parse.Object.extend("StudentCollection");
	var studentCollection = new StudentCollection();
	 
	studentCollection.set("FirstName", document.getElementById("FirstName").value.toLowerCase());
	studentCollection.set("LastName", document.getElementById("LastName").value.toLowerCase())
	studentCollection.set("IDNum", document.getElementById("IDNum").value);
	studentCollection.set("GradeNum", document.getElementById("GradeNum").value);
	studentCollection.set("loggedIn", true);
	 
	studentCollection.save(null, {
	  success: function(studentCollection) {

		// Execute any logic that should take place after the object is saved.
		document.getElementById("success").style.visibility = "visible";
		document.getElementById("success").innerHTML = "<h5>Successfully registered New Student.</h5>";
		clearInterval(myVar8);
		var myVar8=setInterval(function () {myTimer()}, 5000);

				function myTimer() {
					document.getElementById("success").style.visibility = "hidden";
					clearInterval(myVar8);
				}
	  },
	  error: function(gameScore, error) {
		// Execute any logic that should take place if the save fails.
		// error is a Parse.Error with an error code and message.
		document.getElementById("error").style.visibility = "visible";
		document.getElementById("error").innerHTML = "<h5>Error: " + error.code + "</h5><br>" + "<h2>Error Message: </h2> " + error.message;	
		clearInterval(myVar7);
		var myVar7=setInterval(function () {document.getElementById("error").style.visibility = "hidden"; clearInterval(myVar7);}, 3000);
	  }
	});
}

function loginStudent(){
	var StudentCollection = Parse.Object.extend("StudentCollection");
	var queryCollection = new Parse.Query(StudentCollection);
	
	queryCollection.equalTo("IDNum", document.getElementById("loginID").value);
	queryCollection.find({
		success: function(results) {
			
			for (var i = 0; i < results.length; i++) { 
			var object = results[i];
			var firstname = object.get("FirstName");
			var lastname = object.get("LastName");
			var id = object.get("IDNum");
			var grade = object.get("GradeNum");
			
				if(object.get("loggedIn") == true){
					document.getElementById("error").style.visibility = "visible";
					document.getElementById("error").innerHTML = "<h5>You havent logged out yet!</h5>";
					clearInterval(myVar6);
					var myVar6=setInterval(function () {document.getElementById("error").style.visibility = "hidden"; clearInterval(myVar6);}, 3000);
					
				}
		
				if(object.get("loggedIn") == false){
					object.set("loggedIn", true);
				 var now = new Date();
				  var date = [ now.getMonth() + 1, now.getDate(), now.getFullYear() ];
				  var time = [ now.getHours(), now.getMinutes(), now.getSeconds() ];
				  var suffix = ( time[0] < 12 ) ? "AM" : "PM";
				  time[0] = ( time[0] < 12 ) ? time[0] : time[0] - 12;
				  time[0] = time[0] || 12;
				 
				  for ( var i = 1; i < 3; i++ ) {
					if ( time[i] < 10 ) {
					  time[i] = "0" + time[i];
					}
				  }
					object.set("Date: ", now);
					object.save();
							
							document.getElementById("working").style.visibility = "visible";
							document.getElementById("working").innerHTML = "<h5>Hello, " + firstname +  " " + lastname + ". Your ID is: " + id + ". Your grade level is: " + grade + ". You logged in at: " + date.join("/") + " " + time.join(":") + " " + suffix +"</h5>"	
							clearInterval(myVar5);
							var myVar5=setInterval(function () {document.getElementById("working").style.visibility = "hidden"; clearInterval(myVar5);}, 3000);
							
					
				}
			
			}
		// Do something with the returned Parse.Object values

		},
	error: function(error) {
		document.getElementById("error").style.visibility = "visible";
		document.getElementById("error").innerHTML = "<h5>Error: " + error.code + "</h5><br>" + "<h2>Error Message: </h2> " + error.message
		
		clearInterval(myVar4);
		var myVar4=setInterval(function () {myTimer()}, 5000);

				function myTimer() {
					
					document.getElementById("error").style.visibility = "hidden";
					clearInterval(myVar4);
				
				}
		}
	});
}

function logoutStudent(){
	var StudentCollection = Parse.Object.extend("StudentCollection");
	var queryCollection = new Parse.Query(StudentCollection);
	
	queryCollection.equalTo("IDNum", document.getElementById("loginID").value);
	queryCollection.find({
		success: function(results) {
			
			for (var i = 0; i < results.length; i++) { 
			var object = results[i];
			//	var firstname = object.get("FirstName");
			//	var lastname = object.get("LastName");
			//	var lastname = object.get("LastName");
			var id = object.get("IDNum");
			//var grade = object.get("GradeNum");
			
				if(object.get("loggedIn") == false){
					document.getElementById("error").style.visibility = "visible";
					document.getElementById("error").innerHTML = "<h5>You are already logged out</h5>"	
					clearInterval(myVar1);
					var myVar1=setInterval(function () {document.getElementById("error").style.visibility = "hidden"; clearInterval(myVar1);}, 3000);
					
					
				}
				
				if(object.get("loggedIn") == true){
					object.set("loggedIn", false);
					object.save();
					document.getElementById("working").style.visibility = "visible";
					document.getElementById("working").innerHTML = "<h5> You are now logged out! ID: " + id +"</h5>";
					clearInterval(myVar2);
					var myVar2=setInterval(function () {document.getElementById("working").style.visibility = "hidden"; clearInterval(myVar2);}, 5000);
					
				}
		

			}
		// Do something with the returned Parse.Object values

		},
	error: function(error) {
		document.getElementById("error").style.visibility = "visible";
		document.getElementById("error").innerHTML = "<h5>Error: " + error.code + "</h5><br>" + "<h2>Error Message: </h2> " + error.message
		
		clearInterval(myVar3);
		var myVar3=setInterval(function () {myTimer()}, 5000);

				function myTimer() {
					document.getElementById("error").style.visibility = "hidden";
						clearInterval(myVar3);
				
				}
		}
	});
}