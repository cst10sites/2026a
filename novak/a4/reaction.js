var gameState = "wait"; // "wait", "started", "finished"

var time;
var startTime;




function react() {
    // Need to implement
    // 1. display game over if the button is pressed too soon
    if (gameState == "wait") {
        var choice = confirm("Too early! do you want to try again?");
        if (choice == true) {
            refresh();
        }

    } 
 
    // 2. stop the timer if the start has already been started
    // 3. change gameState to "ended"
    gameState = "finished";
}



/* This code changes the background color to newColor!

	   Explanation: updateBackground is called every 0.1 sec by default
	   and generates a random decimal number between 0 and 1. If it
	   generates a number less than tolerance, it will change
	   the background color. The actual time it takes to change color is
	   random but by default its average time is
	   [interval time in sec] / [probability] = 0.1 / 0.02 = 5 seconds.
    	*/

var newImage = "url('SCARY.JPG')";

function updateBackground() {
    // DO NOT MODIFY THIS CONDITION
    if (Math.random() < 0.01 && gameState == "wait") {
        document.body.style.backgroundImage = newImage;

        // Need to implement:
        // 1. start the timer, change gameState = true;
        // 2. show the timer on the screen; need to add a place in HTML
        // 3. change gameState to "started"

        gameState = "started";
        startTime = new Date();
    }
    //console.log(gameState)

    if (gameState == 'started') {
        var currentTime = new Date();
        var timePassed = (currentTime - startTime) / 1000 ;
        
    document.getElementById('output').innerHTML = timePassed.toFixed(7);


     }
     
 
}


function refresh() {
    window.location.reload();
}

function mailToMe(){
    alert("Thank you for entering the contest! You will recieve an email soon if you won the money.");
}




// DO NOT MODIFY THIS LINE
setInterval(updateBackground, 50);