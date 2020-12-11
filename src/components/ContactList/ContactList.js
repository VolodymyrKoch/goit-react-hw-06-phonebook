import React from 'react';
import PropTypes from 'prop-types';
// import { v4 as uuidv4 } from 'uuid';
// import classes from './ContactList.module.css';
import './ContactList.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import '../../components/anime.css';
import { removeContact } from '../../redux/actions/action.js';

const ContactList = function ({ array, deleteItem }) {
  // console.log(array);
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

const handleFilter = (contacts, filter) => {
  return contacts.filter(contactItem =>
    contactItem.name.toLowerCase().includes(filter.toLowerCase()),
  );
};

const mapStateToProps = state => {
  // console.log(state.contacts.items);
  return { array: handleFilter(state.contacts.items, state.contacts.filter) };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
