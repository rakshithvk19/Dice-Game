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
export const addHandlerBtnNew = function () {};

//Render the changes in the view.
export const renderView = function (result) {
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
  }
};

//Function to hide the dice element.
const hideDice = function () {
  const diceClass = document.querySelectorAll(`.dice`);
  diceClass.forEach(eachDice => {
    eachDice.classList.add('hidden');
  });
};
