import { call, put, takeLatest } from 'redux-saga/effects';

function* workUserSignupFetch(loginData) {
  const { username, email, password } = loginData;

  const user = yield call(() => {});
}

function* userSignupSaga(loginData) {
  yield takeLatest('user/getLoginUserFetch', workUserSignupFetch(loginData));
}

export default userSignupSaga;
