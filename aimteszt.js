// define variables
var gameboard = document.querySelector(".gameboard");
var scoreDisplay = document.getElementById("score");
var livesDisplay = document.getElementById("lives");
var startButton = document.getElementById("start-button");
var restartButton = document.getElementById("restart-button");
var colorSelect = document.getElementById("color-select");
var dots = [];
var score = 0;
var lives = 3;
var gameInterval;
var dotInterval;
var dotClicked = false; // new variable to track whether a dot was clicked or not

// define functions
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function createDot() {
    var dot = document.createElement("div");
    dot.classList.add("dot");
    dot.style.backgroundColor = colorSelect.value;
    dot.style.top = getRandomNumber(350, 350) + "px";
    dot.style.width = getRandomNumber(500, 500) + "px";
    dot.addEventListener("click", function() {
      dot.remove();
      score++;
      scoreDisplay.textContent = score;
      dotClicked = true; // set dotClicked to true when a dot is clicked
    });
    gameboard.appendChild(dot);
    dots.push(dot);
  }
  
function startGame() {
  score = 0;
  lives = 3;
  scoreDisplay.textContent = score;
  livesDisplay.textContent = "❤️❤️❤️";
  startButton.style.display = "none";
  restartButton.style.display = "inline-block";
  gameboard.style.display = "block";
  dotInterval = setInterval(createDot, 1000);
  gameInterval = setInterval(function() {
    dotClicked = false; // reset dotClicked at the beginning of each game loop
    for (var i = 0; i < dots.length; i++) {
      var dot = dots[i];
      dot.style.display = "none";
    }
    var randomDotIndex = getRandomNumber(0, dots.length);
    var randomDot = dots[randomDotIndex];
    randomDot.style.display = "block";
    setTimeout(function() {
      randomDot.style.display = "none";
      if (!dotClicked) { // remove a life only if a dot was not clicked
        lives--;
        livesDisplay.textContent = "❤️".repeat(lives);
        if (lives === 0) {
          clearInterval(gameInterval);
          clearInterval(dotInterval);
          alert("Game Over! Your score is " + score);
          restartButton.click();
        }
      }
    }, 1000);
  }, 1500);
}

function restartGame() {
    for (var i = 0; i < dots.length; i++) {
    var dot = dots[i];
    dot.remove();
    }
    dots = [];
    startButton.style.display = "inline-block";
    restartButton.style.display = "none";
    gameboard.style.display = "none";
    }
    
    // add event listeners
    startButton.addEventListener("click", startGame);
    restartButton.addEventListener("click", restartGame);
    
    colorSelect.addEventListener("change", function() {
    for (var i = 0; i < dots.length; i++) {
    var dot = dots[i];
    dot.style.backgroundColor = colorSelect.value;
    }
    });
    
    // hide the gameboard and restart button initially
    gameboard.style.display = "none";
    restartButton.style.display = "none";