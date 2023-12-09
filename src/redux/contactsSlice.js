import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from 'redux/operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder //fetch
      .addCase(fetchContacts.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }) //add
      .addCase(addContact.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }) //delete
      .addCase(deleteContact.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const idx = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(idx, 1);
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;

// const handlePending = state => (state.isLoading = true);

// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

// export const { deleteContact, addContact } = contactsSlice.actions;

// extraReducers: {
//fetch
// [fetchContacts.pending]: handlePending,
// [fetchContacts.fulfilled](state, action) {
//   state.isLoading = false;
//   state.error = null;
//   state.items.push(action.payload);
// },
// [fetchContacts.rejected]: handleRejected,
// add
// [addContacts.pending]: handlePending,
// [addContacts.fulfilled](state, action) {
//   state.isLoading = false;
//   state.error = null;
//   state.items.push(action.payload);
// },
// [addContacts.rejected]: handleRejected,
// delete
// [deleteContacs.pending]: handlePending,
// [deleteContacs.fulfilled](state, action) {
//   state.isLoading = false;
//   state.error = null;
//   const idx = state.findIndex(contact => contact.id === action.payload);
//   state.splice(idx, 1);
// },
// [deleteContacs.rejected]: handleRejected,
// },

//  reducers: {
//     addContact: {
//       prepare(contact) {
//         return {
//           payload: {
//             ...contact,
//             id: nanoid(),
//           },
//         };
//       },
//         reducer(state, action) {
//          state.push(action.payload);
//       },
//     },
//     deleteContact(state, action) {
//       const idx = state.findIndex(contact => contact.id === action.payload);
//       state.splice(idx, 1);
//     },
//   },
