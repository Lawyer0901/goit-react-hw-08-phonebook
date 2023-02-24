import { createSlice } from '@reduxjs/toolkit';
import { login, register } from './auth.operation';

const initialState = {
  user: {
    name: '',
    email: '',
    // password: '',
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
      }),
});

export const authReducer = authSlice.reducer;
