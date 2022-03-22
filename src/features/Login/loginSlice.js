import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    username: '',
    email: '',
    password: '',
  },
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    clearUsername: (state) => {
      state.username = '';
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    clearEmail: (state) => {
      state.email = '';
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    clearPassword: (state) => {
      state.password = '';
    },
  },
});

export const {
  setUsername,
  clearUsername,
  setEmail,
  clearEmail,
  setPassword,
  clearPassword,
} = loginSlice.actions;

export const selectUsername = (state) => state.login.username;
export const selectEmail = (state) => state.login.email;
export const selectPassword = (state) => state.login.password;
