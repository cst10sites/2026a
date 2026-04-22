
		function calculate() {
			var subtotal = Number(document.getElementById("subtotal").value);
			var GST = 0.05 * subtotal; 
			var afterGST = subtotal + GST;
			document.getElementById('afterGST').innerHTML = "The subtotal after taxes is" + afterGST.toFixed(2) + "$.";

			var tips = Number(document.getElementById('Tipvalue').value);
			var total = (tips * subtotal) + afterGST
    		document.getElementById('Tip').innerHTML = "The total money is " + total.toFixed(2) + "$.";

    		var person = Number(document.getElementById('people').value)
    		var each = total / person
    		document.getElementById('divide').innerHTML = "Each of you should pay" + each.toFixed(2) + "$."

		}

		function reload() {
			window.location.reload();
		}

		function ex1() {
			var opt1 = document.getElementById('choice1').checked;
    		var opt2 = document.getElementById('choice2').checked;

    		var correctAns = (opt1 == true && opt2 == false );
    		// && means both (all) conditions must be true ("and")
    		// || means one of the conditions must be true ("or")

    		if (correctAns == true) {
    			alert("You will pay all the money!")
    		}
    		else {
    			alert("Just your part!");
    		}
			// body...
		}
	