import React from 'react';
import PropTypes from 'prop-types';
import './ContactList.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import '../../components/anime.css';
import { removeContact } from '../../redux/actions/action.js';

const ContactList = function ({ array, deleteItem }) {
  return (
    <>
      <TransitionGroup component="ul" className="contactList">
        {array.map(item => (
          <CSSTransition key={item.id} timeout={250} classNames="item">
            <li key={item.id}>
              {item.name}: {item.number}
              <button type="button" onClick={() => deleteItem(item.id)}>
                Delete
              </button>
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </>
  );
};
ContactList.propTypes = {
  array: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  deleteItem: PropTypes.func.isRequired,
};
const mapDispatchToProps = {
  deleteItem: removeContact,
};
// ---------------------1-version-filtering-----
const handleFilter = (contacts, filter) => {
  return contacts.filter(contactItem =>
    contactItem.name.toLowerCase().includes(filter.toLowerCase()),
  );
};
const mapStateToProps = state => {
  // console.log(state.contacts.items);
  return { array: handleFilter(state.contacts.items, state.contacts.filter) };
};
// ----------------------2-version-filtering- з диструктуризацією------------
// const mapStateToProps = state => {
//     const { items, filter } = state.contacts;
//   const handleFilter = items.filter(contact =>
//     contact.name.toLowerCase().includes(filter.toLowerCase()),
//   );
//   return {
//     array: handleFilter,
//   };
// };
// -----------------------3-version-filtering-без диструктуризації--------
// const mapStateToProps = state => {
//   return {
//     array: state.contacts.items.filter(contact =>
//       contact.name.toLowerCase().includes(state.contacts.filter.toLowerCase()),
//     ),
//   };
// };
// ---------------------------------
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
