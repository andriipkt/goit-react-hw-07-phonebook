const BASE_URL = 'https://6537e423a543859d1bb0fe2d.mockapi.io/contacts';

// /contacts/:id

export const getContacts = async () => {
  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};
