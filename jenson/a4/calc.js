	function calculate() {
			


			var subtotal = document.getElementById('subtotal').value;
			var gst = 0.05 * Number(subtotal);
			var afterGST = Number(subtotal) + gst;
			document.getElementById('output').innerHTML = "$" + afterGST.toFixed(2) + " after GST";

			var tip = document.getElementById('tipValue').value;
			var tipor = Number(afterGST) + (Number(afterGST) * tip) 
			document.getElementById('output2').innerHTML = "$" + tipor.toFixed(2) + " after GST and tip";

			var split = document.getElementById('splitNumber').value;
			var splitTotal = tipor/split;
			document.getElementById('output3').innerHTML = "Each person pays: $" + splitTotal.toFixed(2);

			if (isNaN(subtotal)){
				document.getElementById('output').innerHTML = "please enter a number";
				document.getElementById('output3').innerHTML = "";
				document.getElementById('output2').innerHTML = "";
			}
			}

		function reload() {
			window.location.reload()
		}
			
