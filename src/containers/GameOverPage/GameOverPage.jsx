import React from 'react';
import './GameOverPage.scss';
import { useSelector, useDispatch } from 'react-redux';
import { getQuestionListFetch } from '../../features/QuestionList/questionListSlice';
import {
  clearScore,
  selectCurrentScore,
  selectTotalScore,
  setGameProgress,
  setGameFinish,
} from '../../features/User/userSlice';

const GameOverPage = () => {
  const dispatch = useDispatch();
  const userScore = useSelector(selectCurrentScore);
  const totalScore = useSelector(selectTotalScore);

  const handlePlayAgain = (event) => {
    event.preventDefault();
    dispatch(clearScore());
    dispatch(setGameProgress(true));
    dispatch(setGameFinish(false));
    dispatch(getQuestionListFetch());
  };

  const handleSaveScore = (event) => {
    event.preventDefault();
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
      <button className='button save' onClick={handleSaveScore}>
        Save score
      </button>
    </div>
  );
};

export default GameOverPage;
