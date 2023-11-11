  class Game {
    constructor() {
        const playerName1El = document.querySelector('.player-name');
        playerName1El.textContent = this.getPlayerName();
        const playerMessage1El = document.querySelector('.player1Turn');
        playerMessage1El.textContent = this.getPlayerName();
        const playerMessage2El = document.querySelector('.player1Time');
        playerMessage2El.textContent = this.getPlayerName();
        this.turn = [];
    }

    async pressButton(button) {
          const storedCoordinates = JSON.parse(localStorage.getItem('boat1', 'boat2', 'boat3', 'boat4'));
          if (storedCoordinates === button.id) {
              updateScore(this.turn.length - 1);
              await hit(button);
          } else {
            await miss(button);
            saveScore(this.turn.length - 1);
          }
    }

    async hit(button) {
        id=button.id
        console.log("Worked")
        document.getElementById(id).style.backgroundColor="red";
    }

    async miss(button) {
        id=button.id
        console.log("Didnt Work")
        document.getElementById(id).style.backgroundColor="white";
        }

    getPlayerName() {
        return localStorage.getItem('userName') ?? 'Unknown player';
    }

    updateScore(score) {
        const scoreEl = document.querySelector('#score');
        scoreEl.textContent = score;
    }

    saveScore(score) {
        const userName = this.getPlayerName();
        let scores = [];
        const scoresText = localStorage.getItem('scores');
        if (scoresText) {
          scores = JSON.parse(scoresText);
        }
        scores = this.updateScores(userName, score, scores);
    
        localStorage.setItem('scores', JSON.stringify(scores));
      }

    updateScores(userName, score, scores) {
        const date = new Date().toLocaleDateString();
        const newScore = { name: userName, score: score, date: date };
    
        let found = false;
        for (const [i, prevScore] of scores.entries()) {
          if (score > prevScore.score) {
            scores.splice(i, 0, newScore);
            found = true;
            break;
          }
        }
    
        if (!found) {
          scores.push(newScore);
        }
    
        if (scores.length > 10) {
          scores.length = 10;
        }
    
        return scores;
      }
}

const game = new Game();