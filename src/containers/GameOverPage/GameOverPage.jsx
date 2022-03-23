import React from 'react';
import './GameOverPage.scss';
import { useSelector, useDispatch } from 'react-redux';
import { getQuestionListFetch } from 'features/QuestionList/questionListSlice';
import {
  selectCurrentScore,
  selectTotalScore,
  playGameAgain,
} from 'features/Game/gameSlice';
import { selectModalOpen, openLoginModal } from 'features/Modal/modalSlice';
import Modal from 'components/Modal/Modal';

const GameOverPage = () => {
  const dispatch = useDispatch();
  const userScore = useSelector(selectCurrentScore);
  const totalScore = useSelector(selectTotalScore);
  const isModalOpen = useSelector(selectModalOpen);

  const gameOverText = 'Congratulations!';

  const handlePlayAgain = (event) => {
    event.preventDefault();
    dispatch(getQuestionListFetch());
    dispatch(playGameAgain());
  };

  const handleSaveScore = (event) => {
    event.preventDefault();
    dispatch(openLoginModal());

    // Check if user is logged in
    // if not logged in, feed login modal
    // if logged in, feed save score and feed high score modal
  };

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
      {isModalOpen && <Modal />}
    </div>
  );
};

export default GameOverPage;
