// Set up the initial state
const winningScore = 50;
const halfScore = winningScore / 2;
let player1Score = halfScore;
let player2Score = halfScore;
let isFirstKeyPress = true;
const player1Key = "a";
const player2Key = "l";
let clickDelay = 0.1; // default delay in milliseconds
let lastPlayer1Click = 0;
let lastPlayer2Click = 0;
let isPlayer1KeyPressed = false;
let isPlayer2KeyPressed = false;

// Update the scores and check for a winner
function updateScores(event) {
  if (!isGameStarted) return;
  if (isFirstKeyPress) {
    // Reset the scores to the initial state
    player1Score = halfScore;
    player2Score = halfScore;
    isFirstKeyPress = false;
  }

  const now = Date.now();
  if (event.key === player1Key) {
    if (now - lastPlayer1Click >= clickDelay && !isPlayer1KeyPressed) {
      player1Score++;
      player2Score = winningScore - player1Score;
      lastPlayer1Click = now;
      isPlayer1KeyPressed = true;
      if (player1Score >= winningScore) {
        document.getElementById("player1").style.width = "100%";
        document.getElementById("player2").style.width = "0%";
        setTimeout(function() {
          alert("Player 1 wins!");
        }, 100);
        return;
      }
    }
  } else if (event.key === player2Key) {
    if (now - lastPlayer2Click >= clickDelay && !isPlayer2KeyPressed) {
      player2Score++;
      player1Score = winningScore - player2Score;
      lastPlayer2Click = now;
      isPlayer2KeyPressed = true;
      if (player2Score >= winningScore) {
        document.getElementById("player1").style.width = "0%";
        document.getElementById("player2").style.width = "100%";
        setTimeout(function() {
          alert("Player 2 wins!");
        }, 100);
        return;
      }
    }
  }

  const player1Width = (player1Score / winningScore) * 100;
  const player2Width = (player2Score / winningScore) * 100;
  document.getElementById("player1").style.width = `${player1Width}%`;
  document.getElementById("player2").style.width = `${player2Width}%`;
}

function resetKeyPress(event) {
  if (!isGameStarted) return;
  if (event.key === player1Key) {
    isPlayer1KeyPressed = false;
  } else if (event.key === player2Key) {
    isPlayer2KeyPressed = false;
  }
}

// Countdown and start the game
let isGameStarted = false;
const startButton = document.getElementById("start-button");
startButton.addEventListener("click", () => {
  startButton.textContent = "3";
  setTimeout(() => {
    startButton.textContent = "2";
    setTimeout(() => {
      startButton.textContent = "1";
      setTimeout(() => {
        startButton.style.display = "none";
        isGameStarted = true;
      }, 1000);
    }, 1000);
  }, 1000);
});

// Listen for key presses
document.addEventListener("keydown", updateScores);
document.addEventListener("keyup", resetKeyPress);