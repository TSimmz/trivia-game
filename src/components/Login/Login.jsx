import React from 'react';
import './Login.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  setEmail,
  selectEmail,
  setPassword,
  selectPassword,
} from 'features/Login/loginSlice.js';
import { setModalPage } from 'features/Modal/modalSlice.js';
import modalPages from 'components/Modal/modalPages.js';
import Loading from 'components/Loading/Loading';
import {
  selectUser,
  getLoginUserFetch,
  selectIsLoginLoading,
} from 'features/User/userSlice';

const Login = () => {
  const dispatch = useDispatch();
  const email = useSelector(selectEmail);
  const password = useSelector(selectPassword);
  const isLoginLoading = useSelector(selectIsLoginLoading);
  const user = useSelector(selectUser);

  const handleEmailChange = (event) => {
    event.preventDefault();
    dispatch(setEmail(event.target.value));
  };

  const handlePasswordChange = (event) => {
    event.preventDefault();
    dispatch(setPassword(event.target.value));
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const userPayload = { email, password };

    dispatch(getLoginUserFetch(userPayload));
  };

  const handleSignUpCta = (event) => {
    event.preventDefault();
    dispatch(setModalPage(modalPages.signUp));
  };

  const renderLoginLoading = () => {
    const loadingText = 'Logging in...';
    return isLoginLoading && <Loading loadingText={loadingText} />;
  };

  const renderLoginForm = () => {
    return (
      !isLoginLoading &&
      !user.displayName && (
        <>
          <form className='login-form'>
            <input
              type='text'
              placeholder='Email'
              value={email}
              onChange={handleEmailChange}></input>
            <input
              type='password'
              placeholder='Password'
              value={password}
              onChange={handlePasswordChange}></input>
            <button
              type='submit'
              className='button inverted'
              onClick={handleLogin}>
              Login
            </button>
          </form>
          <p className='modal-cta'>
            Don't have an account?{' '}
            <button type='button' onClick={handleSignUpCta}>
              Sign Up
            </button>
          </p>
        </>
      )
    );
  };

  const renderLoginSuccess = () => {
    return (
      !isLoginLoading &&
      user.displayName && (
        <>
          <h1 className='welcome'>{`Welcome back, ${user.displayName}!`}</h1>
        </>
      )
    );
  };

  return (
    <>
      {renderLoginForm()}
      {renderLoginLoading()}
      {renderLoginSuccess()}
    </>
  );
};

export default Login;
