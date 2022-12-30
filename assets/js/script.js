// AS A coding boot camp student
// I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
// SO THAT I can gauge my progress compared to my peers

// GIVEN I am taking a code quiz

// WHEN I click the start button
// THEN a timer starts and I am presented with a question

// WHEN I answer a question
// THEN I am presented with another question

// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock

// WHEN all questions are answered or the timer reaches 0
// THEN the game is over

// WHEN the game is over
// THEN I can save my initials and score

// variable to keep score, initials, different section of html 
// listener for start button
var startElement = document.getElementById("start-section");
var startButton = document.getElementById("start-btn");

var quizElement = document.getElementById("quiz-section");
var questionElement = document.getElementById("question");
var choicesElement = document.getElementById("choices");

// Questions are an array of question objects
var questions = [
    {
        question: 'what is 1 + 1?',
        choice1: '2',
        choice2: '3',
        choice3: '4',
        choice4: '5',
        answer: 1,
    },
    {
        question: 'what is 2 + 2?',
        choice1: '2',
        choice2: '3',
        choice3: '4',
        choice4: '5',
        answer: 3,
    }
]

// function for starting the quiz
function startQuiz () {
    hideShow(startElement, quizElement);
}

// function for selecting answer
function selectAnswer() {

}


// function to hide and show start and quiz elements
function hideShow (hide, show) {
    hide.classList.replace("visible", "hidden");
    show.classList.replace("hidden", "visible");
}

startButton.addEventListener("click", function () {
    console.log("game start");
    startQuiz();
});





// function that starts the quiz 
// startButton.addEventListener("click", function() {
//     console.log('start button clicked!');
//     hideShow(startElement, quizElement)
//     quiz();
// })

    // // get the element by its ID to add or remove, the hidden or visible class.
    // // if hidden argument doesn't have hidden
    // if (Object.values(hidden.classList).includes('hidden')) {
        
    // }
    //     // add hidden class to the hidden argument  
    //     console.log(hidden.classList);
    //     // add visible class to the visible argument
    // // else replace their classes