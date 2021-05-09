//Countdown Timer//
var totalSeconds = 75;

function countdownTimer() {
    totalSeconds = totalSeconds - 1;
    document.getElementById("timeleft").textContent = totalSeconds;
    if (totalSeconds <=0){
        clearInterval(counter);
}
}

//Show Rules List Function
function showRules() {
    var rulesList = document.getElementById("rulesdiv");
        rulesList.style.display = "block";
  }

//Start Questions Function
function startQuiz() {
    var openQuestions = document.getElementById("que-text");
    openQuestions.style.display = "block";
    setInterval(countdownTimer, 1000);
}

function submitAnswer(question, correct) {
    if (!correct) {
        totalSeconds -= 10;
        document.getElementById("timeleft").textContent = totalSeconds;
    }
    if (question === 1) {
    document.getElementById("que_one").style.display = "none";
    document.getElementById("que_two").style.display = "block";
    }
    else if (question === 2) {
    document.getElementById("que_two").style.display = "none";
    document.getElementById("que_three").style.display = "block";
    }
    else if (question === 3) {
    document.getElementById("que_three").style.display = "none";
    document.getElementById("que_four").style.display = "block";
}
    else if (question === 4){
    document.getElementById("que_four").style.display = "none";
    document.getElementById("que_five").style.display = "block";
}
    else if (question === 5){
    document.getElementById("que_five").style.display = "none";
    document.getElementById("").style.display = "block";
}
}



