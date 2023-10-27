import { useDispatch } from 'react-redux';

import Header from './Header/Header';
import Phonebook from './Phonebook/Phonebook';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

import { useEffect } from 'react';
import { fetchContactsOp } from 'redux/contacts/operations';

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsOp());
  }, [dispatch]);

  return (
    <>
      <Header />
      <section className="container">
        <Phonebook />
        <Filter />
        <ContactList />
      </section>
    </>
  );
}
