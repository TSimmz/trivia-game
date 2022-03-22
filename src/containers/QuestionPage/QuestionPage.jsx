import React from 'react';
import './QuestionPage.scss';
import { useDispatch, useSelector } from 'react-redux';
import Question from 'components/Question/Question';
import {
  nextQuestion,
  previousQuestion,
  selectAreQuestionsLoading,
  selectCurrentQuestion,
  selectCurrentQuestionIndex,
  selectQuestionList,
} from 'features/QuestionList/questionListSlice';
import {
  selectCurrentScore,
  setGameInProgress,
  setGameFinish,
} from 'features/Game/gameSlice';
import Loading from 'components/Loading/Loading';

const QuestionPage = () => {
  const dispatch = useDispatch();

  const questionList = useSelector(selectQuestionList);
  const questionIndex = useSelector(selectCurrentQuestionIndex);
  const currentQuestion = useSelector(selectCurrentQuestion);

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

  const handleFinish = (event) => {
    event.preventDefault();
    dispatch(setGameInProgress(false));
    dispatch(setGameFinish(true));
  };

  return areQuestionsLoading ? (
    <Loading />
  ) : (
    <div className='question-page'>
      {questionList && questionNumber()}
      <Question question={currentQuestion} />
      <p
        className={`answer ${
          currentQuestion.isUserCorrect ? 'correct' : 'incorrect'
        }`}>
        {currentQuestion.userChoice.text &&
          (currentQuestion.isUserCorrect ? 'Correct!' : 'Incorrect!')}
      </p>
      <div className='navigation-buttons'>
        <button
          className='button'
          onClick={handlePrevious}
          disabled={!(questionIndex > 0)}>
          Previous
        </button>
        {questionIndex + 1 !== questionList.length ? (
          <button
            className='button'
            onClick={handleNext}
            disabled={
              !(questionIndex < questionList.length - 1) ||
              !currentQuestion.userChoice.text
            }>
            Next
          </button>
        ) : (
          <button
            className='button'
            onClick={handleFinish}
            disabled={!currentQuestion.userChoice.text}>
            Finish!
          </button>
        )}
      </div>
      <p className='score'>{`Score: ${userScore || 0}`}</p>
    </div>
  );
};

export default QuestionPage;
