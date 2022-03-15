import React from 'react';
import './QuestionPage.scss';
import Question from '../../components/Question/Question';

const QuestionPage = () => {
  return (
    <div className='question-page'>
      <Question questionIndex={2} />
    </div>
  );
};

export default QuestionPage;
