var timeLeft = 90;
var timerEl = document.getElementById("countdown");

function countDown () {
    var timeInterval = setInterval(function() {
        if (timeLeft === 0) {
            clearInterval(timeInterval);
            endQuiz();
        } 
        else {
            console.log(timeLeft);
            timeLeft--;
            timerEl.textContent = timeLeft + " seconds left.";            
        }
    }, 1000);    
}

function startQuiz () {
    alert("Start Quiz");
    timerEl.textContent = timeLeft + " seconds left.";
    countDown();
}

function endQuiz () {
    alert("End Quiz");
}

startQuiz();