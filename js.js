// JavaScript for the Nihilism Quiz
document.getElementById("submit").addEventListener("click", function() {
    // Correct answers
    const answers = {
        question1: "b",
        question2: "b",
        question3: "b",
        question4: "a",
        question5: "a",
        question6: "b",
        question7: "a",
        question8: "b", // Placeholder for correct answers
        question9: "c",
        question10: "b"
    };

    let score = 0;

    // Loop through each question
    for (let key in answers) {
        const selected = document.querySelector(`input[name="${key}"]:checked`);
        if (selected && selected.value === answers[key]) {
            score++;
        }
    }

    // Display the score
    document.getElementById("score").style.display = "block";
    document.getElementById("scoreValue").textContent = `${score}/10`;
});