import { combineReducers } from 'redux';
import { reducerContactsSlice } from './contacts/contactsSlice';
import { reducerFilterSlice } from './filterSlice/filterSlice';

export const rootReducer = combineReducers({
  contacts: reducerContactsSlice,
  filter: reducerFilterSlice,
});