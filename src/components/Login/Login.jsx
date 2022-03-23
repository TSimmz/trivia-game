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

const Login = () => {
  const dispatch = useDispatch();
  const email = useSelector(selectEmail);
  const password = useSelector(selectPassword);

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
  };

  const handleSignUpCta = (event) => {
    dispatch(setModalPage(modalPages.signUp));
  };

  return (
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
        <button type='submit' className='button inverted' onClick={handleLogin}>
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
  );
};

export default Login;
