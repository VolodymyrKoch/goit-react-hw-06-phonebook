// import { createStore } from 'redux';
// import { combineReducers } from 'redux';
import { contactsReducer } from './reducers/reducer.js';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { configureStore } from '@reduxjs/toolkit';

// without Toolkit
// const rootReducer = combineReducers({
//   contacts: contactsReducer,
// });

// const store = createStore(rootReducer, composeWithDevTools());
// ---------------

// with Toolkit
const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});
// ---------------

store.subscribe(() => {
  localStorage.setItem(
    'contacts',
    JSON.stringify(store.getState().contacts.items),
  );
});

export default store;
