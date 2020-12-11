import {
  ADD_CONTACT,
  REMOVE_CONTACT,
  CHANGE_FILTER,
  ERROR_MESSAGE,
} from '../actionTypes.js';

// const {}=types;

const addContact = contact => ({
  type: ADD_CONTACT,
  payload: contact,
});

const removeContact = id => ({
  type: REMOVE_CONTACT,
  payload: id,
});
const changeFilter = filter => ({
  type: CHANGE_FILTER,
  payload: filter,
});
const erroMasage = payload => ({
  type: ERROR_MESSAGE,
  payload: payload,
});

export { addContact, removeContact, changeFilter, erroMasage };
// export default { addContact, removeContact, changeFilter };
