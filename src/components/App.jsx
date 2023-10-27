import { useDispatch, useSelector } from 'react-redux';

import Header from './Header/Header';
import Phonebook from './Phonebook/Phonebook';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

import { useEffect } from 'react';
import { fetchContactsOp } from 'redux/contacts/operations';
import { selectError } from 'redux/selectors';
import Error from './Error/Error';

export function App() {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContactsOp());
  }, [dispatch]);

  return (
    <>
      <Header />
      <section className="container">
        <Phonebook />
        <Filter />
        {error ? <Error /> : <ContactList />}
      </section>
    </>
  );
}
