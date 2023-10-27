import { useDispatch, useSelector } from 'react-redux';

import Header from './Header/Header';
import Phonebook from './Phonebook/Phonebook';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

import { selectContacts, selectFilter } from 'redux/selectors';
import {} from 'redux/contacts/contactsSlice';
import { useEffect } from 'react';
import {
  addContactOp,
  deleteContactOp,
  fetchContactsOp,
} from 'redux/contacts/contactsOperations';
import { addFilterSlice } from 'redux/filter/filterSlice';
import { nanoid } from '@reduxjs/toolkit';

export function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContactsOp());
  }, [dispatch]);

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
    console.log('APPCONTACT', newContact);
    dispatch(addContactOp(newContact));
  };

  const hadnleDeleteContact = contactId => {
    dispatch(deleteContactOp(contactId));
    dispatch(fetchContactsOp());
  };

  const handleFilter = event => {
    dispatch(addFilterSlice(event.target.value));
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <>
      <Header />
      <section className="container">
        <Phonebook addContact={addContact} />
        <Filter handleFilter={handleFilter} value={filterValue} />
        <ContactList
          filteredContacts={filteredContacts}
          deleteContact={hadnleDeleteContact}
        />
      </section>
    </>
  );
}
