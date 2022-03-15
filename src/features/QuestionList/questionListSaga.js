import { call, put, takeLatest } from 'redux-saga/effects';
import { getQuestionListSuccess } from './questionListSlice';

// Handler saga
function* workGetQuestionListFetch() {
  // Call the API
  const questionList = yield call(() =>
    fetch('https://opentdb.com/api.php?amount=10')
  );

  // Format the JSON
  const questionListJson = yield questionList.json();
  let questions = questionListJson.results;

  // Dispatch the action
  yield put(getQuestionListSuccess(questions));
}

// Watcher saga
function* questionListSaga() {
  yield takeLatest(
    'questionList/getQuestionListFetch',
    workGetQuestionListFetch
  );
}

export default questionListSaga;
