import React from 'react';

const ContactList = ({ data, remove }) => (
  <ul>
    {data.map(({ name, id, number }) => (
      <li key={id}>
        <p>{name}</p>
        <p>{number}</p>
        <button onClick={() => remove(id)} type="button">
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default ContactList;
