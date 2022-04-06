import { call, put, takeLatest } from 'redux-saga/effects';
import { loginUser } from 'config/auth';
import {
  getLoginUserFetch,
  getLoginUserSuccess,
  getSignupUserFailure,
} from 'features/User/userSlice';

function* workUserLoginFetch({ payload }) {
  const { email, password } = payload;

  const response = yield call(() => loginUser(email, password));

  if (typeof response === 'object') {
    yield put(getLoginUserSuccess(response));
  } else {
    // TODO handle error code returned from firebase
    yield put(getSignupUserFailure());
  }
}

function* userLoginSaga() {
  yield takeLatest(getLoginUserFetch.type, workUserLoginFetch);
}

export default userLoginSaga;
