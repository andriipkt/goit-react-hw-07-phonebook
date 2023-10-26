import { createSlice, nanoid } from '@reduxjs/toolkit';
import { fetchContacts } from './contactsOperations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: (state, action) => {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    },

    [fetchContacts.fulfilled]: (state, action) => {
      return {
        ...state,
        items: action.payload,
        isLoading: false,
      };
    },

    [fetchContacts.rejected]: (state, action) => {
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    },
  },

  reducers: {
    addContactSlice: {
      prepare: ({ name, number }) => {
        const id = nanoid();
        return {
          payload: { id, name, number },
        };
      },

      reducer: (state, action) => {
        return {
          ...state,
          items: [...state.items, action.payload],
        };
      },
    },

    deleteContactSlice: (state, action) => {
      return {
        ...state,
        items: state.items.filter(contact => contact.id !== action.payload),
      };
    },
  },
});

export const { addContactSlice, deleteContactSlice } = contactsSlice.actions;
export const reducerContactsSlice = contactsSlice.reducer;
