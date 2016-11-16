/*************************************************/
/*		Trevor Edewaard, CS336, Lab02	*/
/************************************************/


//Function as first-class object
function Person(name, birthdate, friends) {
	this.myName = name;
	this.myBirthdate = birthdate;
	this.myFriends = friends;
}


//Method to print a greeting
Person.prototype.greeting = function() {
	console.log("Hello, my name is " + this.myName + "!");
}


//Mutator method to change name
Person.prototype.changeName = function(newName) {
	name.push(newName);
}


//Accessor method to compute age
Person.prototype.getAge = function () {
    var today = new Date();
    var birthDate = new Date(this.myBirthdate);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}


//Mutator Method to add a new friend
Person.prototype.addFriend = function(newFriend) {
	this.myFriends.push(newFriend);
}

//Declaring two Person objects
var Kyle = new Person("Kyle", "04/17/1996", ["Trevor"]);
var Trevor = new Person("Trevor", "04/06/1995", ["Kyle"]);

//Calling addFriend method to add BenRay to Kyle's friends
Kyle.addFriend("BenRay");

//Testing
Kyle.greeting();
console.log(Kyle.myBirthdate);
console.log(Kyle.myFriends);

//Calling getAge method
var kyleAge = Kyle.getAge();
console.log(kyleAge); 


//Create Student Subclass - Inheritance
function Student(name, birthdate, friends, subject) {
	Person.call(this, name, birthdate, friends);
	this.mySubject = subject;
}

Student.prototype = Object.create(Person.prototype);

//Method to print a student greeting
Person.prototype.greeting2 = function() {
	console.log("Hello, my name is " + this.myName + "!" + " I study " + this.mySubject+".");
}

//Declaring new student
var trevor2 = new Student("Trevor", "04/06/1995", ["Kyle"], "Information Systems");


//Testing
trevor2.addFriend("Andrew Lewis");
trevor2.addFriend("Superman");
trevor2.greeting2();
console.log(trevor2.myBirthdate);
console.log("My friends are: " +trevor2.myFriends);
var trevor2Age = trevor2.getAge();
console.log("My Age is: " + trevor2Age);

//Check if it is a subclass
trevor2 instanceof Person;

