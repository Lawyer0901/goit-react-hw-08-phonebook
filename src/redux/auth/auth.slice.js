import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, refresh } from './auth.operation';
// import { addContact, fetchContacts } from 'redux/contact/contact.operation';
// login, logout, refresh
const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLogedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(refresh.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refresh.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.user = payload;
        // state.token = payload.token;
        state.isLogedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refresh.rejected, state => {
        state.isRefreshing = false;
        state.isLogedIn = false;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLogedIn = true;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLogedIn = true;
      })
      .addCase(logout.fulfilled, state => {
        state.user = {
          name: null,
          email: null,
        };
        state.token = null;
        state.isLogedIn = false;
      }),
});

export const authReducer = authSlice.reducer;
