import React, { useState } from 'react';
import './Question.scss';
import AnswerCard from './AnswerCard/AnswerCard';

const Question = ({ question, answers }) => {
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [isQuestionAnswered, setIsQuestionAnswered] = useState(false);

  const formattedQuestion = question.question.replace(/&quot;/g, '\\"');
  const formattedAnswers = answers.forEach((answer) =>
    answer.replace(/&quot;/g, '\\"')
  );

  const handleAnswerClick = (answer) => {
    setIsQuestionAnswered(true);
    setIsAnswerCorrect(answer === question.correct_answer);
  };

  const renderAnswers = () => {
    return answers.map((answer) => (
      <AnswerCard
        key={answer}
        answerText={answer}
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
      <h1>{question.question}</h1>
      {renderAnswers()}
      <p className={`answer ${isAnswerCorrect ? 'correct' : 'incorrect'}`}>
        {isQuestionAnswered && (isAnswerCorrect ? 'Correct!' : 'Incorrect!')}
      </p>
    </div>
  );
};

export default Question;
