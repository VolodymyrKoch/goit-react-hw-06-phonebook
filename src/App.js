import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import ContactForm from './components/ContactForm/ContactForm.js';
import Filter from './components/Filter/Filter.js';
import ContactList from './components/ContactList/ContactList.js';
import ErrorMassage from './components/ErrorMassage/ErrorMassage.js';
import classes from './App.module.css';
import './bases.css';
import classesEror from './components/ErrorMassage/ErrorMassage.module.css';
import { addContact } from './redux/actions/action.js';
import { connect } from 'react-redux';
console.log(addContact.addContact);

class App extends Component {
  // state = {
  //   contacts: [
  //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   ],
  //   filter: '',
  //   erroMasage: '',
  // };
  // componentDidMount() {
  //   if (localStorage.getItem('contacts')) {
  //     this.setState({ contacts: JSON.parse(localStorage.getItem('contacts')) });
  //   }
  // }
  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.contacts !== this.state.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

  // addContacts = el => {
  //   if (this.state.contacts.find(item => item.name === el.name)) {
  //     this.setState({ erroMasage: 'Is already in contacts.' });
  //     setTimeout(() => {
  //       this.setState({ erroMasage: '' });
  //     }, 1500);
  //   } else {
  //     this.props.addContact(el);

  //     this.setState(prevState => {
  //       const updateState = [...prevState.contacts, el];
  //       return { contacts: updateState, erroMasage: '' };
  //     });
  //   }
  // };

  // handleFilter = () => {
  //   const { contacts, filter } = this.state;
  //   return contacts.filter(contactItem =>
  //     contactItem.name.toLowerCase().includes(filter.toLowerCase()),
  //   );
  // };

  // handleDelete = id => {
  //   const { contacts } = this.state;
  //   const obj = contacts.find(el => el.id === id);
  //   const index = contacts.indexOf(obj);
  //   this.setState(prevState => ({
  //     contacts: [
  //       ...prevState.contacts.slice(0, index),
  //       ...prevState.contacts.slice(index + 1),
  //     ],
  //   }));
  //   this.setState({ filter: '' }); // очистили інпут після нажаття на кнопку delete
  // };

  // filterRender = filter => {
  //   this.setState({ filter }); // відповідає запису this.setState({ filter: filter })
  // };
  render() {
    // const { filter, contacts, erroMasage } = this.state;
    // const visibleContact = this.handleFilter();
    // const visibleFilter = contacts.length > 1;

    return (
      <>
        <div className={classes.conteiner}>
          <ContactForm />
          {/* <ContactForm addContacts={this.addContacts} /> */}

          <Filter
          // filter={filter}
          // filterRender={this.filterRender}
          // visibleFilter={visibleFilter}
          />

          <ContactList />

          <CSSTransition
            in={!!this.props.erroMasage}
            timeout={250}
            appear={true}
            classNames={{ ...classesEror }}
            unmountOnExit
          >
            <ErrorMassage />
          </CSSTransition>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state, props) => ({
  erroMasage: state.contacts.erroMasage,
});

// const mapStateToProps = (state, props) => ({
//   contacts: state.contacts,
// });

// const mapDispatchToProps = dispatch => ({
//   addContact: contact => {
//     dispatch(addContact.addContact(contact));
//   },
// });
// const mapDispatchToProps = {
//   addContact,
// };

export default connect(mapStateToProps)(App);
// export default connect(mapStateToProps, mapDispatchToProps)(App);
