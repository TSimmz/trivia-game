import { createSlice } from '@reduxjs/toolkit';

export const gameSlice = createSlice({
  name: 'game',
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
    setGameInProgress: (state, action) => {
      state.isGameInProgress = action.payload;
    },
    setGameFinish: (state, action) => {
      state.isGameFinished = action.payload;
    },
    playGameAgain: (state) => {
      state.currentScore = 0;
      state.totalScore = 0;
      state.isGameInProgress = true;
      state.isGameFinished = false;
    },
    resetGame: (state) => {
      state.currentScore = 0;
      state.totalScore = 0;
      state.isGameInProgress = false;
      state.isGameFinished = false;
    },
  },
});

export const {
  addToUserScore,
  addToTotalScore,
  clearScore,
  setGameInProgress,
  setGameFinish,
  playGameAgain,
  resetGame,
} = gameSlice.actions;

export const selectCurrentScore = (state) => state.game.currentScore;
export const selectTotalScore = (state) => state.game.totalScore;
export const selectIsGameInProgress = (state) => state.game.isGameInProgress;
export const selectIsGameFinish = (state) => state.game.isGameFinished;

export default gameSlice.reducer;
