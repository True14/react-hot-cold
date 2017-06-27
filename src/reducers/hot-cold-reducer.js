import {NEW_GAME, TOGGLE_MODAL, MAKE_GUESS} from '../actions';
// import {newGame, toggleModal, makeGuess} from '../actions';

const initialState = {
    guesses: [],
    feedback: 'Make your guess!',
    correctAnswer: Math.floor(Math.random() * 100) + 1,
    showInfoModal: false
};

const hotColdReducer = (state=initialState, action) => {
    if (action.type === NEW_GAME) {
        return Object.assign({}, initialState, {correctAnswer: Math.floor(Math.random() * 100) + 1});
    } else if (action.type === TOGGLE_MODAL) {
        return Object.assign({}, state, {showInfoModal: !state.showInfoModal});
    } else if (action.type === MAKE_GUESS) {

      let feedback;
      action.guess = parseInt(action.guess, 10);
      if (isNaN(action.guess)) {
        feedback = 'Please enter a valid number'
        return Object.assign({}, state, {feedback});
      }

      const difference = Math.abs(action.guess - state.correctAnswer);


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

export default hotColdReducer;
