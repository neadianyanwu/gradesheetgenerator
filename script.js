function calculateTotal() {
    let eng = parseFloat(document.querySelector("#eng").value) || 0;
    let math = parseFloat(document.querySelector("#math").value) || 0;
    let chem = parseFloat(document.querySelector("#chem").value) || 0;
    let bio = parseFloat(document.querySelector("#bio").value) || 0;
    let fren = parseFloat(document.querySelector("#fren").value) || 0;

    const engGrade = document.querySelector("#gr-eng");
    const mathGrade = document.querySelector("#gr-math");
    const chemGrade = document.querySelector("#gr-chem");
    const bioGrade = document.querySelector("#gr-bio");
    const frenGrade = document.querySelector("#gr-fren");

    function calculateGrade(score, gradeInput) {
        if (score >= 90) {
            gradeInput.value = "A+";
        } else if (score >= 80) {
            gradeInput.value = "A";
        } else if (score >= 70) {
            gradeInput.value = "B";
        } else if (score >= 60) {
            gradeInput.value = "C";
        } else if (score >= 50) {
            gradeInput.value = "D";
        } else if (score >= 40) {
            gradeInput.value = "E";
        } else {
            gradeInput.value = "F";
        }
    }

    calculateGrade(eng, engGrade);
    calculateGrade(math, mathGrade);
    calculateGrade(chem, chemGrade);
    calculateGrade(bio, bioGrade);
    calculateGrade(fren, frenGrade);


    let total = eng + math + chem + bio + fren;
    let percentage = total / 5;

    document.querySelector(".total h3").textContent = "Total: " + total;
    document.querySelector(".percentage h3").textContent = "Percentage: " + percentage.toFixed(2) + "%";

    var resultFeedback = percentage;

    var feedbackElement = document.querySelector(".result-feedback h1");
    if (resultFeedback >= 90) {
        feedbackElement.textContent = "Congratulations! You have achieved an excellent result.";
        feedbackElement.style.color = "green";
    } else {
        feedbackElement.textContent = "Keep up the good work! Your result is not quite at the top level.";
        feedbackElement.style.color = "blue"; 
    }
}

document.querySelector('.button').addEventListener('click', calculateTotal);
