// import types from '../actionTypes.js';

// імпортуєм весь файл action.js і
// редактуємо його як обєкт з імям actions
// import actions from '../actions/action.js';
import { v4 as uuidv4 } from 'uuid';
import actions from '../actions/action.js';
import { ADD_CONTACT, REMOVE_CONTACT } from '../actionTypes.js';
// const { ADD_CONTACT, REMOVE_CONTACT } = types;
import { combineReducers } from 'redux';
// console.log(actions);

// диструктиризуєм наш обєкт actions
const { addContact, removeContact } = actions;
console.log(addContact, removeContact);

export const contactsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_CONTACT:
      return [...state, { ...payload, id: uuidv4() }];

    case REMOVE_CONTACT:
      // return [...state, { ...payload, id: uuidv4() }];
      return state.filtert(item => {
        return item.id !== payload;
      });

    default:
      return state;
  }
};
// export default { contactsReducer };

export const filterReducer = (state = '', { type, payload }) => {
  // eslint-disable-next-line default-case
  switch (type) {
    case '':
      return payload;
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
