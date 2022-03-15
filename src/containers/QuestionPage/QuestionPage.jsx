import React from 'react';
import './QuestionPage.scss';
import Question from '../../components/Question/Question';
import Button from '../../components/Button/Button';
import { useSelector } from 'react-redux';
import {
  nextQuestion,
  previousQuestion,
  selectAreQuestionsLoading,
  selectCurrentQuestionIndex,
  selectQuestionList,
} from '../../features/QuestionList/questionListSlice';
import { selectCurrentScore } from '../../features/User/userSlice';
import { randomizeAnswers } from '../../components/Question/helpers/utils';
import { useDispatch } from 'react-redux';

const QuestionPage = () => {
  const dispatch = useDispatch();

  const questionList = useSelector(selectQuestionList);
  const questionIndex = useSelector(selectCurrentQuestionIndex);

  let currentQuestion = questionList[questionIndex];
  let currentAnswers = [];
  if (currentQuestion) {
    currentAnswers = randomizeAnswers([
      ...currentQuestion.incorrect_answers,
      currentQuestion.correct_answer,
    ]);
  }

  const userScore = useSelector(selectCurrentScore);
  const areQuestionsLoading = useSelector(selectAreQuestionsLoading);

  const questionNumber = () => {
    return (
      <p className='question-number'>{`${questionIndex + 1}/${
        questionList.length
      }`}</p>
    );
  };

  const handlePrevious = (event) => {
    event.preventDefault();
    if (questionIndex > 0) dispatch(previousQuestion());
  };

  const handleNext = (event) => {
    event.preventDefault();
    if (questionIndex < questionList.length - 1) dispatch(nextQuestion());
  };

  return (
    <div className='question-page'>
      {questionList && questionNumber()}
      {!areQuestionsLoading && (
        <Question question={currentQuestion} answers={currentAnswers} />
      )}
      <div className='navigation-buttons'>
        <Button onClick={handlePrevious} isDisabled={!(questionIndex > 0)}>
          Previous
        </Button>
        <Button
          onClick={handleNext}
          isDisabled={!(questionIndex < questionList.length - 1)}>
          Next
        </Button>
      </div>
      <p className='score'>{`Score: ${userScore || 0}`}</p>
    </div>
  );
};

export default QuestionPage;
