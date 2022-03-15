import React from 'react';
import './Question.scss';
import AnswerCard from './AnswerCard/AnswerCard';
import Button from '../Button/Button';
import data from './test-question.json';

const Question = ({ questionIndex }) => {
  const question = data.results[questionIndex];
  const answers = [...question.incorrect_answers, question.correct_answer];
  let score = 4;

  const randomizeAnswers = (array) => {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  const renderAnswers = () => {
    const randomAnswers = randomizeAnswers(answers);

    return randomAnswers.map((answer) => <AnswerCard answerText={answer} />);
  };

  const questionNumber = () => {
    return (
      <p className='question-number'>{`${questionIndex}/${data.results.length}`}</p>
    );
  };

  return (
    <div className='question-container'>
      {questionNumber()}
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

      {/* correct or incorrect */}

      <div className='navigation-buttons'>
        <Button>Previous</Button>
        <Button>Next</Button>
      </div>
      <p className='score'>{`Score: ${score}`}</p>
    </div>
  );
};

export default Question;
