import { createStore, combineReducers } from 'redux';
import { contactsReducer } from './reducers/reducer.js';
import { composeWithDevTools } from 'redux-devtools-extension';

// console.log(createStore);
const rootReducer = combineReducers({
  contacts: contactsReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

store.subscribe(() => {
  localStorage.setItem(
    'contacts',
    JSON.stringify(store.getState().contacts.items),
  );
});

export default store;
