function sayHello(){
	alert("It's working.")
}

var friend = {

	//properties and/or methods

	firstName		: "Paul",
	lastName	: "O'Connor",
	age			: 39


};

document.getElementById("demo").innerHTML = friend.firstName + " " + friend.lastName + friend.age;
document.getElementById("name").innerHTML = friend.age;

var houseOfCards = {
	showName	: "House of Cards",
	episodeNo	: 1,
	episodeDesc	: "The viewer is introduced to the nefarious ways of Mr. Underwood"
}

document.getElementById("show-name").innerHTML = houseOfCards.showName;
document.getElementById("episode-number").innerHTML = houseOfCards.episodeNo;
document.getElementById("episode-description").innerHTML = houseOfCards.episodeDesc;


var netflixShow = {
	shName : "",
	epNumber : 1,
	epDescription : "",

	//method

	watchNow	: function(){
	alert("you are now queueing up " + this.shName + " " + this.epNumber)
	}



var drWho = Object.create(netflixShow);
drWho.shName = "Dr. Who";
drWho.epNumber = 1;
drWho.epDescription = "Mannequins come alive.";


document.getElementById("show-name2").innerHTML = drWho.shName;
document.getElementById("episode-number2").innerHTML = drWho.epNumber;
document.getElementById("episode-description2").innerHTML = drWho.epDescription;


// More complex object literal

var amazonPrimeShow = {
	showId		: 1,
	name 		: "Paul's Happiest Times", 
	description : "this is the happiest show on the planet",
	seasonInfo : {
		seasonNumber: 1,

	printDetails : function(){
		document.write(description);
	},

	episodes 		: [
		{episodeNumber: 1, episodeName: "Happy Stuff"},
		{episodeNumber: 2, episodeName: "The Real Happy Story of Paul"},
		{episodeNumber: 3, episodeName: "Even happier than before"}
	]
  },
};

for (info in amazonPrimeShow.seasonInfo.episodes){
		document.write((parseInt(info) + 1) + " - " + amazonPrimeShow.seasonInfo.episodes[info].episodeName + "<br>");
	}





















