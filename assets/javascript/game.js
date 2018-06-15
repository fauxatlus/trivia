
window.onload = function(){  

var timer = 20
;
var interval = setInterval(function() {

	timer--;
	
	$('#timer').text(timer);
	
	if (timer === 0) clearInterval(interval), submitButton.onclick() ;
	
}, 1000);


var myQuestions = [
	{
		question: "What is the name of Blizzard's first person shooter?",
		answers: {
			a: 'World of Warcraft',
			b: 'Overwatch',
			c: 'Heroes of the Storm'
		},
		correctAnswer: 'b'
	},
	{
		question: "The popluar E-Sport term Zerg Rush was coined by what Blizzard game?",
		answers: {
			a: 'Diablo',
			b: 'Overwatch',
			c: 'Starcraft'
		},
		correctAnswer: 'c'
	},

	{
		question: "Which Overwatch character is able to rewind time?",
		answers: {
			a: 'Winston',
			b: 'Zenyatta',
			c: 'Tracer'
		},
		correctAnswer: 'c'
	},

	{
		question: "What faction does the World of Warcraft hero Thrall belong to?",
		answers: {
			a: 'Horde',
			b: 'Alliance',
			c: 'Pandaren'
		},
		correctAnswer: 'a'
	},

	{
		question: "When was Blizzard Entertainment Established?",
		answers: {
			a: '1991',
			b: '2005',
			c: '1983'
		},
		correctAnswer: 'a'
	}
	
];



var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		
		var output = [];
		var answers;

		
		for(var i=0; i<questions.length; i++){
			
			
			answers = [];

			
			for(letter in questions[i].answers){

				
				answers.push(
					'<label>'
						+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
						+ letter + ': '
						+ questions[i].answers[letter]
					+ '</label>'
				);
			}

			
			output.push(
				'<div class="question">' + questions[i].question + '</div>'
				+ '<div class="answers">' + answers.join('') + '</div>'
			);
		}

		
		quizContainer.innerHTML = output.join('');
	}


	function showResults(questions, quizContainer, resultsContainer){
		
		
		var answerContainers = quizContainer.querySelectorAll('.answers');
		
		
		var userAnswer = '';
		var numCorrect = 0;
		
		
		for(var i=0; i<questions.length; i++){

			
			userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
			
			
			if(userAnswer===questions[i].correctAnswer){
				
				numCorrect++;
				
				
				answerContainers[i].style.color = 'lightgreen';
			}
			
			else{
				
				answerContainers[i].style.color = 'red';
			}
		}

		
		resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
	}

	
	showQuestions(questions, quizContainer);
	
	
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}

}

};