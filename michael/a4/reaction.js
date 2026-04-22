var gameState = "started"; 
var startTime = 0;
var timeInterval;

function react() {
	if (gameState === "started") {
		var currentTime = new Date();
		var timePassed = (currentTime - startTime) / 1000;
		document.getElementById("output").innerHTML = "Your reaction time is" + timePassed.toFixed(2) + "secondes.";
		gameState = "end";
		clearInterval(timeInterval);
	}

	else if (gameState != "started"){
		document.getElementById("output").innerHTML = "Too soon"
		gameState = "end";
	}
}


var startColor = "green"

function updateBackground() {
		// DO NOT MODIFY THIS CONDITION
	if (Math.random() < 0.02 && gameState === "started") {
		document.body.style.backgroundColor = startColor
		gameState = "started";
		startTime = new Date();

		timeInterval = setInterval(updateTime, 10)
	}
}

function updateTime() {
	if (gameState === "started") {
		var currentTime = new Date();
		var timePassed = (currentTime - startTime)/1000;
		document.getElementById("timer").innerHTML = timePassed.toFixed(2);
	}
}

function reset() {
	window.location.reload()
}


	setInterval(updateBackground, 100);