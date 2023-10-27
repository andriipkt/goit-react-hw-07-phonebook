import axios from 'axios';

axios.defaults.baseURL = 'https://6537e423a543859d1bb0fe2d.mockapi.io/contacts';

export const getContactsAsync = async () => {
  const response = await axios.get();

  return response.data;
};

export const addContactAsync = async newContact => {
  const response = await axios.post('', newContact);

  return response.data;
};

export const deleteContactAsync = async contactID => {
  const response = await axios.delete(`/${contactID}`);
  return response.data;
};
