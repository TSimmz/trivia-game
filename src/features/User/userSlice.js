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
    addToUserScore: (state, action) => {
      state.currentScore += action.payload;
    },
    addToTotalScore: (state, action) => {
      state.totalScore += action.payload;
    },
    clearScore: (state) => {
      state.currentScore = 0;
      state.totalScore = 0;
    },
    setGameProgress: (state, action) => {
      state.isGameInProgress = action.payload;
    },
    setGameFinish: (state, action) => {
      state.isGameFinished = action.payload;
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
  addToUserScore,
  addToTotalScore,
  clearScore,
  setGameProgress,
  setGameFinish,
} = userSlice.actions;

export const selectUsername = (state) => state.user.username;
export const selectEmail = (state) => state.user.email;
export const selectPassword = (state) => state.user.password;
export const selectCurrentScore = (state) => state.user.currentScore;
export const selectTotalScore = (state) => state.user.totalScore;
export const selectIsGameProgress = (state) => state.user.isGameInProgress;
export const selectIsGameFinish = (state) => state.user.isGameFinished;

export default userSlice.reducer;
