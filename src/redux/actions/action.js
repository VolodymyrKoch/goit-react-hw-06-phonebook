import { createAction } from '@reduxjs/toolkit';
// ----------without Toolkit--------------
// import {
//   ADD_CONTACT,
//   REMOVE_CONTACT,
//   CHANGE_FILTER,
//   ERROR_MESSAGE,
// } from '../actionTypes.js';

// const addContact = contact => ({
//   type: ADD_CONTACT,
//   payload: contact,
// });
// const addContact = createAction(ADD_CONTACT);

// const removeContact = id => ({
//   type: REMOVE_CONTACT,
//   payload: id,
// });

// const changeFilter = filter => ({
//   type: CHANGE_FILTER,
//   payload: filter,
// });

// const erroMasage = payload => ({
//   type: ERROR_MESSAGE,
//   payload: payload,
// });

// export default { addContact, removeContact, changeFilter };

// ----with Toolkit----
const addContact = createAction('ADD_CONTACT');
const removeContact = createAction('REMOVE_CONTACT');
const changeFilter = createAction('CHANGE_FILTER');
const erroMasage = createAction('ERROR_MESSAGE');
export { addContact, removeContact, changeFilter, erroMasage };
