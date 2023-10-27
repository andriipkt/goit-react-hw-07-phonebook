import { useSelector } from 'react-redux';
import css from './ContactList.module.css';
import { selectContacts, selectFilter } from 'redux/selectors';
import { Oval } from 'react-loader-spinner';
import ContactItem from './ContactItem/ContactItem';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectFilter);

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts();
  return (
    <ul className={`list-group list-group-flush ${css.contactList}`}>
      {filteredContacts.length > 0 ? (
        filteredContacts.map(contactEl => (
          <ContactItem key={contactEl.id} contact={contactEl} />
        ))
      ) : (
        <Oval wrapperStyle={{ marginTop: '40px', marginLeft: '60px' }} />
      )}
    </ul>
  );
};

export default ContactList;
