// whenever player clicked on an answer we move on the next question
    // changing content of question and answer tag by setting reference to the question object
// all the way till player done with the quiz
// after that player able to enter their initial and see the leader board

// variable to keep score, initials, different section of html 
var startSection = $('#start-section');
var startButton = $('#start-btn');
var quizSection = $('#quiz-section');
var userInfo = $('#user-info');
var scoreSection = $('#score-section');
var highScoreEl = $('#high-score');
var viewHighScoreEl = $('#view-high-score');
var timerEl = $('#timer');
var tryAgain = $('#try-again');

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

var currentQuestion;
var highScore = [];
var score;
var secondsLeft;
var randomizedQuestions = [];
var timer;

// Acceptance Criteria --- WHEN I click the start button, presented with a question
function startQuiz () {

    // reset to original state
    randomizedQuestions = shuffleQuestions(questionBank);
    score = 0;
    currentQuestion = 0;
    clearInterval(timer);

    // get high score from local-storage
    getHighScoreList ();

    // quiz starts
    secondsLeft = 40;
    timerStart();
    renderQuestions();
}

// count down timer function
function timerStart() {
    timer = setInterval (function() {
        secondsLeft--;
        timerEl.text(secondsLeft + "s left");
        // Acceptance Criteria --- timer reaches 0, the game is over
        if(secondsLeft <= 0) {
            gameOver();
        }
    }, 1000);
}

// shuffles questionBank and store into randomizedQuestion
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

// Acceptance Criteria --- answer a question , presented with another question
function nextQuestion (message) {

    // correct/wrong msg
    answerMessage.text('');
    if (message === 'correct') {
        score++;
        answerMessage.fadeIn(100);
        answerMessage.text('correct');
        answerMessage.fadeOut(900);
    } else if (message === 'wrong') {
        // Acceptance Criteria --- question incorrectly - subtracts time from the clock
        secondsLeft -= 5;
        answerMessage.fadeIn(100);
        answerMessage.text('wrong');
        answerMessage.fadeOut(900);
    }

    // check answer
    if (currentQuestion === randomizedQuestions.length - 1) {
        // Acceptance Criteria --- all questions are answered THEN Game is over
        gameOver();
    } else {
        currentQuestion++;
        renderQuestions();
    }
}

// game over function
function gameOver() {
    clearInterval(timer);
    timerEl.text("");
    hideShowEl(userInfo, quizSection, startSection);
    playerScore.text('Your score is ' + score + '/10');
}

// function to hide and show start and quiz elements
function hideShowEl (show, hide, hide2, hide3) {
    show.removeClass('hidden');
    show.addClass('visible');
    if (hide !== undefined) {
        hide.removeClass('visible');
        hide.addClass('hidden');
    }
    if (hide2 !== undefined) {
        hide2.removeClass('visible');
        hide2.addClass('hidden');
    }
    if (hide3 !== undefined) {
        hide3.removeClass('visible');
        hide3.addClass('hidden');
    }
}

// show high score when player clicks on high score or when game over
function getHighScoreList () {
    var storedScores = JSON.parse(localStorage.getItem('scoreHistory'));
    if (storedScores !== null) {
        highScore = storedScores;
    }
}

function storeHighScore () {
    localStorage.setItem("scoreHistory", JSON.stringify(highScore));
}

function renderHighScores () {
    hideShowEl(scoreSection, startSection, quizSection);
    highScoreEl.empty();

    for (var i = 0; i < highScore.length; i++) {
        var playerScore = highScore[i];
        var li = document.createElement("li");
        li.textContent = playerScore.initial + ' has score of ' + playerScore.playerScore + '/' + randomizedQuestions.length;
        highScoreEl.append(li);
    }

    hideShowEl(tryAgain);
}

// detect what answer button player selected
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

// listens to view high score button
viewHighScoreEl.on('click', function() {
    clearInterval(timer);
    timerEl.text('');
    renderHighScores();
});

// Acceptance Criteria --- WHEN I click the start button, presented with a question
startButton.on('click', function () {
    hideShowEl(quizSection, startSection, scoreSection);
    hideShowEl(timerEl);
    startQuiz();
});

// listens to try again a tag
tryAgain.on('click', function() {
    startQuiz();
});

// Acceptance Criteria --- WHEN the game is over THEN I can save my initials and score
initialFormEl.on('submit', function(event) {
    event.preventDefault();

    // stores enter initial and score into highScore array
    var playerInitial = $('input[name=initial]').val();
    if (playerInitial === "") {
        alert("Please Enter your initials");
        return;
    }
    var player = {
        initial: playerInitial,
        playerScore: score
    }
    highScore.push(player);

    playerInitial = "";
    $('input[name=initial]').addClass('hidden');
    storeHighScore();
    renderHighScores();
});

// quiz questions
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

