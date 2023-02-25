import { getToken } from '@chakra-ui/react';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { getState, rejectWithValue }) => {
    try {
      const state = getToken(getState());
      //   console.log(state);

      const { data } = await axios.get('/contacts');
      //   console.log(data);
      token.set(state.data.token);
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { getState, rejectWithValue }) => {
    try {
      const state = getToken(getState());
      const { data } = await axios.delete(`/contacts/${contactId}`);

      token.set(state.data.token);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, { rejectWithValue, getState }) => {
    try {
      const state = getToken(getState());

      const { data } = await axios.post('/contacts', newContact);

      token.set(state.data);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
