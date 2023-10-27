import { useState } from 'react';
import css from './Phonebook.module.css';
import { nanoid } from '@reduxjs/toolkit';
import { addContactOp } from 'redux/contacts/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';

function Phonebook() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return 'invalid name';
    }
  };

  const addContact = (name, number) => {
    const isNameExists = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isNameExists) {
      return alert(`${name} is already in contacts.`);
    }

    const newContact = {
      name,
      number,
      id: nanoid(),
    };

    dispatch(addContactOp(newContact));
  };

  const handleSubmit = event => {
    event.preventDefault();

    addContact(name, number);
    setName('');
    setNumber('');
  };

  return (
    <div className={css.phonebookWrapper}>
      <h1 className={css.phonebookTitle}>Phonebook</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nameInput" className={`form-label ${css.formLabel}`}>
          Name
        </label>
        <input
          className={`form-control ${css.contactInput}`}
          id="nameInput"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          value={name}
        />
        <label htmlFor="numberInput" className={`form-label ${css.formLabel}`}>
          Number
        </label>
        <input
          className={`form-control ${css.contactInput}`}
          id="numberInput"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          value={number}
        />
        <button type="submit" className="btn btn-primary">
          Add Contact
        </button>
      </form>
    </div>
  );
}

export default Phonebook;
