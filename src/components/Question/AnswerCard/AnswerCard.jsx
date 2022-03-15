import React from 'react';
import './AnswerCard.scss';

const AnswerCard = ({ answer, handleAnswerClick }) => {
  const handleClick = (event) => {
    event.preventDefault();

    handleAnswerClick(answer.correct);
  };

  return (
    <button className='card' onClick={handleClick}>
      {answer.text}
    </button>
  );
};

export default AnswerCard;
