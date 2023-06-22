// Array of question objects
let quizData = {
    q1: {
        questionText: "What is your Father's Name?",
        options: ["Father 1", "Father 2", "Father 3", "Father 4"],
        correctAnswer: "Father 3"
    },
    q2: {
        questionText: "Who is your Father?",
        options: ["Father 1", "Father 2", "Father 3", "Father 4"],
        correctAnswer: "Father 1"
    },
    q3: {
        questionText: "Why is your Father's Name?",
        options: ["Father 1", "Father 2", "Father 3", "Father 4"],
        correctAnswer: "Father 4"
    },
    q4: {
        questionText: "How is your Father's Name?",
        options: ["Father 1", "Father 2", "Father 3", "Father 4"],
        correctAnswer: "Father 2"
    }
};

let currentQuestionIndex = 0;
let score = 0;

// Display Question
function displayQuestion() {
    let questionEl = document.getElementById('question');
    let optionEl = document.getElementById('options');

    let questionId = "q" + (currentQuestionIndex + 1);
    let currentQuestion = quizData[questionId];

    questionEl.innerText = "Q" + (currentQuestionIndex + 1) + ". " + currentQuestion.questionText;

    let optionsHtml = "";
    currentQuestion.options.forEach(function (option) {
        optionsHtml += "<li>" + option + "</li>";
    });
    optionEl.innerHTML = optionsHtml;

    let progressEl = document.getElementById('progress');
    progressEl.innerText = "Question " + (currentQuestionIndex + 1) + " of " + Object.keys(quizData).length;

    // Remove previous event listeners
    let listEl = document.getElementsByTagName('li');
    for (let i = 0; i < listEl.length; i++) {
        listEl[i].removeEventListener("click", handleAnswerClick);
    }

    // Add event listeners to the new answer options
    for (let i = 0; i < listEl.length; i++) {
        listEl[i].addEventListener("click", handleAnswerClick);
    }
}
displayQuestion();



let listEl = document.getElementsByTagName('li');
for (let i = 0; i < listEl.length; i++) {
    listEl[i].addEventListener("click", handleAnswerClick);
}


function handleAnswerClick(event) {
    let scoreEl = document.getElementById('score');
    let selectedAnswer = event.target.textContent;
  
    let questionId = "q" + (currentQuestionIndex + 1);
    let currentQuestion = quizData[questionId];
  
    let options = event.target.parentNode.getElementsByTagName('li');
    for (let i = 0; i < options.length; i++) {
      options[i].classList.remove('selected');
    }
  
    if (selectedAnswer === currentQuestion.correctAnswer) {
      score++;
      scoreEl.innerText = "Score: " + score;
      event.target.style.backgroundColor = "#4CAF50";
    } else {
      event.target.style.backgroundColor = "#f44336";
    }
  
    event.target.classList.add('selected');
  }


let nextButton = document.getElementById('next-button');
console.log(nextButton);
nextButton.addEventListener('click', goToNextQuestion);

function goToNextQuestion() {
    currentQuestionIndex++;
    // console.log(currentQuestionIndex);

    if (currentQuestionIndex < Object.keys(quizData).length) {
        displayQuestion()
    } else {
        alert("Game Over");
    }
}