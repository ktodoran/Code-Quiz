//Countdown Timer//
var totalSeconds = 75;
var countdownInterval;

function countdownTimer() {
    var temporarySeconds = totalSeconds -1;
    if(temporarySeconds < 0) {
        totalSeconds = 0;
    }
    else {
        totalSeconds = temporarySeconds
    }
    document.getElementById("timeleft").textContent = totalSeconds;
    if (totalSeconds === 0){
        clearInterval(countdownInterval);
        document.getElementById("que_five").style.display = "none";
        submitAnswer(5);
}
}
//Show Rules List Function
function showRules() {
    var rulesList = document.getElementById("rulesdiv");
        document.getElementById("start-page").style.display = "none";
        rulesList.style.display = "block";
}
//Start Questions Function
function startQuiz() {
    document.getElementById("rulesdiv").style.display = "none";
    document.getElementById("start-page").style.display = "none";
    document.getElementById("que-text").style.display = "block";
    countdownInterval = setInterval(countdownTimer, 1000);
}
//Don't take the Quiz; After reading rules
function goBack() {
    document.getElementById("rulesdiv").style.display = "none";
    document.getElementById("que-text").style.display = "none";
    document.getElementById("start-page").style.display = "block";
}
//Submission of Answers
function submitAnswer(question, correct) {
    if (!correct) {
        var temporarySeconds = totalSeconds - 10;
        if (temporarySeconds < 0) {
            totalSeconds = 0;
        }
        else {
            totalSeconds = temporarySeconds;
        }
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
    clearInterval(countdownInterval);
    document.getElementById("que_five").style.display = "none";
    document.getElementById("sumbitscore").style.display = "block";
    document.getElementById("score").textContent = 'Your Score is ' + totalSeconds;
    
}
}
//End of Quiz/Submitting Highscore to localStorage
function submitHighscore() {
    var result = localStorage.getItem('highscores');
    var highscores = [];
    if (result) {
        highscores = JSON.parse(result)
    }
    var initials = document.getElementById("initials").value;
    var highscore = {initials, totalSeconds};
    highscores.push(highscore);
    localStorage.setItem('highscores', JSON.stringify(highscores));
    document.getElementById("sumbitscore").style.display = "none";
    viewHighscores();
}

function viewHighscores() {
    document.getElementById("finalscores").style.display = "block"
    document.getElementById("scorelist").innerHTML = '';
    var result = localStorage.getItem('highscores');
    var highscores = [];
    if (result) {
        highscores = JSON.parse(result)
    }
    highscores.sort((a,b) => (a.totalSeconds < b.totalSeconds)?1:-1);
    for (let index = 0; index < highscores.length; index++) {
        document.getElementById("scorelist").innerHTML += '<li>' + highscores[index].initials + "  " + highscores[index].totalSeconds  +   '<li>'
    }
}
//Going Back to Main Menu after Submitting Initials or Clearing Highscores
function startOver() {
    document.getElementById("finalscores").style.display = "none";
    document.getElementById("start-page").style.display = "block";
}

function deleteScores() {
    var itemToRemove = document.getElementById("scorelist");
    itemToRemove.parentNode.removeChild("scorelist");
}