import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContactSlice: {
      prepare: ({ name, number }) => {
        const id = nanoid();
        return {
          payload: { id, name, number },
        };
      },

      reducer: (state, action) => {
        return [...state, action.payload];
      },
    },

    deleteContactSlice: (state, action) => {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContactSlice, deleteContactSlice } = contactsSlice.actions;
export const reducerContactsSlice = contactsSlice.reducer;
