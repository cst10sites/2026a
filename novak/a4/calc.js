function calculate() {
    var subtotal = Number(document.getElementById('subtotal').value);
    var gst = 0.05 * Number(subtotal);
    var afterGST = Number(subtotal) + gst;
    document.getElementById('output').innerHTML = afterGST.toFixed(2);




    var tip = Number(document.getElementById('tip').value);
    var afterTip = Number((afterGST * tip)) / 100 + Number(afterGST);
    document.getElementById('tipOutput').innerHTML = afterTip.toFixed(2);
    var tippy = Number(afterGST * tip) / 100;
    document.getElementById('tippy').innerHTML = tippy.toFixed(2);


    var split = Number(document.getElementById('split').value);
    var afterSplit = Number(afterTip / split);
    document.getElementById('totalSplit').innerHTML = afterSplit.toFixed(2);
}

function refresh() {
    window.location.reload();
}