import axios from 'axios';

axios.defaults.baseURL =
  'https://657067eb09586eff6641503f.mockapi.io/phonebook';

//запит за всіма контактами
export const fetchContacts = async () => {
  const response = await axios.get('/contacts');

  return response.data;
};

// запит для додавання контакту
export const addContact = async newContact => {
  const response = await axios.post('/contacts', newContact);

  return response.data;
};

// запит для видалення контакту
export const deleteContact = async contactId => {
  const response = await axios.delete(`/contacts/${contactId}`);

  return response.data;
};
