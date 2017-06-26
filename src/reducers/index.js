import {NEW_GAME} from '../actions/newGame';
import {TOGGLE_MODAL} from '../actions/toggleModal';
import {MAKE_GUESS} from '../actions/makeGuess';

import {combineReducers} from 'redux';

const initialState = {
    guesses: [],
    feedback: 'Make your guess!',
    correctAnswer: Math.floor(Math.random() * 100) + 1,
    showInfoModal: false
};

export default (state=initialState, action) => {
    if (action.type === NEW_GAME) {
        return Object.assign({}, initialState, {correctAnswer: Math.floor(Math.random() * 100) + 1});
    } else if (action.type === TOGGLE_MODAL) {
        return Object.assign({}, state, {showInfoModal: !state.showInfoModal});
    } else if (action.type === MAKE_GUESS) {

      const difference = Math.abs(action.guess - state.correctAnswer);

      let feedback;
      if (difference >= 50) {
          feedback = 'You\'re Ice Cold...';
      }
      else if (difference >= 30) {
          feedback = 'You\'re Cold...';
      }
      else if (difference >= 10) {
          feedback = 'You\'re Warm';
      }
      else if (difference >= 1) {
          feedback = 'You\'re Hot!';
      }
      else {
          feedback = 'You got it!';
      }
        return Object.assign({}, state, {feedback, guesses: [...state.guesses, action.guess]});
    }
    return state;
};
