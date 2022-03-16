import React from 'react';
import { useDispatch } from 'react-redux';
import { updateCurrentQuestion } from '../../features/QuestionList/questionListSlice';
import './Question.scss';

const Question = ({ question }) => {
  const dispatch = useDispatch();

  const handleAnswerClick = (event) => {
    let q = { ...question };
    q.userChoice = q.answers.find((answer) => answer.text === event.target.id);
    q.isUserCorrect = q.userChoice.correct;
    dispatch(updateCurrentQuestion(q));
  };

  const renderAnswers = () => {
    return question.answers.map((answer) => {
      if (question.userChoice && question.userChoice.text === answer.text) {
        return (
          <button
            id={answer.text}
            key={answer.text}
            className={`answer-button no-click ${
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
          className={`answer-button ${question.userChoice.text && 'no-click'}`}
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
    </div>
  );
};

export default Question;
