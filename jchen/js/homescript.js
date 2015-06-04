var form = document.forms.charForm;

form.addEventListener("submit", charCreate, false);

function charCreate (event) {
	
	event.preventDefault();

	var character = {
		firstName: form.inputName.value,
		lastName: form.inputLast.value,
		age: form.inputAge.value,
		secret: form.darkestSecret.value,
		role: form.inputClass.value,
	};


	var charRole = "";
	switch(character.role) {
		case "peasant":
			charRole = "You are a peasant who works the fields for our manevolent leader. Your hard work is rewarded each harvest, but you still have hard times supporting you and your (potential) family that you keep sending money to. Our manevolent leader has said to you that your family is in a far away city and that they are having a bit of trouble. He gave you the option to send money and supplies to them which you gratefully accept and began sending supplies.";
			break;
		case "student":
			charRole = "You are a student that is learning in the school of Franklin High. Your life is not the most amazing, but everyone is ready to support you in whatever you do. It is very comforting that everyone is with you ready for anything.";
			break;
		case "teacher":
			charRole = "You are a manevolent teacher that controls everyone and everything that you see in your room. Over your rule, you have been nicknamed the 'J-Dog'. In a few weeks, you may lose your command as your subjects begin usurp your rule. However, you ask them for one last favor and that is create a website featuring all that they have done for the future manevolent teacher.";
			break;
		case "fighter":
			charRole = "You are a fighter. You fight stuff. A lot.";
			break;
		case "lord":
			charRole = "You are another ruler, ready to take down the manevolent teacher and to rule over them. As you speak, your troops gather around the room where the teacher holds their power and you are ready for their usurping. After the teacher gets usurped, you prepare for a three month long wait for the fight to disperse and to rightfully take over the crown.";
			break;
		case "not":
			charRole = "You are not a peasant who doesn't works the fields for our manevolent leader. Your hard work is not rewarded each harvest as you do not work the fields, and you don't have hard times supporting you and your (potential) family that you don't keep sending money to. Our manevolent leader hasn't said to you that your family is not in a far away city and that they are not having a bit of trouble. He didn't give you the option to send money and supplies to them which you gratefully didn't accept and didn't begin sending supplies."
			break;
		case "period3":
			charRole = "You are the room and class that the manevolent teacher is currently ruling over. The lord is currently trying to usurp the teacher and trying to rule over you. As you prepare for a final presentation that the teacher commanded you to do and give to the next leader (the lord), you begin to wonder why you exist and if you will once the lord rules.";
			break;
		default:
			charRole = "You don't know what your class is."
	}

	document.getElementById('formOutput').innerHTML = "You are " + character.firstName + " of the " + character.lastName + " family. You are the age of " + character.age + " years. Your darkest secret is not safe and it is '" + character.secret + "' " + charRole;
}