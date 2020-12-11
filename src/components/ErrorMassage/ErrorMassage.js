import React from 'react';

import classes from './ErrorMassage.module.css';
import { connect } from 'react-redux';

function ErrorMassage({ erroMasage }) {
  return <div className={classes.errorMassage}>{erroMasage}</div>;
}

const mapStateToProps = (state, props) => ({
  erroMasage: state.contacts.erroMasage,
});
export default connect(mapStateToProps)(ErrorMassage);
// ErrorMassage.defaultProps = { erroMasage: 'Is already in contacts.' };
