var rund = false;
var startime = new Date().getTime();
var wat = false;
var go_L = false;
var went = false;
var tmi = true;
var e = true;
var rand = Math.floor(1000 * Math.random() + 500);
rand = Number(rand);

function aoiuehfdsllgidgh9hdlgihlh() {

}

function werfer() {
	if (go_L == true) {
		document.body.style.background = 'green';
		wat = false;
	}
	else {
		wat = true;
		document.body.style.background = 'brown';
		e = false;
	}
	rund = true;
	tmi = false;
}
setInterval(ugd, 1);
function ugd() {
	//document.getElementById('buh').innerHTML = "rund = " + rund + ", startime = " + startime + ", wat = " + wat + ", go_l = " + go_L + ", rand = " + rand//
	if (rand <= 0) {
		if (tmi == true) {
			document.body.style.background = 'red';
			document.getElementById('test').innerHTML = (Number(new Date().getTime()) - startime)/1000;				
		}
	}
	else {
		if (rund == false) {
		rand = rand -= 1;
		}
		if (rand <= 0 && went == false) {
			go_L = true;
			rund = true;
		}
		startime = new Date().getTime();
	}
	if (e == false) {
		if (Math.floor(10 * Math.random()) < 5) {
			document.body.style.background = 'white';
		}
		else {
			document.body.style.background = 'black';
		}
	}
}
function bec() {
	window.location.href = "index.html"
}