import { useDispatch, useSelector } from 'react-redux';
import css from './ContactList.module.css';
import { selectContacts, selectFilter } from 'redux/selectors';
import { deleteContactOp } from 'redux/contacts/operations';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleDeleteContact = contactId => {
    dispatch(deleteContactOp(contactId));
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts();
  return (
    <ul className={`list-group list-group-flush ${css.contactList}`}>
      {filteredContacts.map(contact => (
        <li key={contact.id} className={`list-group-item ${css.contactItem}`}>
          {contact.name}: {contact.number}
          <button
            className={`btn btn-secondary ${css.contactBtn}`}
            onClick={() => handleDeleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
