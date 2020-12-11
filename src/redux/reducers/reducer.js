// import types from '../actionTypes.js';

// імпортуєм весь файл action.js і
// редактуємо його як обєкт з імям actions
// import actions from '../actions/action.js';
import { v4 as uuidv4 } from 'uuid';
import actions from '../actions/action.js';
import {
  ADD_CONTACT,
  REMOVE_CONTACT,
  CHANGE_FILTER,
  ERROR_MESSAGE,
} from '../actionTypes.js';
// const { ADD_CONTACT, REMOVE_CONTACT } = types;
import { combineReducers } from 'redux';
// console.log(actions);

// диструктиризуєм наш обєкт actions
// const { addContact, removeContact } = actions;
// console.log(addContact, removeContact);

const initialState = {
  items: JSON.parse(localStorage.getItem('contacts')) || [],
  filter: '',
  erroMasage: '',
};

export const itemsReducer = (state = initialState.items, { type, payload }) => {
  switch (type) {
    case ADD_CONTACT:
      return [...state, { ...payload, id: uuidv4() }];

    case REMOVE_CONTACT:
      // return [...state, { ...payload, id: uuidv4() }];
      return state.filter(item => {
        return item.id !== payload;
      });

    default:
      return state;
  }
};
// export default { itemsReducer };

export const filterReducer = (
  state = initialState.filter,
  { type, payload },
) => {
  switch (type) {
    case CHANGE_FILTER:
      return payload;

    default:
      return state;
  }
};

export const erroMasageReducer = (
  state = initialState.erroMasage,
  { type, payload },
) => {
  switch (type) {
    case ERROR_MESSAGE:
      return payload;

    default:
      return state;
  }
};

export const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  erroMasage: erroMasageReducer,
});
