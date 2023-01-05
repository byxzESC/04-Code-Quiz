// AS A coding boot camp student
// I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
// SO THAT I can gauge my progress compared to my peers
// GIVEN I am taking a code quiz
// WHEN I click the start button---              THEN a timer starts and I am presented with a question
// WHEN I answer a question---                   THEN I am presented with another question
// WHEN I answer a question incorrectly---       THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0---   THEN the game is over
// WHEN the game is over ---                     THEN I can save my initials and score

// variable to keep score, initials, different section of html 
var startSection = $('#start-section');
var startButton = $('#start-btn');

var quizSection = $('#quiz-section');
var questionElement = $('#question');
var highScore = $('#high-score');

var buttonA = $('#buttonA');
var buttonB = $('#buttonB');
var buttonC = $('#buttonC');
var buttonD = $('#buttonD');
var answerMessage = $('#answer-message');

var randomizedQuestions = [];
var currentQuestion = 0;

// whenever player clicked on an answer we move on the next question
    // changing content of question and answer tag by setting reference to the question object

// all the way till player done with the quiz
// after that player able to enter their initial and see the leader board 

// function for starting the quiz
function startQuiz () {
    randomizedQuestions = shuffleQuestions(questionBank);
    // renderQuestion();
    renderAnswers();
}
// randomize the questionBank objects array
function shuffleQuestions (questions) {
    var result;
    result = questions.sort(function() {
        return Math.random() - 0.5;
    });
    return result;
}

// function for rendering questions and answers
// function renderQuestion() {
//     console.log(randomizedQuestions[currentQuestion].question);
//     questionElement.text(randomizedQuestions[currentQuestion].question);
// }

function renderAnswers() {
    questionElement.text(randomizedQuestions[currentQuestion].question);
    buttonA.text(randomizedQuestions[currentQuestion].answerA);
    buttonB.text(randomizedQuestions[currentQuestion].answerB);
    buttonC.text(randomizedQuestions[currentQuestion].answerC);
    buttonD.text(randomizedQuestions[currentQuestion].answerD);
}

function nextQuestion (message) {
    // correct/wrong msg
    if (message === 'correct') {
        answerMessage.text('correct');
        answerMessage.fadeOut(1000);
    } else {
        answerMessage.text('wrong');
        answerMessage.fadeOut(1000);
    }

    // question
    if (currentQuestion === 0) {
        currentQuestion++;
        renderAnswers();
    } else if (currentQuestion === randomizedQuestions.length) {
        // game ends show score and ask to sign initial
    } else {
        currentQuestion++;
        // renderQuestion();
        renderAnswers();
    }

}

buttonA.on('click', function(e) {
    console.log(e.target);
    var answer = 'answerA';
    if (answer === randomizedQuestions[currentQuestion].correctAnswer) {
        nextQuestion('correct');
    } else {
        nextQuestion('wrong');
    }
});

buttonB.on('click', function() {
    var answer = 'answerB';
    if (answer === randomizedQuestions[currentQuestion].correctAnswer) {
        nextQuestion('correct');
    } else {
        nextQuestion('wrong');
    }
});

buttonC.on('click', function() {
    var answer = 'answerC';
    if (answer === randomizedQuestions[currentQuestion].correctAnswer) {
        nextQuestion('correct');
    } else {
        nextQuestion('wrong');
    }
});

buttonD.on('click', function() {
    var answer = 'answerD';
    if (answer === randomizedQuestions[currentQuestion].correctAnswer) {
        nextQuestion('correct');
    } else {
        nextQuestion('wrong');
    }
});

// function to hide and show start and quiz elements
function hideShow (show, hide, hide2) {
    show.removeClass('hidden');
    show.addClass('visible');
    hide.removeClass('visible');
    hide.addClass('hidden');
    hide2.removeClass('visible');
    hide2.addClass('hidden');
}

startButton.on('click', function () {
    hideShow(quizSection, startSection, highScore);
    startQuiz();
});

    // Questions are an array of question objects
var questionBank = [
    {
        question: 'what is 1 + 1?',
        answerA: 'javascript',
        answerB: 'javascript',
        answerC: 'javascript',
        answerD: 'javascript',
        correctAnswer: 'answerA',
    },
    {
        question: 'what is 2 + 1?',
        answerA: 'javascript',
        answerB: 'javascript',
        answerC: '4',
        answerD: '5',
        correctAnswer: 'answerA',
    },
    {
        question: 'what is 3 + 1?',
        answerA: 'javascript',
        answerB: 'javascript',
        answerC: '4',
        answerD: '5',
        correctAnswer: 'answerA',
    },
    {
        question: 'what is 4 + 1?',
        answerA: 'javascript',
        answerB: 'javascript',
        answerC: '4',
        answerD: '5',
        correctAnswer: 'answerA',
    },
    {
        question: 'what is 5 + 1?',
        answerA: 'javascript',
        answerB: 'javascript',
        answerC: '4',
        answerD: '5',
        correctAnswer: 'answerA',
    },
    {
        question: 'what is 6 + 1?',
        answerA: 'javascript',
        answerB: 'javascript',
        answerC: '4',
        answerD: '5',
        correctAnswer: 'answerA',
    },
]

