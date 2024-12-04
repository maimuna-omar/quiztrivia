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



//Time Countdown
let timer;
let time left = 20; // 20 seconds per question

function start Timer() {
timeLeft = 20;
document.getElementById("timer").textContent = Time left: ${timeLeft}s;
timer = setInterval(() => {
timeLeft--;
document.getElementById("timer").textContent = Time left: ${timeLeft}s;
if (timeLeft <= 0) {
clearInterval(timer);
alert("Time's up!");
moveToNextQuestion();
}
}, 1000);
}

function stop Timer() {
clear Interval(timer);
}

// Call start Timer() when loading each question and stop Timer() when moving to the next.



//Saves Highscores
function saveHighScore(score, name) {
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
highScores.push({ score, name });
highScores.sort((a, b) => b.score - a.score);
localStorage.setItem("highScores", JSON.stringify(highScores.slice(0, 5))); // Top 5
}


//Display Leaderboard
function displayLeaderboard() {
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const leaderboard = highScores.map((entry, index) => ${index + 1}. ${entry.name}: ${entry.score}).join('
');
document.getElementById("leaderboard").innerHTML = leaderboard;
}
