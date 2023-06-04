import { WIN_SCORE, DICE_SIDES, DICE_SWITCH_PLAYER_VAL } from './config.js';

const modelResult = {
  activePlayer: 0,
  currentVal: 0,
  score: [0, 0],
  isHidden: true,
  gameWon: false,
  diceVal: 6,
};

//Validation rules when dice rolled.
export const validateBtnRoll = function () {
  if (modelResult.score[modelResult.activePlayer] >= WIN_SCORE) {
    //When current score value is equal to max score.
    modelResult.gameWon = true;
  } else {
    modelResult.diceVal = Math.trunc(Math.random() * DICE_SIDES + 1);
    modelResult.isHidden = false;
    if (modelResult.diceVal !== DICE_SWITCH_PLAYER_VAL) {
      //When dice rolled is 1.
      modelResult.currentVal += modelResult.diceVal;
    } else {
      modelResult.currentVal = 0;
      switchPlayer();
    }
  }

  return modelResult;
};

//validation rules when dice held.
export const validateBtnHold = function () {
  if (modelResult.score[modelResult.activePlayer] >= WIN_SCORE) {
    //When current score value is equal to max score.
    modelResult.gameWon = true;
  } else {
    modelResult.score[modelResult.activePlayer] = modelResult.currentVal;
    modelResult.currentVal = 0;
    switchPlayer();
  }
};

//Switching player
const switchPlayer = function () {
  modelResult.currentVal = 0;
  if (modelResult.activePlayer) {
    modelResult.activePlayer = 0;
  } else {
    modelResult.activePlayer = 1;
  }
};
