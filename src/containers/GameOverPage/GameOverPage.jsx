import React, { useState } from 'react';
import './GameOverPage.scss';
import { useSelector, useDispatch } from 'react-redux';
import closeIcon from 'assets/close.svg';
import { getQuestionListFetch } from 'features/QuestionList/questionListSlice';
import {
  clearScore,
  selectCurrentScore,
  selectTotalScore,
  setGameInProgress,
  setGameFinish,
} from 'features/Game/gameSlice';
import {
  selectUsername,
  selectEmail,
  selectPassword,
  setUsername,
  setEmail,
  setPassword,
  clearUsername,
  clearPassword,
  clearEmail,
} from 'features/Login/loginSlice';
import { getSignupUserFetch } from 'features/User/userSlice';
import { addDocument } from 'config/db';

const GameOverPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();
  const username = useSelector(selectUsername);
  const email = useSelector(selectEmail);
  const password = useSelector(selectPassword);
  const userScore = useSelector(selectCurrentScore);
  const totalScore = useSelector(selectTotalScore);

  const saveText = 'Save your score!';

  const handleUsernameChange = (event) => {
    dispatch(setUsername(event.target.value));
  };

  const handleEmailChange = (event) => {
    dispatch(setEmail(event.target.value));
  };

  const handlePasswordChange = (event) => {
    dispatch(setPassword(event.target.value));
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    console.log('Saving score...');
    const doc = await addDocument(username, userScore, totalScore);
    console.log(doc);
  };

  const handleSignup = async (event) => {
    event.preventDefault();
    const user = { username, email, password };
    dispatch(getSignupUserFetch(user));
  };

  const handleCloseModal = (event) => {
    event.preventDefault();
    setIsModalOpen(false);
    dispatch(clearUsername());
    dispatch(clearEmail());
    dispatch(clearPassword());
  };

  const handlePlayAgain = (event) => {
    event.preventDefault();
    dispatch(clearScore());
    dispatch(setGameInProgress(true));
    dispatch(setGameFinish(false));
    dispatch(getQuestionListFetch());
  };

  const handleSaveScore = (event) => {
    event.preventDefault();
    setIsModalOpen(true);
  };

  const gameOverText = 'Congratulations!';
  return (
    <div className='game-over-container'>
      <h1>
        <div>
          <span className='green-text'>Game</span>
          <span className='blue-text'> Over!</span>
        </div>
      </h1>
      <p className='game-over-text'>{`${gameOverText}`}</p>
      <p className='game-over-text'>{`Final score: ${userScore}/${totalScore}`}</p>
      <button className='button play-again' onClick={handlePlayAgain}>
        Play Again
      </button>
      <button className='button save-button' onClick={handleSaveScore}>
        Save score
      </button>
      {isModalOpen && (
        <div className='save-modal'>
          <form>
            <button className='close-modal' onClick={handleCloseModal}>
              <img src={closeIcon} alt='Close save modal' />
            </button>
            <h1>{saveText}</h1>
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
            <button
              type='submit'
              className='button inverted'
              onClick={handleLogin}>
              Login
            </button>
            <button type='submit' className='button' onClick={handleSignup}>
              Sign Up
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default GameOverPage;
