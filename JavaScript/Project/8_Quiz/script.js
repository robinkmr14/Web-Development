
const questions = [
    {
        question: "What is the full form of HTML ?",
        answers: [
            { text: "Hello To My Land", correct: false },
            { text: "Hey Text Markup Language", correct: false },
            { text: "Hyper Text Makeup Language", correct: false },
            { text: "Hyper Text Markup Language", correct: true }

        ]
    },

    {
        question: "What is the full form of CSS ?",
        answers: [
            { text: "Cascading Style Sheets", correct: true },
            { text: "Casting Style Sheets", correct: false },
            { text: "Cartoon Style Sheets", correct: false },
            { text: "Cascading Super Sheets", correct: false }

        ]
    },

    {
        question: "What is the full form of JS ?",
        answers: [
            { text: "JavaSuper", correct: false },
            { text: "Javason", correct: false },
            { text: "JavaScript", correct: true },
            { text: "JavaSccript", correct: false }

        ]
    },

    {
        question: "What is the full form of HTTP ? ",
        answers: [
            { text: "Hyper Text Transfer Product", correct: false },
            { text: "Hyper Text Test Protocol", correct: false },
            { text: "Hyper Text Transfer Protocol", correct: true },
            { text: "Hyper Text Test Print", correct: false }

        ]
    }
];

const questionElement = document.getElementById("questions");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "next";
    showQuestion();
}

function showQuestion() {

    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButton.appendChild(button);

        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);

    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";

    if (isCorrect) {
        selectedButton.classList.add("correct");
        score++;
    }
    else {
        selectedButton.classList.add("incorrect")
    }

    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length} 🥳🥳`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block"
}

function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    }
    else {
        startQuiz();
    }
});

startQuiz();