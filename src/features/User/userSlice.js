import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentScore: 0,
  },
  reducers: {
    addToScore: (state, action) => {
      state.currentScore += action.payload;
    },
    clearScore: (state) => {
      state.currentScore = 0;
    },
  },
});

export const { addToScore, clearScore } = userSlice.actions;

export const selectCurrentScore = (state) => state.questionList.currentScore;

export default userSlice.reducer;
