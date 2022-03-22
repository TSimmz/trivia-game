import { call, put, takeLatest } from 'redux-saga/effects';
import { loginUser } from 'config/auth';

function* workUserLoginFetch(loginData) {
  const { username, email, password } = loginData;

  const user = yield call(() => {});
}

function* userLoginSaga(loginData) {
  yield takeLatest('user/getLoginUserFetch', workUserLoginFetch(loginData));
}

export default userLoginSaga;
