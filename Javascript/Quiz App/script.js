const quiz_start = () => {
    let startPage = document.getElementById("start_page")
    startPage.style.display = "none"

    let quiz_body = document.getElementsByClassName("main_content")[0]
    quiz_body.style.display = "flex"
}

const revTime = document.getElementById("timer");

let totalSec = 600;

const countdown = setInterval(() => {
    totalSec--;

    let minutes = Math.floor(totalSec / 60);
    let seconds = totalSec % 60;

    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    revTime.innerHTML = `${minutes}:${seconds}`;

    if (totalSec < 0) {
        clearInterval(countdown);

        revTime.innerHTML = "00:00";

        alert("⏰ Time's up!");
    }

}, 1000)

const quizData = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        options: [
            {text: "<script>", correct: true},
            {text: "<scripting>", correct: false},
            {text: "<javascript>", correct: false},
            {text: "<js>", correct: false},
        ]
    },
    {
        question: `What is the correct JavaScript syntax to change the content of the HTML element below.
        
        <p id="demo">This is a demonstration.</p>`,
        options: [
            {text:'document.getElementByName("p").innerHTML = "Hello World!"', correct:false},
            {text:'#demo.innerHTML = "Hello World!"', correct: true},
            {text:'document.getElement("p").innerHTML = "Hello World!"', correct: false},
            {text:'document.getElementbyclassName("p").innerHTML = "Hello World!"', correct: false},
        ]
    },
    {
        question: 'How do you write "Hello World" in an alert box?',
        options: [
            {text:'msgBox("Hello World");', correct: false},
            {text:'alertBox("Hello World");', correct: false},
            {text:'alert("Hello World");', correct: true},
            {text:'msg("Hello World");', correct: false},
        ]
    },
    {
        question: `What is the correct syntax for referring to an external script called "script.js"?`,
        options: [
            {text:`<script href="script.js">`, correct: false},
            {text:`<script src="script.js">`, correct: true},
            {text:`<script name="script.js">`, correct: false},
            {text:`<script alt="script.js">`, correct: false},
        ]
    },
    {
        question: "How to write an IF statement in JavaScript?",
        options: [
            {text:"if i = 5 then", correct: false},
            {text:"if i = 5", correct: false},
            {text:"if i == 5 then", correct: false},
            {text:"if (i == 5)", correct: true},
        ]
    },
    {
        question: "How does a FOR loop start?",
        options: [
            {text:"for (i = 0; i <= 5)", correct: false},
            {text:"for (i <= 5; i++)", correct: false},
            {text:"for i = 1 to 5", correct: false},
            {text:"for (i = 0; i <= 5; i++)", correct: true},
        ]
    },
    {
        question: "What is the correct way to write a JavaScript array?",
        options: [
            {text:'var colors = ["red", "green", "blue"]', correct: true},
            {text:'var colors = (1:"red", 2:"green", 3:"blue")', correct: false},
            {text:'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")', correct: false},
            {text:'var colors = "red", "green", "blue"', correct: false},
        ]
    },
    {
        question: "How do you find the number with the highest value of x and y?",
        options: [
            {text:"Math.max(x, y)", correct: true},
            {text:"ceil(x, y)", correct: false},
            {text:"top(x, y)", correct: false},
            {text:"Math.ceil(x, y)", correct: false},
        ]
    },
    {
        question: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
        options: [
            {text:'if (i != 5)', correct: true},
            {text:'if i <> 5', correct: false},
            {text:'if (i <> 5)', correct: false},
            {text:'if i =! 5 then', correct: false},
        ]
    },
    {
        question: "How do you round the number 7.25, to the nearest integer?",
        options: [
            {text:"round(7.25)", correct: false},
            {text:"Math.rnd(7.25)", correct: false},
            {text:"rnd(7.25)", correct: false},
            {text:"Math.round(7.25)", correct: true},
        ]
    }
]

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("options");
const nextButton = document.getElementById("nextBtn");

let currenQustionIndex = 0;
let score = 0;
