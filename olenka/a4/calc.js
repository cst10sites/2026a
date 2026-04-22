        /*Summary:
		   1. Number(aStr): converts text to a number (for arithmetic)
		   2. aNumber.toFixed(2): converts a number to text with 2 decimal places
		*/
		function calculate() {
			var subtotal = Number(document.getElementById('subtotal').value);
			var tipRate = Number(document.getElementById('tip').value);
			var split = Number(document.getElementById('split').value);


			var gst = 0.05 * subtotal;
			var afterGST = subtotal + gst;

			var tipAmount = afterGST * tipRate;

			var totalAfterTip = afterGST + tipAmount;

			var eachPays = totalAfterTip / split;


			document.getElementById('afterTax').innerHTML = "Total After Tax: $" + afterGST.toFixed(2);
			document.getElementById('afterTip').innerHTML = "Total After Tip: $" + totalAfterTip.toFixed(2)
			document.getElementById('eachPays').innerHTML = "Total Each Pays: $" + eachPays.toFixed(2)
		}

		function resetForm() {
			document.getElementById('subtotal').value = "";
			document.getElementById('tip').value = "0";
			document.getElementById('split').value = "1";

			document.getElementById('afterTax').innerHTML = "Total After Tax: $0.00";
			document.getElementById('afterTip').innerHTML = "Total After Tip: $0.00";
			document.getElementById('eachPays').innerHTML = "Total Each Pays: $0.00";
		}
	