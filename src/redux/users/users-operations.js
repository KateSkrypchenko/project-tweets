import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://64787472362560649a2dcdc7.mockapi.io/api',
});

export const fetchUsers = createAsyncThunk('users/fetchAll', async (credentials, thunkAPI) => {
  try {
    console.log('start');
    const response = await instance.get('/users', credentials);
    console.log(response);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
