import React, { useState, useEffect } from 'react';
import './Question.scss';
import AnswerCard from './AnswerCard/AnswerCard';
import { replaceHtmlCharacters } from './helpers/utils';

const Question = ({ question }) => {
  const [selectedAnswer, setSelectedAnswer] = useState({});
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [isQuestionAnswered, setIsQuestionAnswered] = useState(false);

  useEffect(() => {
    setIsQuestionAnswered(false);
  }, [question]);

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    setIsQuestionAnswered(true);
    setIsAnswerCorrect(answer.correct);
  };

  const renderAnswers = () => {
    return question.answers.map((answer) => {
      if (selectedAnswer && selectedAnswer.text === answer.text) {
        return (
          <AnswerCard
            key={answer.text}
            answer={answer}
            background={`${answer.correct ? 'correct-bkgd' : 'incorrect-bkgd'}`}
            handleAnswerClick={handleAnswerClick}
          />
        );
      }
      return (
        <AnswerCard
          key={answer.text}
          answer={answer}
          background={''}
          handleAnswerClick={handleAnswerClick}
        />
      );
    });
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
      <h1>{replaceHtmlCharacters(question.question)}</h1>
      {renderAnswers()}
      <p className={`answer ${isAnswerCorrect ? 'correct' : 'incorrect'}`}>
        {isQuestionAnswered && (isAnswerCorrect ? 'Correct!' : 'Incorrect!')}
      </p>
    </div>
  );
};

export default Question;
