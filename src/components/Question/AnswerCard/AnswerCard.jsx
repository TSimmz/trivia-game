import React from 'react';
import './AnswerCard.scss';

const AnswerCard = ({ answerText, handleAnswerClick }) => {
  const handleClick = (event) => {
    event.preventDefault();

    handleAnswerClick(answerText);
  };

  return (
    <button className='card' onClick={handleClick}>
      {answerText}
    </button>
  );
};

export default AnswerCard;
