import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addContactAsync,
  deleteContactAsync,
  getContactsAsync,
} from 'redux/tools/contactsAPI';

export const fetchContactsOp = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await getContactsAsync();
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContactOp = createAsyncThunk(
  'contacts/addContact',
  async (newContact, { rejectWithValue }) => {
    try {
      const response = await addContactAsync(newContact);

      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContactOp = createAsyncThunk(
  'contacts/deleteContact',
  async (contactID, { rejectWithValue }) => {
    try {
      const response = await deleteContactAsync(contactID);

      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
