import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import ContactForm from './components/ContactForm/ContactForm.js';
import Filter from './components/Filter/Filter.js';
import ContactList from './components/ContactList/ContactList.js';
import ErrorMassage from './components/ErrorMassage/ErrorMassage.js';
import classes from './App.module.css';
import './bases.css';
import classesEror from './components/ErrorMassage/ErrorMassage.module.css';
import addContact from './redux/actions/action.js';
import { connect } from 'react-redux';
console.log(addContact.addContact);

class App extends Component {
  state = {
    contacts: [],
    filter: '',
    erroMasage: '',
  };
  componentDidMount() {
    if (localStorage.getItem('contacts')) {
      this.setState({ contacts: JSON.parse(localStorage.getItem('contacts')) });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContacts = el => {
    if (this.state.contacts.find(item => item.name === el.name)) {
      this.setState({ erroMasage: 'Is already in contacts.' });
      setTimeout(() => {
        this.setState({ erroMasage: '' });
      }, 1500);
    } else {
      this.props.addContact(el);

      this.setState(prevState => {
        const updateState = [...prevState.contacts, el];
        return { contacts: updateState, erroMasage: '' };
      });
    }
  };

  handleFilter = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contactItem =>
      contactItem.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  handleDelete = id => {
    const { contacts } = this.state;
    const obj = contacts.find(el => el.id === id);
    const index = contacts.indexOf(obj);
    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts.slice(0, index),
        ...prevState.contacts.slice(index + 1),
      ],
    }));
    this.setState({ filter: '' }); // очистили інпут після нажаття на кнопку delete
  };

  filterRender = filter => {
    this.setState({ filter }); // відповідає запису this.setState({ filter: filter })
  };
  render() {
    const { filter, contacts, erroMasage } = this.state;
    const visibleContact = this.handleFilter();
    const visibleFilter = contacts.length > 1;
    // console.log(visibleFilter);
    return (
      <>
        <div className={classes.conteiner}>
          <ContactForm addContacts={this.addContacts} />

          <Filter
            filter={filter}
            filterRender={this.filterRender}
            visibleFilter={visibleFilter}
          />

          <ContactList array={visibleContact} deleteItem={this.handleDelete} />

          <CSSTransition
            in={!!erroMasage}
            timeout={250}
            appear={true}
            classNames={{ ...classesEror }}
            unmountOnExit
          >
            <ErrorMassage>{erroMasage}</ErrorMassage>
          </CSSTransition>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state, props) => ({
  contacts: state.contacts,
});

const mapDispatchToProps = dispatch => ({
  addContact: contact => {
    dispatch(addContact.addContact(contact));
  },
});
// const mapDispatchToProps = {
//   addContact,
// };
export default connect(mapStateToProps, mapDispatchToProps)(App);
