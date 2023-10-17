function randomNumberBubbles() {
  let clutter = "";
  for (i = 1; i < 127; i++) {
    let rnb = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble-box">${rnb}</div>`;
  }
  let mainBtm = document.querySelector(".mainbottom");
  mainBtm.innerHTML = clutter;
}
let newHit = 0;
function hitFunction() {
  newHit = Math.floor(Math.random() * 10);
  let newHitPrint = document.querySelector("#hit");
  newHitPrint.textContent = newHit;
}
function gameOver() {
  let mainWrapper = document.querySelector("#main-wrapper");
  mainWrapper.innerHTML = `<div class="game-over">
  Game Over!
  <br>
  Your score is: ${score}
</div>`;
  let gameOver = document.querySelector(".game-over");
  gameOver.style.display = "block";
}
let timer = 60;
function timerFunction() {
  let time = setInterval(function () {
    if (timer > 0) {
      timer--;
      let timerRun = document.querySelector("#timer");
      timerRun.textContent = timer;
    } else {
      gameOver();
      clearInterval(time);
    }
  }, 1000);
}
let score = 0;
function increaseFunction() {
  score += 10;
  let scoreDisplay = document.querySelector("#score");
  scoreDisplay.textContent = score;
}
function scoreFunction() {
  let mainBottom = document.querySelector(".mainbottom");
  mainBottom.addEventListener("click", function (dets) {
    let clicked = Number(dets.target.textContent);
    if (clicked === newHit) {
      increaseFunction();
      randomNumberBubbles();
      hitFunction();
    } else {
      gameOver();
    }
  });
}

randomNumberBubbles();
hitFunction();
timerFunction();
scoreFunction();
