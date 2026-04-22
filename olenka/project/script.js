function checkQuiz() {
    let score = 0;

    const answers = {
        q1: "Python",
        q2: "Canadian Computing Competition",
        q3: "Drawing",
        q4: "Test problem-solving and programming skills",
        q5: "Logical thinking"
};

    for (let q in answers) {
        const options = document.getElementsByName(q);
        for (let option of options) {
            if (option.checked && option.value === answers[q]) {
                score++;
            }
        }
    }

    const result = document.getElementById("result");
    result.textContent = `You scored ${score} out of 5!`;
}

