import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContacts, deleteContacts } from 'redux/operations';


const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  // reducers: {},
  reducers: builder => {
    const handlePending = state => (state.isLoading = true);

    const handleRejected = (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    };

    builder
      .addCase(fetchContacts.pending, handlePending) //fetch
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContacts.pending, handlePending) //add
      .addCase(addContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContacts.rejected, handleRejected)
      .addCase(deleteContacts.pending, handlePending) //delete
      .addCase(deleteContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const idx = state.items.findIndex(
          contact => contact.id === action.payload
        );
        state.items.splice(idx, 1);
      })
      .addCase(deleteContacts.rejected, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;

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
