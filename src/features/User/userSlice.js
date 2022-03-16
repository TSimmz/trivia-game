import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentScore: 0,
    totalScore: 0,
    isGameInProgress: false,
    isGameFinished: false,
  },
  reducers: {
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
  addToUserScore,
  addToTotalScore,
  clearScore,
  setGameProgress,
  setGameFinish,
} = userSlice.actions;

export const selectCurrentScore = (state) => state.user.currentScore;
export const selectTotalScore = (state) => state.user.totalScore;
export const selectIsGameProgress = (state) => state.user.isGameInProgress;
export const selectIsGameFinish = (state) => state.user.isGameFinished;

export default userSlice.reducer;
