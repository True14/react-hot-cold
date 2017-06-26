import './reset.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';

import './reset.css';
import './index.css';

import Game from './components/game';

//REDUX
import {newGame} from './actions/newGame';
import {toggleModal} from './actions/toggleModal';
import {makeGuess} from './actions/makeGuess';
import reducer from './reducers/index.js';

const store = createStore(reducer);
console.log(store.getState());
store.dispatch(makeGuess(5));
console.log(store.getState());

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);







