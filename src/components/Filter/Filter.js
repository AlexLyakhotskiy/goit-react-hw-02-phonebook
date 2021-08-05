import React from 'react';
import PropTypes from 'prop-types';

import styles from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <label className={styles.label}>
    Find contacts by name
    <input
      value={value}
      onChange={onChange}
      className={styles.input}
      name="filter"
      type="text"
    ></input>
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
