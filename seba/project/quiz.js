 var correct1 = 0;
 var correct2 = 0;
 var correct3 = 0;
 var correct4 = 0;
 var correct5 = 0;
 var correct6 = 0;
 var correct7 = 0;
 var correct8 = 0;
 var correct9 = 0;
 var correct10 = 0;
 

 function ex1() {
    var correctSelected; //either true or false
    correctSelected = document.getElementById('correctq1').checked;
    // .value will return "HTML" since 
    if (correctSelected == true) {
        correct1 = 1
        alert("Correct answer.");
    } else {
        correct1 = 0
        alert("Wrong answer.");
    }
    updateCorrect()
 }

 function ex2() {
    var correctSelected; //either true or false
    correctSelected = document.getElementById('correctq2').checked;
    // .value will return "HTML" since 
    if (correctSelected == true) {
        correct2 = 1
        alert("Correct answer.");
    } else {
        correct2 = 0
        alert("Wrong answer.");
    }
    updateCorrect()
 }

 function ex3() {
    var correctSelected; //either true or false
    correctSelected = document.getElementById('correctq3').checked;
    // .value will return "HTML" s
    if (correctSelected == true) {
        alert("Correct answer.");
        correct3 = 1
    } else {
        correct3 = 0
        alert("Wrong answer.");
    }
    updateCorrect()
 }

 function ex4() {
    var correctSelected; //either true or false
    correctSelected = document.getElementById('correctq4').checked;
    // .value will return "HTML" s
    if (correctSelected == true) {
         correct4 = 1
        alert("Correct answer.");
    } else {
        correct4 = 0
        alert("Wrong answer.");
    }
    updateCorrect()
 }

 function ex5() {
    var correctSelected; //either true or false
    correctSelected = document.getElementById('correctq5').checked;
    // .value will return "HTML" s
    if (correctSelected == true) {
        correct5 = 1
        alert("Correct answer.");
    } else {
        correct5 = 0
        alert("Wrong answer.");
    }
    updateCorrect()
 }

 function ex6() {
    var correctSelected; //either true or false
    correctSelected = document.getElementById('correctq6').checked;
    // .value will return "HTML" s
    if (correctSelected == true) {
        correct6 = 1
        alert("Correct answer.");
    } else {
        correct6 = 0
        alert("Wrong answer.");
    }
    updateCorrect()
 }

 function ex7() {
    var correctSelected; //either true or false
    correctSelected = document.getElementById('correctq7').checked;
    // .value will return "HTML" s
    if (correctSelected == true) {
        correct7 = 1
        alert("Correct answer.");
    } else {
        correct7 = 0
        alert("Wrong answer.");
    }
    updateCorrect()
 }

 function ex8() {
    var correctSelected; //either true or false
    correctSelected = document.getElementById('correctq8').checked;
    // .value will return "HTML" s
    if (correctSelected == true) {
        correct8 = 1
        alert("Correct answer.");
    } else {
        correct8 = 0
        alert("Wrong answer.");
    }
    updateCorrect()
 }

 function ex9() {
    var correctSelected; //either true or false
    correctSelected = document.getElementById('correctq9').checked;
    // .value will return "HTML" s
    if (correctSelected == true) {
        correct9 = 1
        alert("Correct answer.");
    } else {
        correct9 = 0
        alert("Wrong answer.");
    }
    updateCorrect()
 }

 function ex10() {
    var correctSelected; //either true or false
    correctSelected = document.getElementById('correctq10').checked;
    // .value will return "HTML" s
    if (correctSelected == true) {
        correct10 = 1
        alert("Correct answer.");
    } else {
        correct10 = 0
        alert("Wrong answer.");
    }
    updateCorrect()
 }






 function updateCorrect() {
    var totalCorrect = correct1 + correct2 + correct3 + correct4 + correct5 + correct6 + correct7 + correct8 + correct9 + correct10
    document.getElementById("totalCorrect").innerHTML = totalCorrect;
    

 }