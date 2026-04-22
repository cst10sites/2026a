var gameState = "wait"; // "wait", "started", "ended"
var startTime = 0;
var timerInterval;

function react() {
    if (gameState == "wait") {
        // Clicked too soon
        document.getElementById("output").innerHTML = "Too soon! Game over.";
        gameState = "ended";
    }
    else if (gameState == "started") {
        // Clicked at right time
        var endTime = new Date();
        var reactionTime = (endTime - startTime) / 1000;
        document.getElementById("output").innerHTML = "Your time: " + reactionTime.toFixed(3) + " seconds";
        gameState = "ended";
        clearInterval(timerInterval);
    }
}

function resetGame() {
    location.reload();
}

function updateTime() {
    if (gameState == "started") {
        var currentTime = new Date();
        var timePassed = (currentTime - startTime) / 1000;
        document.getElementById("timer").innerHTML = timePassed.toFixed(3);
    }
}

var newColor = "red";

function updateBackground() {
    // DO NOT MODIFY THIS CONDITION
    if (Math.random() < 0.02 && gameState == "wait") {
        document.body.style.backgroundColor = newColor;
        // Start the game
        gameState = "started";
        startTime = new Date();
        // Start updating timer
        timerInterval = setInterval(updateTime, 10);
        
        document.querySelector("button").innerHTML = "CLICK NOW!";
    }
}

// DO NOT MODIFY THIS LINE
setInterval(updateBackground, 100);
