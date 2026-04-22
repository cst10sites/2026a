    	var gameState = "start"; // "start", "started", "end"
    	var time;
    	var startTime;

    	function react() {
    		// 2. stop the timer if the start has already been started
    		// 3. change gameState to "ended"
    		if (gameState == "start") {
    		document.getElementById('timeOutput').innerHTML = "You clicked too early!, try again?";
    		}
    		gameState = "end";
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

    	function updateBackground() {
    		// DO NOT MODIFY THIS CONDITION
    		if (Math.random() < 0.01 && gameState == "start") {
    			document.body.style.backgroundColor = newColor;
    			gameState = "change";
    			startTime = new Date();
    			// Need to implement:
    			// 0. change background color (done above)
    			// 1. start the timer, change gameState = true;
    			// 2. show the timer on the screen; need to add a place in HTML
    			// 3. change gameState to "started"

    		}


    		if (gameState == 'change') {
    			var currentTime = new Date();
				var timePassed = (currentTime - startTime) / 1000;
    			console.log(timePassed);
				document.getElementById('timeOutput').innerHTML = timePassed.toFixed(3);
    		}

    	}

    	function refresh() {
    		window.location.reload();
    	}


    	// DO NOT MODIFY THIS LINE
    	setInterval(updateBackground, 50);

    	function updateTime() {
    		if (gameState == "change") {
    			//...
			}
    	}
    	setInterval(updateTime, 100);