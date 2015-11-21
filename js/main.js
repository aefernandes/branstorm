// array of type of app
var typeofapp = Array(
	"an iOS app",
	"a Chrome extension",
	"a website",
	"an Android app",
	"an Oculus Rift app",
	"a Windows app",
	"a search engine",
	"an iPad app",
	"a browser plugin",
	"a game",
	"a Leap Motion app"
	);
// array of verbs
var verb = Array(
	"optimizes",
	"helps with",
	"improves",
	"enables"
	);
// array of what app does
var whatitdoes = Array(
	"dating",
	"music sharing",
	"eating food",
	"education",
	"school",
	"college life",
	"buying a house"
	);

// array of technologies to use
var techOne = Array(

	"machine learning",
	"neural networks",
	"artificial intelligence",
	"virtual reality"
	);

// array of other technologies to use
var techTwo = Array(
	"bitcoin",
	"Backbone.js",
	"Meteor.js",
	"Node.js",
	"React.js",
	"the Twitter API",
	"Haskell",
	"MongoDB",
	"CouchDB",
	"Django",
	"Flask",
	"Ruby on Rails",
	"Go",
	"JQuery"
	);

// start 
$(document).ready(function(){
	function generate(){     
		var randType = typeofapp[Math.floor(Math.random()*typeofapp.length)]; // pick something from 'typeofapp' array
        $('#typeofapp').html(randType); // display on page
        var randVerb = verb[Math.floor(Math.random()*verb.length)]; // repeat 
        $('#verb').html(randVerb);
        var randWhatItDoes = whatitdoes[Math.floor(Math.random()*whatitdoes.length)];
        $('#whatitdoes').html(randWhatItDoes);
        var randTechOne = techOne[Math.floor(Math.random()*techOne.length)];
        $('#techOne').html(randTechOne);
        var randTechTwo = techTwo[Math.floor(Math.random()*techTwo.length)];
        $('#techTwo').html(randTechTwo);
    } // close generate function
    generate(); // call the generate function when the document is loaded
    $('#new').click(function(){ // every time you click on the button
        generate(); // you generate a cool new awesome idea for your next hackathon!!!
    })
}); // close 
