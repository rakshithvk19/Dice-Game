import * as view from './view.js';
import * as model from './model.js';

//Btn Roll subscriber.
const controlBtnRoll = function () {
  const modelRollResult = model.validateBtnRoll();
  view.renderView(modelRollResult);
  if (modelRollResult.playerChanged) {
    model.switchPlayer();
  }
};

//Btn Hold subscriber.
const controlBtnHold = function () {
  const modelHoldResult = model.validateBtnHold();
  view.renderView(modelHoldResult);
  if (modelHoldResult.playerChanged) {
    model.switchPlayer();
  }
};

//Btn New subscriber.
const controlBtnNew = function () {
  const modelNewResult = model.validateBtnNew();
  view.renderView(modelNewResult);
  model.switchPlayer();
};

const init = function () {
  view.addHandlerBtnRoll(controlBtnRoll);
  view.addHandlerBtnHold(controlBtnHold);
  view.addHandlerBtnNew(controlBtnNew);
};
init();
