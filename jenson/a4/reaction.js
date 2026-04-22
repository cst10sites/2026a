var gameState = "wait"; // "wait", "started", "ended"
    	var started;
    	var start = 0;
    	var canReact = 0;
    	var canForceReset = 0;
    	function react() {
    		// Need to implement
    		// 1. display game over if the button is pressed too soon
    		// 2. stop the timer if the start has already been started
    		// 3. change gameState to "ended"
    		document.getElementById('buttonID').innerHTML = "Stop";
    		start = 1;
    		var reactionTime = new Date();
    		if (canReact == 1) {
    			//var reactionTime = new Date();
    			var timeScore = (reactionTime - started);
    			var display = document.getElementById('reaction').innerHTML;

    			//document.getElementById('reactionTyme').innerhtml = timeScore;
    			display = timeScore + "ms";
    			document.getElementById('reaction').innerHTML = display;
    		}

    		if (canReact == 0 && canForceReset == 1) {
    			document.getElementById('tooSlow').innerHTML = "Early, you must reset."
    			gameState = "mustReset";
    		}
    		canForceReset = 1;

    		//gameState = "finished"
    		
    	
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

    	//var startRed = new Date(); // needed for stopwatch feature
    	function updateBackground() {
    		// DO NOT MODIFY THIS CONDITION
    		


    		if (start == 1) {
    			
    			if (Math.random() < 0.01 && gameState == "wait") {
    				document.body.style.backgroundColor = newColor
    				// Need to implement:
    				// 1. start the timer
    				// 2. show the timer on the screen; need to add a place in HTML
    				// 3. change gameState to "started"
    				canReact = 1
    				started = new Date();
    				//var reactionTime = new Date();
    				//var timeScore = 
    				//gameState = "change";
    			}	
    		}
    	}
function reload() {
	window.location.reload();
}

    	// DO NOT MODIFY THIS LINE
    	setInterval(updateBackground, 50);
