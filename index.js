let games = document.querySelectorAll(".game");
let activeIndex = 0;
games[activeIndex].classList.add("active");

// Add event listeners for mouseover and mouseout events
games.forEach((game) => {
  game.addEventListener("mouseover", function () {
    games[activeIndex].classList.remove("active");
    activeIndex = Array.from(games).indexOf(this);
    games[activeIndex].classList.add("active");
    games.forEach((otherGame) => {
      if (otherGame !== this) {
        otherGame.style.animation = "none";
        otherGame.style.backgroundColor = "";
        otherGame.querySelector(".arrow").style.display = "none";
      }
    });
    this.querySelector(".arrow").style.display = "inline-block";
    updateImage(); // Update the image when the active game changes
  });

  game.addEventListener("mouseout", function () {
    games.forEach((otherGame) => {
      if (otherGame !== this) {
        otherGame.style.animation = "";
        otherGame.classList.remove("active");
        otherGame.querySelector(".arrow").style.display = "none";
      }
    });
    games[activeIndex].classList.add("active");
    this.querySelector(".arrow").style.display = "none";
    updateImage(); // Update the image when the active game changes
  });
});

document.addEventListener("keydown", function (event) {
  if (event.code === "ArrowUp" && activeIndex > 0) {
    games[activeIndex].classList.remove("active");
    activeIndex--;
    games[activeIndex].classList.add("active");
    games.forEach((otherGame) => {
      if (otherGame !== games[activeIndex]) {
        otherGame.querySelector(".arrow").style.display = "none";
      } else {
        otherGame.querySelector(".arrow").style.display = "inline-block";
      }
    });
    updateImage(); // Update the image when the active game changes
  } else if (event.code === "ArrowDown" && activeIndex < games.length - 1) {
    games[activeIndex].classList.remove("active");
    activeIndex++;
    games[activeIndex].classList.add("active");
    games.forEach((otherGame) => {
      if (otherGame !== games[activeIndex]) {
        otherGame.querySelector(".arrow").style.display = "none";
      } else {
        otherGame.querySelector(".arrow").style.display = "inline-block";
      }
    });
    updateImage(); // Update the image when the active game changes
  } else if (event.code === "Enter") {
    games[activeIndex].click(); // Opens the active game
  }
});

window.addEventListener('load', function() {
  updateImage();
});

function updateImage() {
  let image = document.querySelector(".img");
  let activeGame = document.querySelector(".active");
  if (activeGame.id === "game-1") {
    image.src = "pics/pong.jpeg"; // Replace with the image for game 1
  } else if (activeGame.id === "game-2") {
    image.src = "pics/aimteszt.png"; // Replace with the image for game 2
  } else if (activeGame.id === "game-3") {
    image.src = "pics/spammer.png"; // Replace with the image for game 3
  } else {
    image.src = ""; // Clear the image if no game is active
  }
}
