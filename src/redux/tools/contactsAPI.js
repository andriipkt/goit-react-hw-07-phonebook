const BASE_URL = 'https://6537e423a543859d1bb0fe2d.mockapi.io/contacts';

export const getContactsAsync = async () => {
  try {
    const response = await fetch(BASE_URL, {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    });
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const addContactAsync = async newContact => {
  try {
    const response = await fetch(
      'https://6537e423a543859d1bb0fe2d.mockapi.io/contacts',
      {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(newContact),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteContactAsync = async contactID => {
  try {
    const response = await fetch(`${BASE_URL}/${contactID}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
