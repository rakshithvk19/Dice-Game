import { WIN_SCORE, DICE_SIDES, DICE_SWITCH_PLAYER_VAL } from './config.js';

const modelResult = {
  activePlayer: 0,
  currentVal: 0,
  score: [0, 0],
  gameWon: false,
  playerChanged: false,
  onHold: false,
  isNew: false,
  diceVal: 6,
};

//Validation rules when dice rolled.
export const validateBtnRoll = function () {
  modelResult.isNew = false;
  if (modelResult.score[modelResult.activePlayer] >= WIN_SCORE) {
    //When current score value is equal to max score.
    modelResult.gameWon = true;
  } else {
    modelResult.diceVal = Math.trunc(Math.random() * DICE_SIDES + 1);
    if (modelResult.diceVal !== DICE_SWITCH_PLAYER_VAL) {
      modelResult.currentVal += modelResult.diceVal;
    } else {
      //When dice rolled is  1.
      modelResult.currentVal = 0;
      modelResult.playerChanged = true;
    }
  }

  return modelResult;
};

//Validation rules when dice held.
export const validateBtnHold = function () {
  modelResult.score[modelResult.activePlayer] += modelResult.currentVal;

  if (modelResult.score[modelResult.activePlayer] >= WIN_SCORE) {
    //When score value is equal to max score.
    modelResult.gameWon = true;
    modelResult.onHold = true;
    modelResult.currentVal = 0;
  } else {
    //On Hold
    modelResult.playerChanged = true;
    modelResult.onHold = true;
    modelResult.currentVal = 0;
  }
  return modelResult;
};

//Validation when new game.
export const validateBtnNew = function () {
  modelResult.score.forEach(eachScore => (eachScore = 0));
  modelResult.gameWon = false;
  modelResult.currentVal = 0;
  modelResult.onHold = false;
  modelResult.isNew = true;

  return modelResult;
};

//Switching player
export const switchPlayer = function () {
  modelResult.currentVal = 0;
  modelResult.playerChanged = false;
  modelResult.onHold = false;
  if (modelResult.activePlayer) {
    modelResult.activePlayer = 0;
  } else {
    modelResult.activePlayer = 1;
  }
};
