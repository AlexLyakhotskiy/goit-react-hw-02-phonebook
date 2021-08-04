import React from 'react';

const Filter = ({ value, onChange }) => (
  <input value={value} onChange={onChange} name="filter" type="text"></input>
);

export default Filter;
