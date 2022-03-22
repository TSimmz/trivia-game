import React from 'react';
import './Question.scss';
import { useDispatch } from 'react-redux';
import { updateCurrentQuestion } from 'features/QuestionList/questionListSlice';
import { addToUserScore, addToTotalScore } from 'features/Game/gameSlice';

const Question = ({ question }) => {
  const dispatch = useDispatch();

  const handleAnswerClick = (event) => {
    let q = { ...question };
    q.userChoice = q.answers.find((answer) => answer.text === event.target.id);
    q.isUserCorrect = q.userChoice.correct;
    dispatch(updateCurrentQuestion(q));

    const questionValue = getQuestionValue(q.difficulty);
    if (q.isUserCorrect) {
      dispatch(addToUserScore(questionValue));
    }

    dispatch(addToTotalScore(questionValue));
  };

  const getQuestionValue = (difficulty) => {
    switch (difficulty.toUpperCase()) {
      case 'EASY':
        return 1;
      case 'MEDIUM':
        return 2;
      case 'HARD':
        return 3;
      default:
        break;
    }
  };

  const renderAnswers = () => {
    return question.answers.map((answer) => {
      // User selection
      if (question.userChoice && question.userChoice.text === answer.text) {
        return (
          <button
            id={answer.text}
            key={answer.text}
            className={`answer-button no-click ${
              answer.correct
                ? 'correct-bkgd selected-correct'
                : 'incorrect-bkgd selected-incorrect'
            }`}
            onClick={handleAnswerClick}>
            {answer.text}
          </button>
        );
      }
      // Highlight the correct answer if incorrect
      if (question.userChoice.text && answer.correct) {
        return (
          <button
            id={answer.text}
            key={answer.text}
            className={`answer-button no-click correct-bkgd`}
            onClick={handleAnswerClick}>
            {answer.text}
          </button>
        );
      }

      // Return a normal button if not clicked
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
