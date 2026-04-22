
var originalColor = document.body.style.backgroundColor;
var timer = null;
var startTime = null;
var delayTimeout = null;

function started() {

    delayTimeout = setTimeout(function () {
        document.body.style.backgroundColor = "red";
        start();
    }, 5000);
}

function start() {
    startTime = Date.now();

    timer = setInterval(function () {
        var elapsed = (Date.now() - startTime) / 1000;
        document.getElementById("time").innerText = elapsed.toFixed(2) + "s";
    }, 10);
}

function ended() {
    clearInterval(timer);
    clearTimeout(delayTimeout);

    document.body.style.backgroundColor = originalColor;

    document.getElementById("time").innerText = "0.00s";

    started();
}

document.getElementById("buttonID").addEventListener("click", ended);

started();
