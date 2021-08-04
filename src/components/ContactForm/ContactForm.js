import React, { Component } from 'react';

import { v4 as uuidv4 } from 'uuid';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onInputChange = e => {
    const { value, name } = e.currentTarget;
    this.setState({ [name]: value });
  };

  onSubmit = e => {
    e.preventDefault();

    this.props.onSubmit({
      name: this.state.name,
      number: this.state.number,
      id: uuidv4(),
    });

    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={name}
          onChange={this.onInputChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
        <input
          value={number}
          onChange={this.onInputChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
