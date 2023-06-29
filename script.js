const diceImg = document.querySelector(".dice");
const btnRollDice = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const btnNewGame = document.querySelector(".btn--new");
const total0 = document.querySelector("#score--0");
const total1 = document.querySelector("#score--1");
const currentScore0 = document.querySelector("#score--0");
const currentScore1 = document.querySelector("#score--1");
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

let score, activePlayer, totals;

const init = function () {
  score = 0;
  activePlayer = 0;
  totals = [0, 0];

  total0.textContent = totals[0];
  total1.textContent = totals[1];

  total0.currentScore0 = 0;
  total1.currentScore1 = 0;
  diceImg.classList.add("hidden");
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
};

init();

const switchPlayer = function () {
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

btnRollDice.addEventListener("click", () => {
  let dice = Math.trunc(Math.random() * 6) + 1;
  diceImg.src = `dice-${dice}.png`;
  diceImg.classList.remove("hidden");

  if (dice !== 1) {
    score += dice;
    document.querySelector(`#current--${activePlayer}`).textContent = score;
  } else {
    score = 0;
    document.querySelector(`#current--${activePlayer}`).textContent = score;
    switchPlayer();
  }
});

btnHold.addEventListener("click", () => {
  totals[activePlayer] += score;
  document.querySelector(`#score--${activePlayer}`).textContent =
    totals[activePlayer];
  score = 0;
  document.querySelector(`#current--${activePlayer}`).textContent = score;
  if (totals[activePlayer] < 20) {
    switchPlayer();
  } else {
    console.log("wygrałaś");
    diceImg.classList.add("hidden");
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add("player--winner");
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove("player--active");
  }
});

btnNewGame.addEventListener("click", init);
