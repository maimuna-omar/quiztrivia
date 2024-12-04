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
  
  // Function to display the current question and options
  function displayQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
  
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
  
    // Clear previous options and dynamically add new ones
    optionsElement.innerHTML = ""; 
    currentQuestion.options.forEach((option, index) => {
      const optionHTML = `
        <label>
          <input type="radio" name="answer" value="${String.fromCharCode(97 + index)}">
          ${option}
        </label>
        <br>
      `;
      optionsElement.innerHTML += optionHTML;
    });
  }
  
  // Function to handle answer submission
  function submitAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) {
      alert("Please select an answer before submitting!");
      return;
    }
  
    // Check if the selected answer is correct
    const selectedValue = selectedOption.value;
    const correctAnswer = questions[currentQuestionIndex].correct;
    if (selectedValue === correctAnswer) {
      score++;
    }
  
    // Move to the next question or show the final result
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      displayQuestion();
    } else {
      showFinalResult();
    }
  }
  
  // Function to display the final score and feedback
  function showFinalResult() {
    const quizContainer = document.getElementById("quiz-container");
    const resultContainer = document.getElementById("result");
  
    quizContainer.style.display = "none"; // Hide the quiz
    resultContainer.style.display = "block"; // Show the result
  
    // Generate feedback based on the score
    let feedback;
    if (score === questions.length) {
      feedback = "Excellent work! You got all the answers correct.";
    } else if (score >= questions.length / 2) {
      feedback = "Good job! You answered more than half correctly.";
    } else {
      feedback = "Keep practicing to improve your understanding!";
    }
  
    // Show the final score and feedback
    resultContainer.innerHTML = `
      <h2>Quiz Completed!</h2>
      <p>Your score: ${score}/${questions.length}</p>
      <p>${feedback}</p>
    `;
  }
  
  // Initialize the quiz on page load
  window.onload = displayQuestion;
  
  // Add event listener for the submit button
  document.getElementById("submit").addEventListener("click", submitAnswer);
  
