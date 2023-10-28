import React, { useState } from 'react';
import { Oval } from 'react-loader-spinner';
import css from '../ContactList.module.css';
import { useDispatch } from 'react-redux';
import { deleteContactOp } from 'redux/contacts/operations';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const [isLoadingEl, setIsLoadingEl] = useState(false);

  const handleDeleteContact = contactId => {
    setIsLoadingEl(true);
    dispatch(deleteContactOp(contactId));
  };

  return (
    <li key={contact.id} className={`list-group-item ${css.contactItem}`}>
      {contact.name}: {contact.number}
      {isLoadingEl ? (
        <Oval width={30} height={30} wrapperStyle={{ marginRight: '22px' }} />
      ) : (
        <button
          className={`btn btn-secondary ${css.contactBtn}`}
          onClick={() => handleDeleteContact(contact.id)}
        >
          Delete
        </button>
      )}
    </li>
  );
};

export default ContactItem;
