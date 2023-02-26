import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './contact.operation';

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers:
    // builder => {
    //   builder
    //     .addCase(addContact.pending, state => (state.isLoading = true))
    //     .addCase(addContact.fulfilled, (state, action) => {
    //       state.isLoading = false;
    //       state.error = null;
    //       state.items = [...state.items, action.payload];
    //     })
    //     .addCase(addContact.rejected, (state, action) => {
    //       state.isLoading = false;
    //       state.error = action.payload;
    //     });
    // },

    {
      [fetchContacts.pending]: state => {
        state.isLoading = true;
      },
      [fetchContacts.fulfilled]: (state, { payload }) => {
        state.items = payload;
        state.isLoading = false;
        // console.log(payload);
      },
      [fetchContacts.rejected]: state => {
        state.isLoading = false;
        state.error = 'error';
        console.log(state.error);
      },
      [addContact.pending]: state => {
        state.isLoading = true;
      },
      [addContact.fulfilled]: (state, action) => {
        state.isLoading = false;
        state.error = null;
        // state.items.push(action.payload);
        state.items = [...state.items, action.payload];
      },

      [addContact.rejected]: (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      },

      [deleteContact.pending]: state => {
        state.isLoading = true;
      },
      [deleteContact.fulfilled]: (state, action) => {
        state.isLoading = false;
        state.error = null;

        state.items = state.items.filter(item => item.id !== action.payload.id);
      },
      [deleteContact.rejected]: (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      },
    },
});

export default contactSlice.reducer;
