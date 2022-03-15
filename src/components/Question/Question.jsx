import React, { useState } from 'react';
import './Question.scss';
import AnswerCard from './AnswerCard/AnswerCard';
import { replaceRegexCharacters } from './helpers/utils';

const Question = ({ question, answers }) => {
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [isQuestionAnswered, setIsQuestionAnswered] = useState(false);

  const handleAnswerClick = (answer) => {
    setIsQuestionAnswered(true);
    setIsAnswerCorrect(answer === question.correct_answer);
  };

  const renderAnswers = () => {
    return answers.map((answer) => (
      <AnswerCard
        key={answer}
        answerText={replaceRegexCharacters(answer)}
        handleAnswerClick={handleAnswerClick}
      />
    ));
  };

  return (
    <div className='question-container'>
      <p>
        <span className='green-text bold-text'>Category:</span>{' '}
        {question.category}
      </p>
      <p>
        <span className='green-text bold-text'>Difficulty:</span>{' '}
        {question.difficulty.toUpperCase()}
      </p>
      <h1>{replaceRegexCharacters(question.question)}</h1>
      {renderAnswers()}
      <p className={`answer ${isAnswerCorrect ? 'correct' : 'incorrect'}`}>
        {isQuestionAnswered && (isAnswerCorrect ? 'Correct!' : 'Incorrect!')}
      </p>
    </div>
  );
};

export default Question;
