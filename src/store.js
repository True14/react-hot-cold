import { createStore } from 'redux';
import hotColdReducer from './reducers/hot-cold-reducer'
const store = createStore(hotColdReducer);

export default store;
