import { createStore } from 'redux';
import { rootReducer } from './reducers/reducer.js';
import { composeWithDevTools } from 'redux-devtools-extension';

// console.log(createStore);

const store = createStore(rootReducer, composeWithDevTools());

export default store;
