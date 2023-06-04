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
  model.switchPlayer();
  view.renderView(modelNewResult);
};

const init = function () {
  view.addHandlerBtnRoll(controlBtnRoll);
  view.addHandlerBtnHold(controlBtnHold);
  view.addHandlerBtnNew(controlBtnNew);
};
init();

// To Do
// 1. change the data model but making currentVal as Array
// 2. validate new button to reset both currentVal
// 3. refactor view code.

/**
 * 1. when dice becomes 1.
 * 2. when dice held.
 */
