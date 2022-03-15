import React from 'react';
import './LandingPage.scss';
import Button from '../../components/Button/Button';

const LandingPage = () => {
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
      <Button>Play!</Button>
    </div>
  );
};

export default LandingPage;
