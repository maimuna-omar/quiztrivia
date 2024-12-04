// Questions and answers stored directly in the script
const questions = [
    {
      question: "1.	What is nihilism?",
      options: [
        "A belief in the afterlife",
        "A rejection of all religious and moral principles",
        "A form of optimism",
        "An acceptance of all social norms",
       ],
      correct: "b",
    },
    {
      question: "2.	Which philosopher is most commonly associated with nihilism?",
      options: [
        "Immanuel Kant",
        "Friedrich Nietzsche",
        "John Locke",
        "Søren Kierkegaard",

      ],
      correct: "b",
    },
    {
      question: "3.	What does existential nihilism specifically deny?",
      options: [
        "The existence of the universe",
        "The meaning or value of human life",
        "The reality of physical objects",
        "The need for government",

      ],
      correct: "b",
    },
    {
      question: "4. Which literary work is often considered a key text in the discussion of nihilism?",
      options: [
        "Crime and Punishment by Fyodor Dostoevsky",
        "Pride and Prejudice by Jane Austen",
        "Moby-Dick by Herman Melville",
        "The Great Gatsby by F. Scott Fitzgerald",

      ],
      correct: "a",
    },
    {
      question: "5.	Nihilism is often seen as a response to which of the following?",
      options: [
         
        "Enlightenment rationalism",
        " Romanticism",
        "Industrial Revolution",
        "Medieval scholasticism",
       
      ],
      correct: "a",
    },
    {
      question: "6.	What is moral nihilism?",
      options: [
        "The belief that morality is objective and universal",
        "The belief that moral truths do not exist",
        "The belief in strict adherence to laws",
        "The belief in a divine moral order",

      ],
      correct: "b",
    },
    {
        question: "7. Which concept is closely related to nihilism and emphasizes the absurdity of life?",
        options: [
            "Absurdism",
            "Humanism",
            "Platonism",
            "Determinism",
  
        ],
        correct: "a",
    },
    {
            question: "8. Nihilism often questions the value of which of the following?",
            options: [
                "Scientific discoveries",
                "Economic policies",
                "Social traditions and norms",
                "Environmental conservation",
      
            ],
            correct: "c",
    },
    {
            question: "9. How does political nihilism view established institutions and values?",
            options: [
                "It supports them strongly",
                "It seeks to reform them",
                "It advocates for their complete destruction",
                "It is indifferent towards them",
      
            ],
            correct: "c",
    },
    {
            question: "10.	Which movement or ideology is often seen as the opposite of nihilism?",
            options: [
                "Optimism",
                "Existentialism",
                "Marxism",
                "Realism",
            ],
            correct: "a",
    },

  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const quizContainer = document.getElementById("quiz");
    const submitButton = document.getElementById("submit");
    const timerElement = document.getElementById("timer");
    const scoreElement = document.getElementById("score");
    const scoreValueElement = document.getElementById("scoreValue");
    const resultElement = document.getElementById("result");

    function loadQuestion() {
      const currentQuestion = quizData[currentQuestionIndex];
      quizContainer.innerHTML = `
        <p>${currentQuestion.question}</p>
        ${currentQuestion.options
          .map(
            (option, index) => `
          <div>
            <input type="radio" name="option" id="option${index}" value="${option}">
            <label for="option${index}">${option}</label>
          </div>
        `
          )
          .join("")}
      `;
    }

    function showFinalScore() {
      quizContainer.innerHTML = "";
      submitButton.style.display = "none";
      scoreElement.style.display = "block";
      scoreValueElement.textContent = `${score}/${quizData.length}`;
      resultElement.style.display = "block";
      resultElement.textContent =
        score >= quizData.length / 2
          ? "Great job!"
          : "Keep practicing.";
    }

    function startTimer() {
      let timeLeft = 20;
      timerElement.textContent = `Time left: ${timeLeft}s`;
      const timer = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `Time left: ${timeLeft}s`;
        if (timeLeft <= 0) {
          clearInterval(timer);
          alert("Time's up!");
          handleSubmit();
        }
      }, 1000);
    }

    function handleSubmit() {
      const selectedOption = document.querySelector(
        'input[name="option"]:checked'
      );
      if (selectedOption) {
        if (selectedOption.value === quizData[currentQuestionIndex].correct) {
          score++;
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
          loadQuestion();
          startTimer();
        } else {
          showFinalScore();
        }
      } else {
        alert("Please select an option!");
      }
    }

    submitButton.addEventListener("click", handleSubmit);

    // Load the first question
    loadQuestion();
    startTimer();
  
