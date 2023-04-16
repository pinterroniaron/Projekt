let games = document.querySelectorAll(".game");
let activeIndex = 0;
games[activeIndex].classList.add("active");

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
    updateImage(); 
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
    updateImage();
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
    updateImage(); 
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
    updateImage(); 
  } else if (event.code === "Enter") {
    games[activeIndex].click();
  }
});

window.addEventListener('load', function() {
  updateImage();
});

function updateImage() {
  let image = document.querySelector(".img");
  let activeGame = document.querySelector(".active");
  let text1 = document.querySelector("#text1");
  let text2 = document.querySelector("#text2");
  let text3 = document.querySelector("#text3");
  let pongcim = document.querySelector("#pongcim");
  let aimcim = document.querySelector("#aimcim");
  let spammercim = document.querySelector("#spammercim");

  if (activeGame.id === "game-1") {
    image.src = "pics/pong.jpeg";
    text1.style.display = "block";
    text2.style.display = "none";
    text3.style.display = "none";
    pongcim.style.display = "block";
    aimcim.style.display = "none";
    spammercim.style.display = "none";
  } else if (activeGame.id === "game-2") {
    image.src = "pics/aimteszt.png";
    text1.style.display = "none";
    text2.style.display = "block";
    text3.style.display = "none";
    pongcim.style.display = "none";
    aimcim.style.display = "block";
    spammercim.style.display = "none";
  } else if (activeGame.id === "game-3") {
    image.src = "pics/spammer.png";
    text1.style.display = "none";
    text2.style.display = "none";
    text3.style.display = "block";
    pongcim.style.display = "none";
    aimcim.style.display = "none";
    spammercim.style.display = "block";
  } else {
    image.src = "";
    text1.style.display = "none";
    text2.style.display = "none";
    text3.style.display = "none";
  }
}