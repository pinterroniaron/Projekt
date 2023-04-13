// változók
const winningScore = 50;
const halfScore = winningScore / 2;
let player1Score = halfScore;
let player2Score = halfScore;
let isFirstKeyPress = true;
const player1Key = "a";
const player2Key = "l";
let clickDelay = 0.1;
let lastPlayer1Click = 0;
let lastPlayer2Click = 0;
let isPlayer1KeyPressed = false;
let isPlayer2KeyPressed = false;

// pont frissítés
function updateScores(event) {
  if (!isGameStarted) return;
  if (isFirstKeyPress) {
    // pont visszaállítás
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
          alert(`${document.getElementById("player1-name").value ? document.getElementById("player1-name").value : "Player 1"} wins!`);
          isFirstKeyPress = false;
          lastPlayer1Click = 0;
          lastPlayer2Click = 0;
          isPlayer1KeyPressed = false;
          isPlayer2KeyPressed = false;
          player1Score = halfScore;
          player2Score = halfScore;
          startButton.style.display = "block";
          playerinput.style.display = "block";
          head.style.display = "block";
          isGameStarted = false;
          startButton.textContent = "Start";
          document.getElementById("player1").style.width = "50%";
          document.getElementById("player2").style.width = "50%"; 
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
          alert(`${document.getElementById("player2-name").value ? document.getElementById("player2-name").value : "Player 2"} wins!`) ;
          isFirstKeyPress = false;
          lastPlayer1Click = 0;
          lastPlayer2Click = 0;
          isPlayer1KeyPressed = false;
          isPlayer2KeyPressed = false;
          player1Score = halfScore;
          player2Score = halfScore;
          startButton.style.display = "block";
          playerinput.style.display = "block";
          head.style.display = "block";
          isGameStarted = false;
          startButton.textContent = "Start";
          document.getElementById("player1").style.width = "50%";
          document.getElementById("player2").style.width = "50%"; 
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

function resetGame() {
  player1Score = halfScore;
  player2Score = halfScore;
  isFirstKeyPress = true;
  lastPlayer1Click = 0;
  lastPlayer2Click = 0;
  isPlayer1KeyPressed = false;
  isPlayer2KeyPressed = false;
  document.getElementById("player1").style.width = `${halfScore}%`;
  document.getElementById("player2").style.width = `${halfScore}%`;
  startButton.style.display = "block";
  playerinput.style.display = "block";
  isGameStarted = false;
}

// visszaszámláló, start gomb
let isGameStarted = false;
const startButton = document.getElementById("start-button");
const playerinput = document.getElementById("player-inputs");
startButton.addEventListener("click", () => {
  startButton.textContent = "3";
  setTimeout(() => {
    startButton.textContent = "2";
    setTimeout(() => {
      startButton.textContent = "1";
      setTimeout(() => {
        startButton.style.display = "none";
        playerinput.style.display = "none";
        isGameStarted = true;
        const head = document.getElementById("head");
        head.style.display = "none";
      }, 1000);
    }, 1000);
  }, 1000);
});

// lenyomások
document.addEventListener("keydown", updateScores);
document.addEventListener("keyup", resetKeyPress);

const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('scroll');
    } else {
        nav.classList.remove('scroll');
    }
});

const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.classList.add('animate__animated', 'animate__pulse');
    });
    card.addEventListener('mouseout', () => {
        card.classList.remove('animate__animated', 'animate__pulse');
    });
});

const btns = document.querySelectorAll('.btn');
const cartCount = document.querySelector('.cart-count');
let count = 0;

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        count++;
        cartCount.innerHTML = count;
    });
});

function darkmode() {
  var element = document.body;
  element.classList.toggle("darkmode");

  if (!element.classList.contains("darkmode")) {
    document.querySelector("#darkmode").innerText = "Sárga/Fekete";
  } else {
    document.querySelector("#darkmode").innerText = "Kék/Piros";
  }
}