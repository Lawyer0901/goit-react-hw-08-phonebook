import { createSlice } from '@reduxjs/toolkit';
import { login, logout, refresh, register } from './auth.operation';

const initialState = {
  user: {
    name: '',
    email: '',
  },
  token: null,
  isLogedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
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
          name: '',
          email: '',
        };
        state.token = null;
        state.isLogedIn = false;
      })
      .addCase(refresh.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.user = payload;
        state.isLogedIn = true;
      }),
});

export const authReducer = authSlice.reducer;
