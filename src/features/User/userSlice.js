import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: '',
    email: '',
    password: '',
    currentScore: 0,
    totalScore: 0,
    isGameInProgress: false,
    isGameFinished: false,
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
} = userSlice.actions;

export const selectUsername = (state) => state.user.username;
export const selectEmail = (state) => state.user.email;
export const selectPassword = (state) => state.user.password;

export default userSlice.reducer;
