import './reset.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import './reset.css';
import './index.css';

import Game from './components/game';

//REDUX
import {newGame} from './actions/newGame';
import {toggleModal} from './actions/toggleModal';
import {makeGuess} from './actions/makeGuess';
import reducer from './reducers/index.js';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <Game />
    </Provider>,
    document.getElementById('root')
);







