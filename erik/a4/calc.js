	function calculate() {
		var subtotal = Number(document.getElementById('subtotal').value);
		var gst = 0.05 * Number(subtotal);
		var afterGST = Number(subtotal) + gst;
		document.getElementById('output').innerHTML = "$ " + afterGST.toFixed(2);

		var tip = document.getElementById('tip').value;
		var afterTip = Number((afterGST * tip) / 100 + afterGST);
		document.getElementById('tipoutput').innerHTML = "$ " + afterTip.toFixed(2);

		var split = document.getElementById('split').value;
		var afterSplit = Number(afterTip/split);
		document.getElementById('splitoutput').innerHTML = "$ " + afterSplit.toFixed(2);
	}

	function reset() {
	window.location.reload();
}