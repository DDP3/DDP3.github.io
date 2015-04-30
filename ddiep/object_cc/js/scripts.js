//Objects are a very important part of coding. Javascript is considered an object oriented programming (OOP) language, meaning it uses objects.
//Objects can be though of as a container, like an array, which stores relevant information and can interact with it. It can have variables and functions, but they're called properties and methods respectively.
//But what can be an object? Well, pretty much anything that's a noun. A person, an animal, food, or, more practically, a user or application handler. Any set of related variables and functions can be grouped together into an object.

//I'm gonna make an object that's like a person. He'll be called Bob. You make an object like a variable, except you use curly brackets instead.
//var objectName = { ...stuff in here... }

var Bob = {

	//Bob has a name, which is a variable or PROPERTY. You declare them with a colon, using this general format:
	// key: value,
	//You separate out properties and methods using commas, just like an array. Really, an object can be thought of as a fancy array.
	
	name: "Bob",
	
	//I'm gonna give him a gender and age too.

	gender: "male",
	age: 42,

	//Objects have functions too, which we call METHODS. They use this format:
	// functionName: function() { ...function code here... }
	//Also remember to separate them out with commas at the end.
	//I want this function to say bob's name, so it looks like this:

	sayName: function() {
		
		console.log(this.name);

		//You'll notice that for saying his name, I used the format "this.name". "this" refers to this object, namely, bob. Not to hard of a concept. I'll get into accessing object properties with the dot format in a bit.
	},

	//We can also make methods that change properties within the object.
	//In this case, we can change Bob's gender with ease. Isn't modern technology wonderful?

	changeGender: function(newGender) {
		gender = newGender;
		console.log(this.name + "'s gender is now " + this.gender);
	}
}

//If we want to access an object's property or method, we use the dot format. Say the object and follow it with a "." and the thing you want.
// obj.property

var name = Bob.name;

//We can also access the object's methods with the dot format.
// obj.method()

Bob.sayName();
Bob.changeGender("other");

//An object constructor and a person being made with a constructor.

var Person = function(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.sayName = function() {
		console.log(this.name);
	},
	this.changeGender = function(newGender) {
		gender = newGender;
		console.log(name + "'s gender is now " + gender);
	}
}

var Charles = new Person("Charles", "male", 27);
Charles.sayName();
Charles.changeGender("female");
