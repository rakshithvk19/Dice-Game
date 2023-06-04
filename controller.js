import * as view from './view.js';
import * as model from './model.js';

//Btn Roll subscriber.
const controlBtnRoll = function () {
  const modelRollResult = model.validateBtnRoll();
  view.renderView(modelRollResult);
};

//Btn Hold subscriber.
const controlBtnHold = function () {
  const modelHoldResult = model.validateBtnHold();
};

//Btn New subscriber.
const controlBtnNew = function () {};

const init = function () {
  view.addHandlerBtnRoll(controlBtnRoll);
  view.addHandlerBtnHold(controlBtnHold);
};
init();

const input = document.querySelectorAll('.dice');
input.forEach(function (eachImg, index) {
  localStorage.setItem(`dice${index + 1}`, eachImg.src);
});
