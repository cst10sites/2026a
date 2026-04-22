		/* Summary:
			1. Number(aStr): converts text to a number (for arithmetic)
			2. aNumber.toFixed(2): converts a number to text with 2 decimal places

		*/

function calculate() {
	// calculate GST and after
	var subtotal = Number(document.getElementById('subtotal').value);
	var gst = 0.05 * subtotal;
	var afterGST = subtotal + gst;

	document.getElementById('afterGST').innerHTML = "$ " + afterGST.toFixed(2);


// calculate tips                       
	var tipPercent = Number(document.getElementById('tipValue').value);
	console.log(tipPercent);
	var tipAmount = tipPercent * afterGST;
	var tipTotal = afterGST + tipAmount;
	document.getElementById('tips').innerHTML = "$ " + tipTotal.toFixed(2); 

	var tipMoney = tipAmount;
	document.getElementById('tipDollar').innerHTML = "$ " + tipMoney.toFixed(2)


//calculate discount
//var discountPercent = document.getElementById('discountValue').value; 
	var discountPercent = Number(document.getElementById('discountValue').value);
	console.log(discountPercent)
	var discountAmount = discountPercent * afterGST
// var discountAmount = discountPercent * splitAmount
	var discountTotal = afterGST - discountAmount
	document.getElementById('discount').innerHTML = "$ " + discountTotal.toFixed(2);

	var completeTotal = discountTotal + tipMoney; 
	document.getElementById('fullTotal').innerHTML = "$ " + completeTotal.toFixed(2)


//split the bill
	var splitPeopleAmount = Number(document.getElementById('splitValue').value); 
	console.log()
	var splitAmount = completeTotal / splitPeopleAmount;
	document.getElementById('split').innerHTML = "$ " + splitAmount.toFixed(2);
}

function reset() {
	var reset;



			                                                                                                                                                                       
           
			/*
			var tip1 = afterGST + 0;
			var tip2 = afterGST * 0.10;
			var tip3 = afterGST * 0.15;
			var tip4 = afterGST * 0.20;

			document.getElementById('None').value = tip1.toFixed(2);
			document.getElementById('Fair').value = tip2.toFixed(2);
			document.getElementById('Good').value = tip3.toFixed(2);
			document.getElementById('Excellent').value = tip4.toFixed(2);
			*/

	}




