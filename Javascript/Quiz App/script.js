/* === Quiz Start page === */
const quiz_start = () => {
    let startPage = document.getElementById("start_page")
    startPage.style.display = "none"

    let quiz_body = document.getElementsByClassName("main_content")[0]
    quiz_body.style.display = "flex"


    /* === Timer === */
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

    /* === Quiz Data === */
    const quizData = [
        {
            question: "Inside which HTML element do we put the JavaScript?",
            options: [
                "<script>",
                "<scripting>",
                "<javascript>",
                "<js>",
            ],
            correct: 0
        },
        {
            question: `What is the correct JavaScript syntax to change the content of the HTML element below?
            <p id="demo">This is a demonstration.</p>`,
            options: [
                'document.getElementByName("p").innerHTML = "Hello World!"',
                'document.getElementById("demo").innerHTML = "Hello World!"',
                'document.getElement("p").innerHTML = "Hello World!"',
                'document.getElementbyclassName("p").innerHTML = "Hello World!"',
            ],
            correct: 1
        },
        {
            question: 'How do you write "Hello World" in an alert box?',
            options: [
                'msgBox("Hello World");',
                'alertBox("Hello World");',
                'alert("Hello World");',
                'msg("Hello World");',
            ],
            correct: 2
        },
        {
            question: `What is the correct syntax for referring to an external script called "script.js"?`,
            options: [
                `<script src="script.js">`,
                `<script href="script.js">`,
                `<script name="script.js">`,
                `<script alt="script.js">`,
            ],
            correct: 0
        },
        {
            question: "How to write an IF statement in JavaScript?",
            options: [
                "if i = 5 then",
                "if i = 5",
                "if i == 5 then",
                "if (i == 5)"
            ],
            correct: 3
        },
        {
            question: "How does a FOR loop start?",
            options: [
                "for (i = 0; i <= 5)",
                "for (i = 0; i <= 5; i++)",
                "for (i <= 5; i++)",
                "for i = 1 to 5",
            ],
            correct: 1
        },
        {
            question: "What is the correct way to write a JavaScript array?",
            options: [
                'var colors = ["red", "green", "blue"]',
                'var colors = (1:"red", 2:"green", 3:"blue")',
                'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")',
                'var colors = "red", "green", "blue"',
            ],
            correct: 0
        },
        {
            question: "How do you find the number with the highest value of x and y?",
            options: [
                "ceil(x, y)",
                "top(x, y)",
                "Math.max(x, y)",
                "Math.ceil(x, y)",
            ],
            correct: 2
        },
        {
            question: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
            options: [
                'if i <> 5',
                'if (i != 5)',
                'if (i <> 5)',
                'if i =! 5 then',
            ],
            correct: 1
        },
        {
            question: "How do you round the number 7.25, to the nearest integer?",
            options: [
                "round(7.25)",
                "Math.rnd(7.25)",
                "rnd(7.25)",
                "Math.round(7.25)"
            ],
            correct: 3
        }
    ]

    /* === Variables / DOM === */

    const questionElement = document.getElementById("question");

    const optionsList = document.getElementById("options");

    const questionCount = document.getElementById("questionCount");

    const progressPercent = document.getElementById("progressPercent");

    const progressFill = document.getElementById("progressFill");

    const previousBtn = document.getElementById("previousBtn");

    const nextBtn = document.getElementById("nextBtn");

    const totalQuestion = document.getElementById("totalQuestion");

    const correctValue = document.getElementById("correctValue");

    const wrongValue = document.getElementById("wrongValue");

    const timeLeft = document.getElementById("timeLeft");

    const scorePage = document.getElementById("score_page");

    function renderQuestion() {
        const question = quizData[currentQuestion]

        selectAnswer = null;

        nextBtn.disabled = true;

        const progress = (currentQuestion / quizData.length) * 100;

        progressFill.style.width = progress + '%';

        progressFill.setAttribute("aria-valuenow", progress)

        questionCount.textContent = `Question  ${currentQuestion + 1} of ${quizData.length}`

        questionElement.innerText = `Q${currentQuestion + 1}. ${question.question}`

    }

    renderQuestion()
}


function restart_quiz() {
    quiz_start();
}
