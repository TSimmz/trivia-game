import { call, put, takeLatest } from 'redux-saga/effects';
import { signupUser } from 'config/auth';
import {
  getSignupUserFetch,
  getSignupUserSuccess,
  getSignupUserFailure,
} from 'features/User/userSlice';

function* workUserSignupFetch({ payload }) {
  const { username, email, password } = payload;

  const response = yield call(() => signupUser(username, email, password));

  if (typeof response === 'object') {
    yield put(getSignupUserSuccess(response));
  } else {
    // TODO handle error code returned from firebase
    yield put(getSignupUserFailure());
  }
}

function* userSignupSaga() {
  yield takeLatest(getSignupUserFetch.type, workUserSignupFetch);
}

export default userSignupSaga;
