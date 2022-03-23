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
import { setModalPage } from 'features/Modal/modalSlice.js';
import modalPages from 'components/Modal/modalPages.js';

const SignUp = () => {
  const dispatch = useDispatch();
  const username = useSelector(selectUsername);
  const email = useSelector(selectEmail);
  const password = useSelector(selectPassword);

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
  };

  const handleLoginCta = (event) => {
    event.preventDefault();
    dispatch(setModalPage(modalPages.login));
  };

  return (
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
  );
};

export default SignUp;
