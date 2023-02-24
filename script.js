const container = document.querySelector(".container");
const square = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const time = document.querySelector("#time");
const score = document.querySelector("#score");
const easy = document.querySelector(".easy");
const medium = document.querySelector(".medium");
const hard = document.querySelector(".hard");
let result = 0;
let hitPosition;
let currentTime = 60;
let timerId = null;
let countDownTimer;

function randomSquare() {
  square.forEach((square) => {
    square.classList.remove("mole");
  });

  let randomsquare = square[Math.floor(Math.random() * 9)];
  randomsquare.classList.add("mole");
  hitPosition = randomsquare.id;
}

square.forEach((square) => {
  square.addEventListener("mousedown", () => {
    if (square.id == hitPosition) {
      result++;
      score.textContent = result;
      hitPosition = null;
    }
  });
});

function countDown() {
  currentTime--;
  time.textContent = currentTime;

  if (currentTime == 0) {
    clearInterval(countDownTimer);
    clearInterval(timerId);
    alert("GAME OVER! Your Final Score is " + result);
    let confirmation = confirm("PLAY AGAIN?");
    if ((confirmation = true)) {
      location.reload();
    }
  }
}

function moveMole(time) {
  timerId = setInterval(randomSquare, time);
  countDownTimer = setInterval(countDown, 1000);
  container.classList.remove("hide");
  document.querySelector(".level").style.display = "none";
}
easy.addEventListener("click", () => {
  moveMole(750);
});

medium.addEventListener("click", () => {
  moveMole(650);
});

hard.addEventListener("click", () => {
  moveMole(600);
});
