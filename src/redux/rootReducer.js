import { combineReducers } from 'redux';
import { reducerContactsSlice } from './contacts/contactsSlice';
import { reducerFilterSlice } from './filter/filterSlice';

export const rootReducer = combineReducers({
  contacts: reducerContactsSlice,
  filter: reducerFilterSlice,
});
