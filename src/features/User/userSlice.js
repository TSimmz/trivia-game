import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentScore: 0,
    isGameInProgress: false,
    isGameFinished: false,
  },
  reducers: {
    addToScoreEasy: (state) => {
      state.currentScore += 1;
    },
    addToScoreMed: (state) => {
      state.currentScore += 2;
    },
    addToScoreHard: (state) => {
      state.currentScore += 3;
    },
    clearScore: (state) => {
      state.currentScore = 0;
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
  addToScoreEasy,
  addToScoreMed,
  addToScoreHard,
  clearScore,
  setGameProgress,
  setGameFinish,
} = userSlice.actions;

export const selectCurrentScore = (state) => state.user.currentScore;
export const selectIsGameProgress = (state) => state.user.isGameInProgress;
export const selectIsGameFinish = (state) => state.user.isGameFinished;

export default userSlice.reducer;
