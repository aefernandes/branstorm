//Build an 'adjective'
var buzzword = [
	['word1','wikipedia.org/'],
	['word2','google.com']
];

// 'noun'
var noun = [
	['thing1','wikipedia.org/'],
	['thing2','google.com']
];

// using 'tech'
var tech = [
	['tech1','wikipedia.org/'],
	['tech2','google.com']
];

// return a random array index
function randomize (array) {
	return Math.floor(Math.random()) * array.length);
}

// output the name and link of a buzzword
// name is chooseBuzzword.name and link is chooseBuzzword.link
function chooseBuzzword() {
	var rand = randomize(buzzword);
	return {
		name: buzzword[rand][0];
		link: buzzword[rand][1];
	};
}

// output the name and link of a noun
// name is chooseName.name and link is chooseName.link
function chooseName() {
	var rand = randomize(noun);
	return {
		name: noun[rand][0];
		link: noun[rand][1];
	};
}

// output the name and link of a tech
// name is chooseTech.name and link is chooseTech.link
function chooseTech() {
	var rand = randomize(tech);
	return {
			name: tech[rand][0];
			link: tech[rand][1];
}
