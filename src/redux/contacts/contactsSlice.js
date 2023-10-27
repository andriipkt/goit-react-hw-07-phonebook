import { createSlice } from '@reduxjs/toolkit';
import {
  addContactOp,
  /*   deleteContactOp, */
  fetchContactsOp,
} from './operations';
import {
  handleFulfilled,
  handleFulfilledAdd,
  handleFulfilledfetch,
  handlePending,
  handleRejected,
} from './helpers';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchContactsOp.fulfilled, handleFulfilledfetch)
      .addCase(addContactOp.fulfilled, handleFulfilledAdd)
      // .addCase(deleteContactOp.fulfilled, handleFulfilledDelete)
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected)
      .addMatcher(
        action => action.type.endsWith('/fulfilled'),
        handleFulfilled
      );
  },
});

export const reducerContactsSlice = contactsSlice.reducer;

/* не сетиться ерор 
як деліте бачить контакт слайс 
проблеми з рендером після деліт */
