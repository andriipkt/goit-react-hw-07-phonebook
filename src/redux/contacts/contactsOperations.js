import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContacts } from 'redux/tools/contactsAPI';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await getContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// addContact;

// deleteContact;
