const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');

let score0El = document.getElementById('score--0');
let score1El = document.getElementById('score--1');
let current0El = document.getElementById('current--0');
let current1El = document.getElementById('current--1');
let diceEl = document.querySelector('.dice');
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
  console.log(result.activePlayer, result.diceVal);
  if (result.gameWon) {
    hideDice();
    document
      .querySelector(`.player--${result.activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${result.activePlayer}`)
      .classList.remove('player--active');
  } else {
    hideDice();
    const currentDice = document.getElementById(`dice-${result.diceVal}`);
    currentDice.classList.remove('hidden');
    document.getElementById(`current--${result.activePlayer}`).textContent =
      result.currentVal.toString();
    document
      .querySelector(`.player--${result.activePlayer}`)
      .classList.add('player--active');
  }

  if (result.onHold) {
    renderHold(result);
  }

  if (result.playerChanged && !result.onHold) {
    toggleView();
  }

  if (result.isNew) {
    renderNew(result);
  }
};

//Function to hide the dice element.
const hideDice = function () {
  const diceClass = document.querySelectorAll(`.dice`);
  diceClass.forEach(eachDice => {
    eachDice.classList.add('hidden');
  });
};

//Toggle view of active player
const toggleView = function () {
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//Render view when new game.
const renderNew = function (result) {
  hideDice();
  // toggleView();
  current0El.textContent = 0;
  current1El.textContent = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
};

const renderHold = function (result) {
  document.getElementById(`score--${result.activePlayer}`).textContent =
    result.score[result.activePlayer];
  toggleView();
  current0El.textContent = 0;
  current1El.textContent = 0;
};
