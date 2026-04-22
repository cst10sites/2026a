


var gameState = "wait"; // "wait", "started", "ended"
var startTime;

function react() {
	if (gameState == "wait") {
		document.getElementById('failOutput').innerHTML = "you failed due to clicking too soon, you must reset now.";
		gameState = "ended"
	}  
	
else {
	console.log("thing")
	gameState = "ended"
}

}

/* This code changes the background color to newColor!

Explanation: updateBackground is called every 0.1 sec by default
and generates a random decimal number between 0 and 1. If it
generates a number less than tolerance, it will change
the background color. The actual time it takes to change color is
random but by default its average time is
[interval time in sec] / [probability] = 0.1 / 0.02 = 5 seconds.
*/

var newColor = "red";
var startTime = new Date(); // n

function updateBackground() {
	// DO NOT MODIFY THIS CONDITION
	if (Math.random() < 0.02 && gameState == "wait") {
		document.body.style.backgroundColor = newColor;
		// Need to implement:
		// 1. start the timer, change gameState = true;
		// 2. show the timer on the screen; need to add a place in HTML
		// 3. change gameState to "started"

		gameState = "started"

		startTime = new Date();
		 
	}
	console.log(gameState);
	//if (gameState = "started") {  }

}

function reset() {
	window.location.reload();
}



// DO NOT MODIFY THIS LINE
setInterval(updateBackground, 100);

 

 function updateTime() {
 	



 	if (gameState == "started") {
 		var currentTime = new Date();
		var timePassed = (currentTime - startTime) / 1000;
		// recal: startTime is updated in start()
		document.getElementById('currentTimeOutput').innerHTML = timePassed;
 	}

 }



setInterval(updateTime, 100);