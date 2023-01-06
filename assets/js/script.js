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
var userInfo = $('#user-info');
var highScoreEl = $('#high-score');
var scoreBoard = $('#score-board');
var tryAgain = $('try-again');

// quiz question and answers variables
var questionEl = $('#question');
var buttonA = $('#buttonA');
var buttonB = $('#buttonB');
var buttonC = $('#buttonC');
var buttonD = $('#buttonD');
var answerMessage = $('#answer-message');

// variable for timer and high score
var playerScore = $('#player-score');
var initialFormEl = $('#initial-form');
var timerEl = $('#timer');
var timer;
var secondsLeft;

var randomizedQuestions = [];
var currentQuestion;
var score;
var highScore = [];

// whenever player clicked on an answer we move on the next question
    // changing content of question and answer tag by setting reference to the question object
// all the way till player done with the quiz
// after that player able to enter their initial and see the leader board

// function for starting the quiz
    // randomized questions
    // start timer
    // show questions and answers
function startQuiz () {
    randomizedQuestions = shuffleQuestions(questionBank);
    score = 0;
    currentQuestion = 0;
    clearInterval(timer);
    highScoreEl.text('');
    secondsLeft = 40;
    timerStart();
    renderQuestions();
}

function timerStart() {
    timer = setInterval (function() {
        secondsLeft--;
        timerEl.text(secondsLeft + " left");
        if(secondsLeft === 0) {
            gameOver();
        }
    }, 1000);
}

// randomize the questionBank objects array
function shuffleQuestions (questions) {
    var result;
    result = questions.sort(function() {
        return Math.random() - 0.5;
    });
    return result;
}

function renderQuestions() {
    questionEl.text(randomizedQuestions[currentQuestion].question);
    buttonA.text(randomizedQuestions[currentQuestion].answerA);
    buttonB.text(randomizedQuestions[currentQuestion].answerB);
    buttonC.text(randomizedQuestions[currentQuestion].answerC);
    buttonD.text(randomizedQuestions[currentQuestion].answerD);
}

function nextQuestion (message) {
    answerMessage.text('');
    // correct/wrong msg
    if (message === 'correct') {
        score++;
        answerMessage.fadeIn(100);
        answerMessage.text('correct');
        answerMessage.fadeOut(900);
    } else if (message === 'wrong') {
        answerMessage.fadeIn(100);
        answerMessage.text('wrong');
        answerMessage.fadeOut(900);
    }

    // check answer
    // randomizedQuestions.length - 1
    if (currentQuestion === 2) {
        gameOver();
    } else {
        currentQuestion++;
        renderQuestions();
    }
}

function gameOver() {
    clearInterval(timer);
    timerEl.text("");
    hideShow(userInfo, quizSection, startSection);
    playerScore.text('Your score is ' + score + '/10');
}

// function to hide and show start and quiz elements
function hideShow (show, hide, hide2) {
    show.removeClass('hidden');
    show.addClass('visible');
    hide.removeClass('visible');
    hide.addClass('hidden');
    hide2.removeClass('visible');
    hide2.addClass('hidden');
}

// function handleFormSubmit (e) {
//     console.log('form submitted');
//     e.preventDefault();
//     // playerInitial = $('input[name=initial]').val();
//     localStorage.setItem('scoreHistory', JSON.stringify(highScore));
// }

// show high score when player clicks on high score or when game over
function highScoreList () {
    var storedScores = JSON.parse(localStorage.getItem('scoreHistory'));
    if (storedScores !== null) {
        highScore = storedScores;
    }
    renderHighScores();
}

function renderHighScores () {
    highScoreEl.innerHTML = "";

    for (var i = 0; i < highScore.length; i++) {
        var playerScore = highScore[i];
        var li = document.createElement("li");
        li.textContent = playerScore.initial + ' has score of ' + playerScore.playerScore + ' points.';
        highScoreEl.append(li);
    }

    tryAgain.addClass('visible');
}

tryAgain.on('click', function() {
    startQuiz();
});

scoreBoard.on('click', function() {
    hideShow(highScoreEl, startSection, quizSection);
    renderHighScores();
});

startButton.on('click', function () {
    hideShow(quizSection, startSection, highScoreEl);
    startQuiz();
});

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

initialFormEl.on('submit', function(event) {
    event.preventDefault();

    var playerInitial = $('input[name=initial]').val();
    if (playerInitial === "") {
        return;
    }
    var player = {
        initial: playerInitial,
        playerScore: score
    }
    highScore.push(player);
});

// Questions are an array of question objects
var questionBank = [
    {
        question: 'What are not JavaScript Data Types?',
        answerA: 'number',
        answerB: 'boolean',
        answerC: 'object',
        answerD: 'null',
        correctAnswer: 'answerD',
    },
    {
        question: 'Which company developed JavaScript?',
        answerA: 'Netscape',
        answerB: 'Alphabet',
        answerC: 'Microsoft',
        answerD: 'Oracle',
        correctAnswer: 'answerA',
    },
    {
        question: 'Which symbol is used for comments in Javascript?',
        answerA: '//',
        answerB: '/! !/',
        answerC: '#',
        answerD: '$',
        correctAnswer: 'answerA',
    },
    {
        question: 'What is === operator?',
        answerA: 'or',
        answerB: 'equality',
        answerC: 'assignment',
        answerD: 'strict equality',
        correctAnswer: 'answerD',
    },
    {
        question: 'What are not looping structures in JavaScript?',
        answerA: 'while',
        answerB: 'for',
        answerC: 'do-while',
        answerD: 'if',
        correctAnswer: 'answerD',
    },
    {
        question: 'What would be the result of 3+2+"7"?',
        answerA: '12',
        answerB: '327',
        answerC: '57',
        answerD: '39',
        correctAnswer: 'answerC',
    },
    {
        question: 'What are not a type of Pop up boxes available in JavaScript?',
        answerA: 'alert',
        answerB: 'confirm and',
        answerC: 'prompt',
        answerD: 'console.log',
        correctAnswer: 'answerD',
    },
    {
        question: 'What does typeof function returns?',
        answerA: 'type of object',
        answerB: 'type of variable',
        answerC: 'type of function',
        answerD: 'type of boolean',
        correctAnswer: 'answerB',
    },
    {
        question: 'What is the data type of variables in JavaScript?',
        answerA: 'variable',
        answerB: 'constants',
        answerC: 'object data',
        answerD: 'array',
        correctAnswer: 'answerC',
    },
    {
        question: 'How many array is [[[]]] represents?',
        answerA: '1',
        answerB: '2',
        answerC: '3',
        answerD: '4',
        correctAnswer: 'answerC',
    },
]

