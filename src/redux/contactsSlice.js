import { createSlice } from '@reduxjs/toolkit';

import { nanoid } from 'nanoid';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContacts,
  reducers: {
    addContact: {
      prepare(contact) {
        return {
          payload: {
            ...contact,
            id: nanoid(),
          },
        };
      },
        reducer(state, action) {
         state.push(action.payload);
      },
    },
    deleteContact(state, action) {
      const idx = state.findIndex(contact => contact.id === action.payload);
      state.splice(idx, 1);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;

export const { deleteContact, addContact } = contactsSlice.actions;

//selector
export const getContacts = state => state.contacts;
