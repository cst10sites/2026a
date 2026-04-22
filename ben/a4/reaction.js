var startTime;
var gameState = "wait"; // "wait", "started", "ended"
var currentTime
var newBackground = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.reddit.com%2Fr%2Fshittymoviedetails%2Fcomments%2Fgy8mbi%2Fin_the_dark_knight2008_joker_burns_a_pile_of_cash%2F&psig=AOvVaw3AJWyM_0iB1wlUthTmik-t&ust=1764175525988000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCKCii47gjZEDFQAAAAAdAAAAABA7"
var newColor = "red";

function updateBackground() {
	// DO NOT MODIFY THIS CONDITION
	if (Math.random() < 0.02 && gameState == "wait") {
		document.body.style.backgroundImage = "url('https://media.tenor.com/JRT4YryU5VcAAAAM/induction-hypno.gif')";
		gameState = "started";
		startTime = new Date();


		// Need to implement:

	}
	if (gameState == "started"){
	currentTime = new Date();
	document.getElementById('output').innerHTML = (currentTime - startTime) / 1000;
}}

if (document.getElementById('output').innerHTML == NaN){
	document.getElementById('output').innerHTML = 0
}





function react() {
	if (gameState == "started") {
		currentTime = new Date()
		console.log('12');
		console.log(startTime);
		document.getElementById('output').innerHTML = (currentTime - startTime) /1000
		gameState = "ended";
		document.body.style.background = "green"
	} else {
		document.getElementById('output').innerHTML = "Don't click the button at this point"
	}
}


function reset() {
	window.location.reload();
}

// Need to implement
// 1. display game over if the button is pressed too soon
// 2. stop the timer if the start has already been started


/* This code changes the background color to newColor!

	   Explanation: updateBackground is called every 0.1 sec by default
	   and generates a random decimal number between 0 and 1. If it
	   generates a number less than tolerance, it will change
	   the background color. The actual time it takes to change color is
	   random but by default its average time is
	   [interval time in sec] / [probability] = 0.1 / 0.02 = 5 seconds.
    	*/

var newColor = "red";
var newBackground = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.reddit.com%2Fr%2Fshittymoviedetails%2Fcomments%2Fgy8mbi%2Fin_the_dark_knight2008_joker_burns_a_pile_of_cash%2F&psig=AOvVaw3AJWyM_0iB1wlUthTmik-t&ust=1764175525988000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCKCii47gjZEDFQAAAAAdAAAAABA7"


// DO NOT MODIFY THIS LINE
setInterval(updateBackground, 100);
