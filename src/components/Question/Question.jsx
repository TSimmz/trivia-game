import React, { useState, useEffect } from 'react';
import './Question.scss';

const Question = ({ question }) => {
  const [selectedAnswer, setSelectedAnswer] = useState({});
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [isQuestionAnswered, setIsQuestionAnswered] = useState(false);

  useEffect(() => {
    setIsQuestionAnswered(false);
  }, [question]);

  const handleAnswerClick = (event) => {
    event.preventDefault();

    // setSelectedAnswer(answer);
    // setIsQuestionAnswered(true);
    // setIsAnswerCorrect(answer.correct);
  };

  const renderAnswers = () => {
    return question.answers.map((answer) => {
      if (selectedAnswer && selectedAnswer.text === answer.text) {
        return (
          <button
            id={answer.text}
            key={answer.text}
            className={`answer-button ${
              answer.correct ? 'correct-bkgd' : 'incorrect-bkgd'
            }`}
            onClick={handleAnswerClick}>
            {answer.text}
          </button>
        );
      }
      return (
        <button
          id={answer.text}
          key={answer.text}
          className='answer-button'
          onClick={handleAnswerClick}>
          {answer.text}
        </button>
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
      <h1>{question.question}</h1>
      {renderAnswers()}
      <p className={`answer ${isAnswerCorrect ? 'correct' : 'incorrect'}`}>
        {isQuestionAnswered && (isAnswerCorrect ? 'Correct!' : 'Incorrect!')}
      </p>
    </div>
  );
};

export default Question;
