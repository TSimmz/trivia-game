import React from 'react';
import './SignUp.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  setUsername,
  selectUsername,
  setEmail,
  selectEmail,
  setPassword,
  selectPassword,
} from 'features/Login/loginSlice.js';
import Loading from 'components/Loading/Loading';
import {
  selectUser,
  getSignupUserFetch,
  selectIsSignupLoading,
} from 'features/User/userSlice';
import { setModalPage } from 'features/Modal/modalSlice.js';
import modalPages from 'components/Modal/modalPages.js';

const SignUp = () => {
  const dispatch = useDispatch();
  const username = useSelector(selectUsername);
  const email = useSelector(selectEmail);
  const password = useSelector(selectPassword);
  const isSignUpLoading = useSelector(selectIsSignupLoading);
  const user = useSelector(selectUser);

  const handleUsernameChange = (event) => {
    event.preventDefault();
    dispatch(setUsername(event.target.value));
  };

  const handleEmailChange = (event) => {
    event.preventDefault();
    dispatch(setEmail(event.target.value));
  };

  const handlePasswordChange = (event) => {
    event.preventDefault();
    dispatch(setPassword(event.target.value));
  };

  const handleSignup = (event) => {
    event.preventDefault();
    const userPayload = { username, email, password };

    dispatch(getSignupUserFetch(userPayload));
  };

  const handleLoginCta = (event) => {
    event.preventDefault();
    dispatch(setModalPage(modalPages.login));
  };

  const renderSignUpLoading = () => {
    const loadingText = 'Creating account...';
    return isSignUpLoading && <Loading loadingText={loadingText} />;
  };

  const renderSignupForm = () => {
    return (
      !isSignUpLoading &&
      !user.displayName && (
        <>
          <form className='signup-form'>
            <input
              type='text'
              placeholder='Username'
              value={username}
              onChange={handleUsernameChange}></input>
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
            <button type='submit' className='button' onClick={handleSignup}>
              Sign Up
            </button>
          </form>
          <p className='modal-cta'>
            Already have an account?{' '}
            <button type='button' onClick={handleLoginCta}>
              Login
            </button>
          </p>
        </>
      )
    );
  };

  const renderSignUpComplete = () => {
    return (
      !isSignUpLoading &&
      user.displayName && (
        <>
          <h1 className='welcome'>{`Welcome, ${user.displayName}!`}</h1>
        </>
      )
    );
  };

  return (
    <>
      {renderSignupForm()}
      {renderSignUpLoading()}
      {renderSignUpComplete()}
    </>
  );
};

export default SignUp;
