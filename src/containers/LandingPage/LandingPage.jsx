import React from 'react';
import './LandingPage.scss';
import { useDispatch } from 'react-redux';
import { getQuestionListFetch } from '../../features/QuestionList/questionListSlice';
import { setGameInProgress } from '../../features/Game/gameSlice';

const LandingPage = () => {
  const dispatch = useDispatch();

  const handlePlayButton = (event) => {
    event.preventDefault();
    dispatch(getQuestionListFetch());
    dispatch(setGameInProgress(true));
  };

  return (
    <div className='landing-container'>
      <h1>
        <div>
          <span className='green-text'>Trust</span>
          <span className='blue-text'>Layer</span>
        </div>
        <div className='line-two'>Trivia</div>
      </h1>
      <p className='tagline'>A whacky, crazy, fun trivia game!</p>
      <p className='description'>
        Get questions from all sorts of categories and difficulties. Shoot for
        the high score and compare against other players!
      </p>
      <button className='button play' onClick={handlePlayButton}>
        Play!
      </button>
    </div>
  );
};

export default LandingPage;
