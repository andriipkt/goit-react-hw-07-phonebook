const BASE_URL = 'https://6537e423a543859d1bb0fe2d.mockapi.io/contacts';

// /contacts/:id

export const getContacts = async dispatch => {
  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    console.log('Contacts data:', data);

    dispatch({ type: 'fetchContacts', payload: data });
  } catch (error) {
    console.error(error);
  }
};
