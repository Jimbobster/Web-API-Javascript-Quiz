document.addEventListener("DOMContentLoaded", function () {
// DOM elements
    const startButton = document.getElementById("start");
    const questionTitle = document.getElementById("question-title");
    const choicesContainer = document.getElementById("choices");
    const feedbackContainer = document.getElementById("feedback");
    const timerElement = document.getElementById("time");
    const initialsInput = document.getElementById("initials");
    const submitButton = document.getElementById("submit");
    const endScreen = document.getElementById("end-screen");
    const startScreen = document.getElementById("start-screen");
    const questionsScreen = document.getElementById("questions");

     // Quiz state
  let currentQuestionIndex = 0;
  let timeLeft = 60;
  let timer;

  // Event listeners
  startButton.addEventListener("click", startQuiz);
  choicesContainer.addEventListener("click", handleChoiceClick);
  submitButton.addEventListener("click", saveScore);

  function startQuiz() {
    startScreen.classList.add("hide");
    questionsScreen.classList.remove("hide");

    // Start the timer
    timer = setInterval(function () {
      timerElement.textContent = timeLeft;
      timeLeft--;

      if (timeLeft < 0) {
        endQuiz();
      }
    }, 1000);

    showQuestion();
  }

  function showQuestion() {
    const currentQuestion = window.questions[currentQuestionIndex];

    questionTitle.textContent = currentQuestion.question;
    choicesContainer.innerHTML = "";

    currentQuestion.choices.forEach(function (choice) {
      const button = document.createElement("button");
      button.textContent = choice;
      choicesContainer.appendChild(button);
    });
  }

