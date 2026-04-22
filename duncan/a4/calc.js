function calculate() {
    // Step 1: Get the values from the form
    let subtotal = document.getElementById('subtotal').value;
    let tipPercent = document.getElementById('tip').value;
    let splitCount = document.getElementById('split').value;
    
   
    if (subtotal === "") {
        alert("Please enter a bill amount");
        return;
    }
    
    
    subtotal = Number(subtotal);
    tipPercent = Number(tipPercent);
    splitCount = Number(splitCount);
    
    // Calculate tax (5 Percent GST)
    let tax = subtotal * 0.05;
    let afterTax = subtotal + tax;
    
    // Calculate tip amount
    let tipAmount = subtotal * (tipPercent / 100);
    
    // Calculate total after tip
    let totalAfterTip = afterTax + tipAmount;
    
    // Calculate split amount
    let splitAmount = totalAfterTip / splitCount;
    
    // Display results with 2 decimal places
    document.getElementById('after-tax').textContent = "$" + afterTax.toFixed(2);
    document.getElementById('total-after-tip').textContent = "$" + totalAfterTip.toFixed(2);
    document.getElementById('after-split').textContent = "$" + splitAmount.toFixed(2);
}

function resetForm() {
    // Clear all inputs and results
    document.getElementById('subtotal').value = "";
    document.getElementById('tip').value = "15";
    document.getElementById('split').value = "2";
    document.getElementById('after-tax').textContent = "$0.00";
    document.getElementById('total-after-tip').textContent = "$0.00";
    document.getElementById('after-split').textContent = "$0.00";
}
