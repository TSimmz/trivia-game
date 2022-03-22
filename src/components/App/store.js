import userReducer from '../../features/User/userSlice';
import gameReducer from '../../features/Game/gameSlice';
import questionListSlice from '../../features/QuestionList/questionListSlice';
import questionListSaga from '../../features/QuestionList/questionListSaga';

import createSagaMiddleware from '@redux-saga/core';
import { configureStore } from '@reduxjs/toolkit';

// Create the Saga
const saga = createSagaMiddleware();

// Create the store
const store = configureStore({
  reducer: {
    user: userReducer,
    game: gameReducer,
    questionList: questionListSlice,
  },
  middleware: [saga],
});

// Run the Saga
saga.run(questionListSaga);

export default store;
