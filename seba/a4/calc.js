/* Summary:
			1. Number(aStr): converts text to a number (for arithmetic)
			2. aNumber.toFixed(2): converts a number to text with 2 decimal places
		*/

function calculate() {
			var subtotal = Number(document.getElementById('subtotal').value);
			var gst = 0.05 * subtotal;
			
			var afterGST = subtotal + gst;


			document.getElementById('output').innerHTML = "After Tax Total: $ " + afterGST.toFixed(2);

			var tiptotal = Number(document.getElementById('tiptotal').value);
			var aftertip = afterGST * tiptotal;
			document.getElementById('tipoutput').innerHTML = "After Tip Total: $ " + aftertip.toFixed(2);

			var split = Number(document.getElementById('split').value);
			var perperson = aftertip / split;
			document.getElementById('splitoutput').innerHTML = "$ " +  perperson.toFixed(2) + " per person";

		}

