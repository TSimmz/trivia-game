import { createSlice } from '@reduxjs/toolkit';

export const questionListSlice = createSlice({
  name: 'questionList',
  initialState: {
    questions: [],
    currentQuestionIndex: 0,
    currentScore: 0,
  },
  reducers: {
    nextQuestion: (state) => {
      state.currentQuestionIndex += 1;
    },
    previousQuestion: (state) => {
      state.currentQuestionIndex -= 1;
    },
    resetQuestionIndex: (state) => {
      state.currentQuestionIndex = 0;
    },
  },
});

export const { nextQuestion, previousQuestion, resetQuestionIndex } =
  questionListSlice.actions;

export const selectQuestionList = (state) => state.questionList.questions;
export const selectCurrentQuestionIndex = (state) =>
  state.questionList.currentQuestionIndex;

export default questionListSlice.reducer;
