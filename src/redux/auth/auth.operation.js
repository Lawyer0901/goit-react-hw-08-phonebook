import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.massage);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/login', credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.massage);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    thunkAPI.rejectWithValue(error.massage);
  }
});

export const refresh = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const { tokenState } = thunkAPI.getState().auth;
  if (!tokenState) {
    return thunkAPI.rejectWithValue('No valid token');
  }
  try {
    token.set(tokenState);
    const { data } = await axios.get('/users/current');
    return data;
  } catch (error) {
    thunkAPI.rejectWithValue(error.massage);
  }
});
