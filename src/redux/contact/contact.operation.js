// import { getToken } from '../auth/auth.selectors';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };

// Получаем все контакты с БэкЕнда
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      // const state = getToken(getState());
      const { data } = await axios.get('/contacts');
      // token.set(state);
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

// Добавляем контакт на БэкЕнд

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, { rejectWithValue }) => {
    try {
      // console.log(getState());
      // const state = getToken(getState());
      const { data } = await axios.post('/contacts', newContact);
      // token.set(state);
      console.log(data);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

// Удаляем контакт
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      // const state = getToken(getState());
      const { data } = await axios.delete(`/contacts/${contactId}`);

      // token.set(state);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
