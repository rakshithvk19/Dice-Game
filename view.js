const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');

let score0El = document.getElementById('score--0');
let score1El = document.getElementById('score--1');
let current0El = document.getElementById('current--0');
let current1El = document.getElementById('current--1');
let player0El = document.querySelector(`.player--0`);
let player1El = document.querySelector(`.player--1`);

score0El.textContent = 0;
score1El.textContent = 0;

//Btn Roll Publisher.
export const addHandlerBtnRoll = function (helper) {
  btnRoll.addEventListener('click', helper);
};

//Btn Hold Publisher.
export const addHandlerBtnHold = function (helper) {
  btnHold.addEventListener('click', helper);
};

//Btn New Publisher.
export const addHandlerBtnNew = function (helper) {
  btnNew.addEventListener('click', helper);
};

//Render the changes in the view.
export const renderView = function (result) {
  console.log(result);

  renderRoll(result);
  renderNew(result);
  renderHold(result);
  renderGameWon(result);
};

//Render view when dice rolled.
const renderRoll = function (result) {
  if (result.gameWon) return;
  if (result.onRoll) {
    hideDice();
    toggleView(result);
    const currentDice = document.getElementById(`dice-${result.diceVal}`);
    currentDice.classList.remove('hidden');
    document.getElementById(`current--${result.activePlayer}`).textContent =
      result.currentVal.toString();
  }
};

//Render view when game won.
const renderGameWon = function (result) {
  if (result.gameWon) {
    hideDice();
    document
      .querySelector(`.player--${result.activePlayer}`)
      .classList.add('player--winner');
  }
};

//Toggle view of active player
const toggleView = function (result) {
  if (result.playerChanged) {
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
};

//Function to hide the dice element.
const hideDice = function () {
  const diceClass = document.querySelectorAll(`.dice`);
  diceClass.forEach(eachDice => {
    eachDice.classList.add('hidden');
  });
};

//Render view when new game.
const renderNew = function (result) {
  if (result.isNew) {
    hideDice();
    toggleView(result);
    current0El.textContent = 0;
    current1El.textContent = 0;
    score0El.textContent = 0;
    score1El.textContent = 0;
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
  }
};

//Render view when dice held.
const renderHold = function (result) {
  if (result.onHold) {
    document.getElementById(`score--${result.activePlayer}`).textContent =
      result.score[result.activePlayer];
    toggleView(result);
    current0El.textContent = 0;
    current1El.textContent = 0;
  }
  if (result.gameWon) return;
};
