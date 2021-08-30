var scoreList = document.querySelector("#highscore-list");

var aryHS = [{
    initials : [],
    scores : [],
}];

function getScores() {
    var storedHighscoresString = localStorage.getItem("highscores");

    if (storedHighscoresString !== null) {
        var storedHighscores = JSON.parse(storedHighscoresString);

        aryHS.initials = storedHighscores.initials;
        aryHS.scores   = storedHighscores.scores;
    }
    else {
        aryHS.initials = [];
        aryHS.scores   = [];
    }
}

function renderScores() {
    scoreList.innerHTML = "";
    
    getScores();

    for (var i = 0; i < aryHS.initials.length; i++) {
        var listEl = document.createElement("li");
        var pEl = document.createElement("p");
        pEl.setAttribute("class", "highscore");
        pEl.textContent = (i + 1) + ". " + aryHS.initials[i] + " - " + aryHS.scores[i];
        
        listEl.appendChild(pEl);
        scoreList.appendChild(listEl);
    }
}

function saveScore(newInitials, newScore) {
    getScores();
    
    aryHS.initials.push(newInitials);
    aryHS.scores.push(newScore);

    var highscoresString = JSON.stringify(aryHS);
    localStorage.setItem("highscores", highscoresString);
}

function clearScores() {
    localStorage.removeItem("highscores");
    renderScores();
}

if (scoreList !== null) {
    renderScores();
}