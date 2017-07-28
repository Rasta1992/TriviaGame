$("#start").on("click", function(){
	game.start();
})

// variables //
var questions = [

{question:"How many miles is the sun from the Earth?",
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




// game object //
var game = {

	incorrect : 0,
	correct : 0,
	counter : 120,

	// timer //
	countdown: function(){
		game.counter--;
		$("#timer").html("<h2>" + game.counter + "<h2>");

		if (game.counter <= 0){
			game.done();
		}
	},


	start: function(){
		//start timer //
		timer = setInterval(game.countdown,1000);
		$("#sub-wrapper").prepend("<h2> Time left: <span id ='timer'>120</span> seconds. </h2>");
		$("#start").remove();
		// adding questions and answers //
		for  (var i = 0; i < questions.length; i++){
			$("#quiz-area").append("<h2>" + questions[i].question + "</h2>");

			for (var j = 0; j < questions[i].answers.length; j++){
				$("#quiz-area").append("<input type= 'radio' name = 'question-"+i+"' value='"+questions[i].answers[j]+"'>"+questions[i].answers[j])

			}
			
		}

	},

	// checking user input values //
	done: function(){
		$.each($('input[name="question-0"]:checked'),function(){
			if($(this).val()==questions[0].correctAnswer){
				game.correct++;
			}
			else{
				game.incorrect++;
			}
		});
	
		$.each($('input[name="question-1"]:checked'),function(){
			if($(this).val()==questions[1].correctAnswer){
				game.correct++;
			}
			else{
				game.incorrect++;
			}
		});
	
		$.each($('input[name="question-2"]:checked'),function(){
			if($(this).val()==questions[2].correctAnswer){
				game.correct++;
			}
			else{
				game.incorrect++;
			}
		});
	
		$.each($('input[name="question-3"]:checked'),function(){
			if($(this).val()==questions[3].correctAnswer){
				game.correct++;
			}
			else{
				game.incorrect++;
			}
		});
	
		$.each($('input[name="question-4"]:checked'),function(){
			if($(this).val()==questions[4].correctAnswer){
				game.correct++;
			}
			else{
				game.incorrect++;
			}
		});
		this.result();
	},

	result: function(){
		clearInterval(timer);
		$("#sub-wrapper h2").remove();
		$("#sub-wrapper").html("<h2>You finished !</h2>");
		$("#sub-wrapper").append("<h3> Correct: "+this.correct+"</h3>");
		$("#sub-wrapper").append("<h3> Incorrect: "+this.incorrect+"</h3>");

	}
	






}


















