var finalTotal = 0;
function calculate() {
			var subtotal = Number(document.getElementById('subtotal').value);
			var gst = 0.05 * subtotal;
			var afterGST = subtotal + gst;
			
			document.getElementById('output').innerHTML = "$ " + afterGST.toFixed(2);
		}

function tipcalculate() {
			var subtotal = Number(document.getElementById('subtotal').value);
			var gst = 0.05 * subtotal;
			var afterGST = subtotal + gst;

			var tipPercent = 0;

			if (document.getElementById('tip1').checked) {
				tipPercent = 0;
			}
			else if (document.getElementById('tip2').checked) {
				tipPercent = 0.10;
			}
			else if (document.getElementById('tip3').checked) {
				tipPercent = 0.15;
			}
			else if (document.getElementById('tip4').checked) {
				tipPercent = 0.20;
			}

			var tipAmount = afterGST * tipPercent;

			finalTotal = afterGST + tipAmount;

			document.getElementById("outputTip").innerHTML = "Tip amount: $ " + tipAmount.toFixed(2);
			document.getElementById("outputAfterTip").innerHTML = "Final Total w/ Tip: $ " + finalTotal.toFixed(2);
		}

function splitbill() {

			var subtotal = Number(document.getElementById('subtotal').value);
			var gst = 0.05 * subtotal;
			var afterGST = subtotal + gst;

    		let people = Number(document.getElementById("splitDropdown").value);
    		let splitPercent = 1 / people;

    		let afterSplit = finalTotal * splitPercent;

   			document.getElementById("outputAfterSplit").innerHTML = "After split: $" + afterSplit.toFixed(2) + "/person";
   			
		}