// variables //
var questions = [

{question :"How many miles is the sun from the Earth?",
answers: ["93 Billion","93 Million", "Neither"],
correctAnswer: "93 Million"
},

{question: "How long has Jupiter's Red Spot been known to exist?",
answers: ["300 years", "50 years", "500 years"],
correctAnswer: "300 years"
},

{question: "Which planet is earth's closest twin in the Solar System?",
answers: ["Venus", "Mars", "Mercury"],
correctAnswer: "Venus"
},

{question:"Which planet is the Sun's closets twin in our Solar System?",
answers: ["Neptune", "Jupiter", "Venus"],
correctAnswer: "Jupiter"
},

{question:"What protects us from the Sun's charged particles?",
answers: ["The moon", "Magnetic field", "Superman"],
correctAnswer: "Magnetic field"

}];

// functions //
$("#a1").click(function(){
	$("label#a1")console.log();
});

$(document).on("click", "#start", function(){
	game.start();
});


$(document).on("click", "#done", function(){
	game.done();
});


// game object //
var game = {

	incorrect : 0,
	correct : 0,
	counter : 120,


	timer: function(){
		game.counter--;
		$("#timer").html("<h2>" + game.counter + "<h2>");

		if (game.counter === 0) {
			game.done();
		}
	},


	start: function(){
		time = setInterval(game.timer, 1000);
		//$("#timer").append("<h2>" + game.counter + "</h2>");
	},








};


















