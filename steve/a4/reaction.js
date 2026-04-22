var gameState = "wait"; // "wait", "started", "ended"
var startTime;
var clicked = false;

    	function react() {
    		if (gameState === "wait") {
    			document.getElementById("message").innerHTML =
    			"Game Over! You clicked before the colour changed";
    			gameState="ended";
    			return;
    		}

    		if (gameState === "started" && !clicked) {
    			clicked = true;
    			clearInterval(timerInterval);

    			var reactionTime =	(Date.now() - startTime) / 1000;
    			var timeText = reactionTime.toFixed(3) + " seconds";

    			document.getElementById("output").innerHTML = timeText;
    			document.getElementById("timerOutput").innerHTML = 
    			"Your reaction time: " + reactionTime.toFixed(3) + " seconds";
    			gameState="ended";	
    		}
    		// Need to implement
    		// 1. display game over if the button is pressed too soon
    		// 2. stop the timer if the start has already been started
    		// 3. change gameState to "ended"
    	}

    	function reset(){
    		window.location.reload();
    	}

    	/* This code changes the background color to newColor!

	   Explanation: updateBackground is called every 0.1 sec by default
	   and generates a random decimal number between 0 and 1. If it
	   generates a number less than tolerance, it will change
	   the background color. The actual time it takes to change color is
	   random but by default its average time is
	   [interval time in sec] / [probability] = 0.1 / 0.02 = 5 seconds.
    	*/

    	var newColor = "blue";
		let timerInterval;

		function updateBackground() {
    	// DO NOT MODIFY THIS CONDITION
    	if (Math.random() < 0.02 && gameState === "wait") {
        document.body.style.backgroundColor = newColor;

        startTime = Date.now();
        gameState = "started";

        timerInterval = setInterval(() => {
            let elapsed = (Date.now() - startTime) / 1000;
            document.getElementById("output").innerHTML = elapsed.toFixed(3);
        }, 10);

        document.getElementById("message").innerHTML = "Click now!!!";
    	}
		
		}
    		
    		
    	



    	// DO NOT MODIFY THIS LINE
    	setInterval(updateBackground, 100);