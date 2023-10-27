import { createSlice } from '@reduxjs/toolkit';
import {
  addContactOp,
  deleteContactOp,
  fetchContactsOp,
} from './contactsOperations';

const handlePending = (state, action) => {
  return {
    ...state,
    isLoading: true,
    error: null,
  };
};

const handleRejected = (state, action) => {
  return {
    ...state,
    error: action.payload,
    isLoading: false,
  };
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchContactsOp.pending, handlePending)
      .addCase(fetchContactsOp.fulfilled, (state, action) => {
        return {
          ...state,
          items: action.payload,
          isLoading: false,
        };
      })
      .addCase(fetchContactsOp.rejected, handleRejected)
      .addCase(addContactOp.pending, handlePending)
      .addCase(addContactOp.fulfilled, (state, action) => {
        console.log('action', action);
        return {
          ...state,
          items: [...state.items, action.payload],
          isLoading: false,
        };
      })
      .addCase(addContactOp.rejected, handleRejected)
      .addCase(deleteContactOp.pending, handlePending)
      .addCase(deleteContactOp.fulfilled, (state, action) => {
        return {
          ...state,
        };
      })
      .addCase(deleteContactOp.rejected, handleRejected);
  },
});

export const reducerContactsSlice = contactsSlice.reducer;
