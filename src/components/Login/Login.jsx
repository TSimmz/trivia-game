import React from 'react';
import './Login.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  setEmail,
  selectEmail,
  setPassword,
  selectPassword,
} from 'features/Login/loginSlice.js';

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
      <p className='signup-cta'>
        Don't have an account? <button>Sign Up</button>
      </p>
    </>
  );
};

export default Login;
