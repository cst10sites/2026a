var afterGST
var gst
var subtotal
var Tips
var AfterTip
var FinalCost

function calculate() {
		var subtotal = Number(document.getElementById('subtotal').value);
		var gst = 0.05 * subtotal;
		var afterGST = subtotal + gst;
		console.log(afterGST);
		
		document.getElementById('output').innerHTML = "After GST (5%): $ " + afterGST.toFixed(2);


		var Tips = Number(document.getElementById('Tipe').value) / 100;
		var AfterTip = Number(Tips) * Number(afterGST);
		document.getElementById('TipDisplay').innerHTML = "Your Cost after tip is $ " + Number(AfterTip).toFixed(2) + "."

		var FinalCost = Number(AfterTip) / Number(document.getElementById('People').value); 
		document.getElementById('Final').innerHTML = "Each person/group must pay $ " + Number(FinalCost).toFixed(2) + "."


	}