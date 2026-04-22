function calculate() {
            let subtotal = Number(document.getElementById('subtotal').value);
            let gst = 0.05 * subtotal;
            let afterGST = subtotal + gst;
            
            document.getElementById('output').innerHTML = "$ " + afterGST.toFixed(2);
        }

        function tipcalculate() {
            let subtotal = Number(document.getElementById('subtotal').value);
            let gst = 0.05 * subtotal;
            let afterGST = subtotal + gst;

            let tipPercent = 0; // default value

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

            let tipAmount = afterGST * tipPercent;
            let finalTotal = afterGST + tipAmount;

            document.getElementById("outputTip").innerHTML = "Tip amount: $ " + tipAmount.toFixed(2);
            document.getElementById("outputAfterTip").innerHTML = "Final Total w/ Tip: $ " + finalTotal.toFixed(2);
        }