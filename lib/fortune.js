//Virtual fortune cookie

var fortune = [
	"Conquer yo shit",
	"Rivers needs springs",
	"Don't be a bitch",
	"Handys are always a surprise",
	"Dont complicate, meditate",
];

exports.getFortune = function(){
	var randomFortune = fortune[Math.floor(Math.random() * fortune.length)];
	
	return randomFortune;
}