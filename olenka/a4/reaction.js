        var gameState = "wait";
        var startTime = 0;
        var timerInterval = null;
       



            function react () {
        	if (gameState === "wait") {
                gameState = "ended";
    		document.getElementById("message").textContent = "Too Soon!"
    		clearInterval(timerInterval);
        }

    	
        
    	
    		
    	

    	if (gameState === "started") {
    	    gameState = "ended";
            clearInterval(timerInterval);
    		// Need to implement
    		// 1. display game over if the button is pressed too soon
    		// 2. stop the timer if the start has already been started
    		// 3. change gameState to "ended"
            var reaction = (endTime - startTime) / 1000
            documentGetElementById("message").textContent = "YAY!"
            document.getElementById("timer").innerHTML = reaction.toFixed(3);

    		gameState = "ended";
    	}
    		
    	}

    	


    	var newColor = "red";
    	var startTime = new Date(); // needed for stopwatch feature

    	function updateBackground() {
    		// DO NOT MODIFY THIS CONDITION
    		if (Math.random() < 0.02 && gameState == "wait") {
    			document.body.style.backgroundColor = newColor;
    			// 1. start the timer, change gameState = true;
    			// 2. show the timer on the screen; need to add a place in HTML
    			// 3. change gameState to "started"
    		
    			startTime = new Date();

    			gameState = "started";
    			
    		}
    	}


    	// DO NOT MODIFY THIS LINE
    	setInterval(updateBackground, 100);

    	function updateTime() {
    		if (gameState == "started") {
               let now = new Date();
               let elapsed = (now - startTime) / 1000

               document.getElementById("timer").innerHTML = elapsed.toFixed(3);
    		}
    	}
    	setInterval(updateTime, 100);

    	function resetPage() {
    		location.reload();
    	}