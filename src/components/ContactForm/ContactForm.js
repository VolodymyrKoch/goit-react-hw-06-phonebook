import React, { Component } from 'react';
import classes from './ContactForm.module.css';
import { CSSTransition } from 'react-transition-group';
import '../../components/anime.css';
// import { v4 as uuidv4 } from 'uuid';
import { addContact, erroMasage } from '../../redux/actions/action.js';
import { connect } from 'react-redux';

//

const INITIAL_STATE = {
  name: '',
  number: '',
};

class ContactForm extends Component {
  state = {
    ...INITIAL_STATE,
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      // id: uuidv4(),
      [name]: value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    // this.props.addContact({ ...this.state });
    console.log(this.props.contacts);
    if (this.props.contacts.find(item => item.name === this.state.name)) {
      this.props.erroMasage('Is already in contacts.');
      setTimeout(() => {
        this.props.erroMasage('');
      }, 1500);
    } else {
      this.props.addContact(this.state);
    }
    this.setState({ name: '', number: '' }); //1 варіант очищаю input після submit(відправки)
    // this.setState(INITIAL_STATE);  //2 варіант очищаю input після submit(відправки)
  };

  render() {
    return (
      <>
        <CSSTransition
          in={true}
          classNames="logo"
          timeout={500}
          appear={true}
          unmountOnExit
        >
          <h2 className={classes.tilie}>Phonebook</h2>
        </CSSTransition>
        <div className={classes.contactFormConteiner}>
          <form
            action="submit"
            className={classes.contactForm}
            onSubmit={this.handleSubmit}
          >
            <div className={classes.lableName}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                placeholder="enter name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </div>

            <div className={classes.lableName}>
              <label htmlFor="number">Number</label>
              <input
                type="text"
                name="number"
                placeholder="enter number"
                value={this.state.number}
                onChange={this.handleChange}
              />
            </div>
            <button type="submit">Add contacts</button>
          </form>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state, props) => ({
  contacts: state.contacts.items,
});

// const mapDispatchToProps = dispatch => ({
//   addContact: contact => {
//     dispatch(addContact(contact));
//   },
// });
const mapDispatchToProps = {
  addContact,
  erroMasage,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
