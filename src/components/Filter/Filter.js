import React from 'react';
import PropTypes from 'prop-types';
import classes from './Filter.module.css';
import { CSSTransition } from 'react-transition-group';
import '../../components/anime.css';
import '../anime.css';
import { connect } from 'react-redux';
import { changeFilter } from '../../redux/actions/action.js';

function Filter({ filter, filterRender, visibleFilter }) {
  // console.log(visibleFilter);
  return (
    <CSSTransition
      in={visibleFilter}
      timeout={250}
      appear={true}
      classNames="logo"
      unmountOnExit
    >
      <label>
        <h2 className={classes.title}>Filter</h2>
        <input
          type="text"
          name="filter"
          placeholder="Finder"
          value={filter}
          onChange={e => filterRender(e.target.value)}
        />
      </label>
    </CSSTransition>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  filterRender: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  filterRender: changeFilter,
};
const mapStateToProps = state => {
  // console.log(state.contacts.items);
  const { filter, items } = state.contacts;
  return {
    filter: filter,
    visibleFilter: items.length > 1,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
