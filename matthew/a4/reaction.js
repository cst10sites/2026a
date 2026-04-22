var gameState = "wait";
var startTime;
var endTime;
var timeoutID;

const outputElement = document.getElementById("output");
const bodyElement = document.body;
const actionButton = document.getElementById("actionButton");


function react() {
    if (gameState === "wait") {
        gameOver("You clicked too soon.");
    } else if (gameState === "started") {
        stopTimer();
    }
}

function gameOver(message) {
    gameState = "ended";
    outputElement.textContent = message;
    bodyElement.style.backgroundColor = "red";
    if (timeoutID) {
        clearTimeout(timeoutID);
    }
    actionButton.disabled = false;
}

function stopTimer() {
    endTime = new Date();
    var reactionTime = endTime - startTime;
    var reactionTimeSec = (reactionTime / 1000);
    gameState = "ended";
    outputElement.textContent = "Your reaction time is: " + reactionTime / 1000 + "seconds.";
    bodyElement.style.backgroundColor = "black";
    actionButton.disabled = true;
}

function changeColor(newCol) {
    bodyElement.style.backgroundColor = newCol;
}

function startTimer() {
    var randomTime = Math.random() * 5000 + 1000;
    timeoutID = setTimeout(function() {
        changeColor("forestgreen");
        gameState = "started";
        startTime = new Date();
        outputElement.textContent = "CLICK NOW!";
    }, randomTime);
}
window.onload = startTimer;