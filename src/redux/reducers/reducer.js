// import types from '../actionTypes.js';
import { createReducer } from '@reduxjs/toolkit';
// імпортуєм весь файл action.js і
// редактуємо його як обєкт з імям actions
// import actions from '../actions/action.js';
import { v4 as uuidv4 } from 'uuid';

import {
  addContact,
  removeContact,
  changeFilter,
  erroMasage,
} from '../actions/action.js';
// import {
//   ADD_CONTACT,
//   REMOVE_CONTACT,
//   CHANGE_FILTER,
//   ERROR_MESSAGE,
// } from '../actionTypes.js';
// const { ADD_CONTACT, REMOVE_CONTACT } = types;
import { combineReducers } from 'redux';

// диструктиризуєм наш обєкт actions
// const { addContact, removeContact } = actions;
// console.log(addContact, removeContact);

const initialState = {
  items: JSON.parse(localStorage.getItem('contacts')) || [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
  erroMasage: '',
};
// ----with Toolkit----
const CreateAddContact = (state, action) => {
  return [...state, { ...action.payload, id: uuidv4() }];
};
const CreateRemoveContact = (state, action) => {
  return state.filter(item => {
    return item.id !== action.payload;
  });
};

const itemsCreateReducer = createReducer(initialState.items, {
  [addContact]: CreateAddContact,
  [removeContact]: CreateRemoveContact,
});
console.log(itemsCreateReducer);

const filterCreateReducer = createReducer(initialState.filter, {
  [changeFilter]: (state, action) => action.payload,
});

const erroMasageCreateReducer = createReducer(initialState.erroMasage, {
  [erroMasage]: (state, action) => action.payload,
});

export const contactsReducer = combineReducers({
  items: itemsCreateReducer,
  filter: filterCreateReducer,
  erroMasage: erroMasageCreateReducer,
});

// ----------without Toolkit--------------
// export const itemsReducer = (state = initialState.items, { type, payload }) => {
//   switch (type) {
//     case ADD_CONTACT:
//       return [...state, { ...payload, id: uuidv4() }];

//     case REMOVE_CONTACT:
//       return state.filter(item => {
//         return item.id !== payload;
//       });

//     default:
//       return state;
//   }
// };

// export const filterReducer = (
//   state = initialState.filter,
//   { type, payload },
// ) => {
//   switch (type) {
//     case CHANGE_FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };

// export const erroMasageReducer = (
//   state = initialState.erroMasage,
//   { type, payload },
// ) => {
//   switch (type) {
//     case ERROR_MESSAGE:
//       return payload;

//     default:
//       return state;
//   }
// };

// export const contactsReducer = combineReducers({
//   items: itemsReducer,
//   filter: filterReducer,
//   erroMasage: erroMasageReducer,
// });
