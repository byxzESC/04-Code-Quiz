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
    console.log('startQuiz check');
    randomizedQuestions = shuffleQuestions(questionBank);
    renderQuestion();
    renderAnswers();
}
// randomize the questionBank objects array
function shuffleQuestions (questions) {
    console.log('shuffle questions check');
    var result;
    result = questions.sort(function() {
        return Math.random() - 0.5;
    });
    return result;
}

function renderQuestion() {
    console.log('render question check');
    console.log(randomizedQuestions[currentQuestion].question);
    questionElement.text(randomizedQuestions[currentQuestion].question);
}

// function for rendering answers
function renderAnswers() {
    console.log('render answer check');
    buttonA.text(randomizedQuestions[currentQuestion].answerA);
    buttonB.text(randomizedQuestions[currentQuestion].answerB);
    buttonC.text(randomizedQuestions[currentQuestion].answerC);
    buttonD.text(randomizedQuestions[currentQuestion].answerD);
}

// correct/wrong msg
function nextQuestion (message) {
    if (message === 'correct') {
        answerMessage.text('correct');
        setTimeout(function() {
            answerMessage.style.opacity = 0;
        }, 1000 * 0.8);
    } else {
        answerMessage.fadeout.text('wrong');
    }

    // next question
    currentQuestion++;
    renderQuestion();
    renderAnswers();
}

buttonA.on('click', function() {
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
function hideShow (hide, show) {
    console.log('hideshow function check')
    hide.removeClass('visible');
    hide.addClass('hidden');
    show.removeClass('hidden');
    show.addClass('visible');
}

startButton.on('click', function () {
    console.log('start button check')
    hideShow(startSection, quizSection);
    startQuiz();
});

    // Questions are an array of question objects
var questionBank = [
    {
        question: 'what is 1 + 1?',
        answerA: '2',
        answerB: '3',
        answerC: '4',
        answerD: '5',
        correctAnswer: 'answerA',
    },
    {
        question: 'what is 2 + 1?',
        answerA: '2',
        answerB: '3',
        answerC: '4',
        answerD: '5',
        correctAnswer: 'answerA',
    },
    {
        question: 'what is 3 + 1?',
        answerA: '2',
        answerB: '3',
        answerC: '4',
        answerD: '5',
        correctAnswer: 'answerA',
    },
    {
        question: 'what is 4 + 1?',
        answerA: '2',
        answerB: '3',
        answerC: '4',
        answerD: '5',
        correctAnswer: 'answerA',
    },
    {
        question: 'what is 5 + 1?',
        answerA: '2',
        answerB: '3',
        answerC: '4',
        answerD: '5',
        correctAnswer: 'answerA',
    },
    {
        question: 'what is 6 + 1?',
        answerA: '2',
        answerB: '3',
        answerC: '4',
        answerD: '5',
        correctAnswer: 'answerA',
    },
]

