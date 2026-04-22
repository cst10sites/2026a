/* Summary:
			1. Number(aStr): converts text to a number (for arithmetic)
			2. aNumber.toFixed(2): converts a number to text with 2 decimal places
		*/

		function calculate() {
			// calculate GST total
			var subtotal = Number(document.getElementById('subtotal').value);
			var gst = 0.05 * subtotal;
			var afterGST = subtotal + gst;

			var tipPercent = 0;
			if (document.getElementById('tip').checked) {
				tipPercent = 0;
			}
			else if (document.getElementById('tip1').checked) {
				tipPercent = 0.10;
			}
			else if (document.getElementById('tip2').checked) {
				tipPercent = 0.15;
			}
			else if (document.getElementById('tip3').checked) {
				tipPercent = 0.20;
			}

			var tipAmount = afterGST * tipPercent;
			var afterTip = afterGST + tipAmount;
			
			var people = Number(document.getElementById("split").value);
			var splitbills = afterTip / people;
			
			document.getElementById("afterTip").innerHTML= "After Tip: $" + afterTip.toFixed(2);
            document.getElementById('output').innerHTML = "After GST: $" + afterGST.toFixed(2);
            document.getElementById("splitbills").innerHTML = "Each person pays: $" + splitbills.toFixed(2);
        }


            function resetForm() {
            
            document.getElementById("subtotal").value = "";

            document.getElementById("tip").checked = false;
            document.getElementById("tip1").checked = false;
            document.getElementById("tip2").checked = false;
            document.getElementById("tip3").checked = false;

            document.getElementById("split").value = 1;

            document.getElementById("output").innerHTML = "";
            
            document.getElementById("afterTip").innerHTML = "";
            
            document.getElementById("splitbills").innerHTML = "";
            }