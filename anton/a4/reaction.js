var gameState = "wait";
    	var startTime;
    	var clicked = false;

    	function react() {

    		if (gameState == "wait") {
    			document.getElementById('gameOver').innerHTML = "Oops! You pressed too soon!";
    			gameState = "ended";
    			return;
    		}

    		if (gameState == "started" && !clicked) {
				clicked = true;
				var reaction = (Date.now() - startTime) / 1000;
				document.getElementById("output").innerHTML =
					"Your reaction time: " + reaction.toFixed(3) + " sec";
				gameState = "ended";
			}
    	}
    	

    	var newColor = "black"; 
    	function updateBackground() {

    		if (Math.random() < 0.02 && gameState == "wait") {
    			document.body.style.backgroundColor = newColor;

    			startTime = Date.now();
    			gameState = "started";

    			document.getElementById("gameOver").innerHTML = "Click now!!!";
    		}

    	}


    	function reset() {
  			window.location.reload();
    	}

    	setInterval(updateBackground, 100);
