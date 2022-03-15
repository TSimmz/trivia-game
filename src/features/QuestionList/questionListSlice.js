import { createSlice } from '@reduxjs/toolkit';

export const questionListSlice = createSlice({
  name: 'questionList',
  initialState: {
    questions: [],
    currentQuestionIndex: 0,
    currentQuestion: {},
    isLoading: false,
    hasLoadingError: false,
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
    getQuestionListFetch: (state) => {
      state.isLoading = true;
      state.hasLoadingError = false;
    },
    getQuestionListSuccess: (state, action) => {
      state.isLoading = false;
      state.hasLoadingError = false;
      state.questions = action.payload;
    },
    getQuestionListFailure: (state) => {
      state.isLoading = false;
      state.hasLoadingError = true;
    },
  },
});

export const {
  nextQuestion,
  previousQuestion,
  resetQuestionIndex,
  getQuestionListFetch,
  getQuestionListSuccess,
  getQuestionListFailure,
} = questionListSlice.actions;

export const selectQuestionList = (state) => state.questionList.questions;
export const selectCurrentQuestionIndex = (state) =>
  state.questionList.currentQuestionIndex;
export const selectAreQuestionsLoading = (state) =>
  state.questionList.isLoading;
export const selectIsQuestionsError = (state) =>
  state.questionList.hasLoadingError;

export default questionListSlice.reducer;
