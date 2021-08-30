var scoreList = document.querySelector("#highscore-list");

var aryScores = {
    initials : [],
    scores : [],
}

function getScores() {
    var storedHighscoresString = localStorage.getItem("highscores");

    if (storedHighscoresString !== null) {
        var storedHighscores = JSON.parse(storedHighscoresString);
        aryScores.initials   = storedHighscores.initials;
        aryScores.scores     = storedHighscores.scores;
    }
    else {
        aryScores.initials = [];
        aryScores.scores   = [];
    }
}

function renderScores() {
    scoreList.innerHTML = "";
    
    getScores();

    for (var i = 0; i < aryScores.initials.length; i++) {
        var listEl = document.createElement("li");
        var pEl = document.createElement("p");
        pEl.setAttribute("class", "highscore");
        pEl.textContent = aryScores.initials[i] + " - " + aryScores.scores[i];
        
        listEl.appendChild(pEl);
        scoreList.appendChild(listEl);
    }
}

function saveScore(newInitials, newScore) {
    getScores();
    
    aryScores.initials.push(newInitials);
    aryScores.scores.push(newScore);

    var highscoresString = JSON.stringify(aryScores);
    localStorage.setItem("highscores", highscoresString);
}

function clearScores() {
    localStorage.removeItem("highscores");
    renderScores();
}

if (scoreList !== null) {
    renderScores();
}