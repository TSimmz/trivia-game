import React from 'react';
import './AnswerCard.scss';

const AnswerCard = ({ answerText }) => {
  return <button className='card'>{answerText}</button>;
};

export default AnswerCard;
