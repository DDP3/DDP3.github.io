/*What are objects?*/

//Objects are a very important part of coding. Javascript is considered an object oriented programming (OOP) language, meaning it uses objects.
//Objects can be though of as a container, like an array, which stores relevant information and can interact with it. It can have variables and functions, but they're called properties and methods respectively.
//But what can be an object? Well, pretty much anything that's a noun. A person, an animal, food, or, more practically, a user or application handler. Any set of related variables and functions can be grouped together into an object.


/*How to make an object*/

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


/*Object constructors*/

//The method is above is called making an object literal, where you make a whole object in one go.
//Now, that's great an all for making a singular object, but what if we want to make a ton of objects instead?
//Do we have to manually code each and every single person?
//No! Objects can be grouped into different categories, called classes.
//In this case, Bob would belong to the Person class, cause he's a person.
//We use classes to provide a sort of framework for what an object is supposed to have,
//then instantiate an instance of the object when we actually need one.

//That sounds a little complicated, but hopefully it'll make more sense with an example.
//Below is something called a constructor function. It's what we use to construct a new object.
// *Please note that Javascript does not actually formally use classes, but it's still the same concept.*

//This is the constructor function for the Person class. It takes some parameters such as name, gender, and age.

var Person = function(name, gender, age) {

	//Instead of the format from before where you define key:value pairs
	//We use the "this" key word followed by whatever you want the property to be called, all using the dot format.
	// this.propertyName
	// *Remember, "this" refers to this object.

	this.name = name;
	this.gender = gender;
	this.age = age;

	//Methods are done similarly. Just use 
	// this.methodName = function() { ...code here... }

	this.sayName = function() {
		console.log(this.name);
	};
	this.changeGender = function(newGender) {
		gender = newGender;
		console.log(name + "'s gender is now " + gender);
	};
}

//Now we make a new Person object. I'm gonna call him Charles.
//You use the format
// var newObjectName = new Constructor( ...Properties... );

var Charles = new Person("Charles", "male", 27);

//We can access Charles' properties and methods just like Bob.

var name2 = Charles.name;
Charles.sayName();
Charles.changeGender("female");


/*Built-in Objects*/

//Now javascript actually has some built-in functions. You've been using them without even knowing it!
//Has this dot format looked kind of familiar?
//That's cause you've been using it with the console object.

console.log("I'm a built in function!");

//The console.log function is a method that's built into the pre-existing console object.

//You may also remember using the Math object. This has a bunch of built in methods for doing math.

var random = Math.random();

//There is also the Date object, which you can use for time management.

var today = new Date();

//You can get the full list here:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
// It's not super important to have memorized or anything, but it's pretty cool to know.


/*Conclusion*/

//Well, that's a crash course on Javascript Objects. This of course only scratches the surface.
//There're still things like inheritance, prototyping, Object Oriented Design, etc. that I didn't get into (mostly cause I don't know much about them).
//Feel free to research on your own.


