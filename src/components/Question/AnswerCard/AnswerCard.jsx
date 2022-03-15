import React from 'react';
import './AnswerCard.scss';

const AnswerCard = ({ answer, background, handleAnswerClick }) => {
  const handleClick = (event) => {
    event.preventDefault();

    handleAnswerClick(answer);
  };

  return (
    <button className={`card ${background}`} onClick={handleClick}>
      {answer.text}
    </button>
  );
};

export default AnswerCard;
