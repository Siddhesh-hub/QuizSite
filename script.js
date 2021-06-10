const quizData = [
  {
    question: "Which type of JavaScript language is ___",
    a: "Object-Oriented",
    b: "Object-Based",
    c: "Assembly-language",
    d: "High-level",
    correct: "b"
  },
  {
    question:
      "Which one of the following also known as Conditional Expression:",
    a: "Alternative to if-else",
    b: "Switch statement",
    c: "If-then-else statement",
    d: "immediate if",
    correct: "d"
  },
  {
    question: "In JavaScript, what is a block of statement?",
    a: "Conditional block",
    b: "block that combines a number of statements into a single compound statement",
    c: "both conditional block and a single statement",
    d: "block that contains a single statement",
    correct: "b"
  },
  {
    question:
      "When interpreter encounters an empty statements, what it will do:",
    a: "Shows a warning",
    b: "Prompts to complete the statement",
    c: "Throws an error",
    d: "Ignores the statements",
    correct: "d"
  },
  {
    question: "The function and var are known as:",
    a: "Keywords",
    b: "Data types",
    c: "Declaration statements",
    d: "Prototypes",
    correct: "c"
  },
  {
    question:
      "Which one of the following is the correct way for calling the JavaScript code?",
    a: "Preprocessor",
    b: "Triggering Event",
    c: "RMI",
    d: "Function/Method",
    correct: "d"
  }
];


const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submitBtn");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>Your score: </h2>
                 <p id="score">${score}/${quizData.length} </p>
                
                <button onclick="location.reload()">Start again</button>
            `;
        }
    }
});
