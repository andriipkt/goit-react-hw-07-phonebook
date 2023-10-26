import { useDispatch, useSelector } from 'react-redux';

import Header from './Header/Header';
import Phonebook from './Phonebook/Phonebook';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

import { selectContacts, selectFilter } from 'redux/selectors';
import {
  addContactSlice,
  deleteContactSlice,
} from 'redux/contacts/contactsSlice';
import { addFilterSlice } from 'redux/filterSlice/filterSlice';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contactsOperations';

export function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const addContact = (name, number) => {
    const isNameExists = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isNameExists) {
      return alert(`${name} is already in contacts.`);
    }

    dispatch(addContactSlice({ name, number }));
  };

  const hadnleDeleteContact = contactId => {
    dispatch(deleteContactSlice(contactId));
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