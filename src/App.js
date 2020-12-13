import React from 'react';
import { CSSTransition } from 'react-transition-group';
import ContactForm from './components/ContactForm/ContactForm.js';
import Filter from './components/Filter/Filter.js';
import ContactList from './components/ContactList/ContactList.js';
import ErrorMassage from './components/ErrorMassage/ErrorMassage.js';
import classes from './App.module.css';
import './bases.css';
import classesEror from './components/ErrorMassage/ErrorMassage.module.css';
// import './components/ErrorMassage/ErrorMassage.module.css';
import { addContact } from './redux/actions/action.js';
import { connect } from 'react-redux';
console.log(addContact.addContact);
console.log(addContact);

function App({ erroMasage }) {
  console.log(erroMasage);

  return (
    <>
      <div className={classes.conteiner}>
        <ContactForm />

        <Filter />

        <ContactList />

        <CSSTransition
          in={!!erroMasage}
          timeout={250}
          appear={true}
          // classNames="errorAnimation"
          classNames={{ ...classesEror }}
          unmountOnExit
        >
          <ErrorMassage />
        </CSSTransition>
      </div>
    </>
  );
}

const mapStateToProps = (state, props) => ({
  erroMasage: state.contacts.erroMasage,
});

export default connect(mapStateToProps)(App);
