import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilterValue = state => state.filter.value;

export const selectVisibleContacts = createSelector([
  selectContacts,
  selectFilterValue,
], (contacts, filter) => {
   contacts.filter(item => {
      const hasContact = item.name.tiLowerCase().includes(filter.toLowerCase())

      return hasContact
   })
});