// JS file

console.log("hello, world");

function add(x, y){
	console.log(x+y);
}

// Array

var classmates = ["Matt", "Tara", "Danielle", "Evan"];

var typesOfSoda = new Array();
typesOfSoda[0] = "Red Cream Soda";
typesOfSoda[1] = "IBC";

console.log(classmates);
console.log(typesOfSoda);

 
var mixedTypeArray = ["Elephant", 100, (5>2)];
var sameType = ["Elephant", "Giraffe", "Duck"];

function listClassmates(){
	for(var i=0; i<classmates.length; i++) {
    console.log(classmates[i]);
   }
}

listClassmates();

var randomNumbers = [57, 58, 92, 10, 11, 83, 20, 28, 57, 10];

function findDuplicates(){
	for(var i = 0; i<randomNumbers.length; i++) {


	}

}


/************************DO NOT GO ABOVE THIS LINE*************************/
/************************TOO MUCH "FUN" ABOVE *************************/

//Object literal

var friend = {

	//properties
	fullName		: "",
	age				:  0,
	married			: true,
	vocation		: "",
	closeLikeABro	: true,
	yearsKnown		: 0,
	hasSingleSister	: true,
	hobbies			: "",
	isABadAss		: true,
	likesTrump		: false,
	repostsFoxNews	: false,


	//method
	printVocation	: function(){
		return this.vocation;
	},

	postMessageToWall  :  function(message){
		return message;
	},

	stageIntervention	:  function(){
		if (this.likesTrump == true && this.repostsFoxNews == true){
			return "I'm unfriending you";
		} else if (this.likesTrump == true || this.repostsFoxNews == true){
			return "You need help dude"
		} else {
			return "We're close like Bros"
		}
	},



	introduceToSisterInLaw : function(){
		if(this.yearsKnown >= 5 && this.closeLikeABro == true && this.married == false){
			return "I want you to meet Lizzy";
		} else {
			return "Have you tried Tinder?";
		}
	}
}


var nickKirkes = Object.create(friend);
nickKirkes.fullName = "Nick Kirkes";
nickKirkes.age = 38;
nickKirkes.married = false;
nickKirkes.vocation = "Project Manager at Salesforce"
nickKirkes.yearsKnown = 20;

var hansKloepferp = Object.create(friend);
hansKloepfer.fullName = "Hans Kloepfer";
hansKloepfer.age = 42;
hansKloepfer.married = false;
hansKloepfer.vocation = "sailboat captain"
hansKloepfer.yearsKnown = 31;
hansKloepfer.likesTrump = false;
hansKloepfer.repostsFoxNews = true;

var paulOconnor = Object.create(friend);
paulOconnor.fullName = "Paul OConnor";
paulOconnor.age = "47";
paulOconnor.married = true;
paulOconnor.vocation = "coder dude";
paulOconnor.yearsKnown = 1;































