import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import { all } from 'redux-saga/effects';

// Reducers
import userReducer from 'features/User/userSlice';
import gameReducer from 'features/Game/gameSlice';
import loginReducer from 'features/Login/loginSlice';
import questionListReducer from 'features/QuestionList/questionListSlice';
import modalReducer from 'features/Modal/modalSlice';

//Sagas
import questionListSaga from 'features/QuestionList/questionListSaga';
import userSignupSaga from 'features/User/sagas/userSignupSaga';

// Create the Saga
const saga = createSagaMiddleware();

// Combine sagas
function* rootSaga() {
  yield all([questionListSaga(), userSignupSaga()]);
}

// Create the store
const store = configureStore({
  reducer: {
    user: userReducer,
    game: gameReducer,
    login: loginReducer,
    questionList: questionListReducer,
    modal: modalReducer,
  },
  middleware: [saga],
});

// Run the Saga
saga.run(rootSaga);

export default store;
