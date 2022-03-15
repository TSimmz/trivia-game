import { call, put, takeLatest } from 'redux-saga/effects';
import { getQuestionListSuccess } from './questionListSlice';
import {
  randomizeAnswers,
  replaceHtmlCharacters,
} from '../../components/Question/helpers/utils';

// Handler saga
function* workGetQuestionListFetch() {
  // Call the API
  const questionList = yield call(() =>
    fetch('https://opentdb.com/api.php?amount=10')
  );

  // Format the JSON
  const questionListJson = yield questionList.json();
  let questions = [];

  if (questionListJson) {
    questions = questionListJson.results.map((question) => {
      const incorrectAnswers = question.incorrect_answers.map((answer) => ({
        text: replaceHtmlCharacters(answer),
        correct: false,
        isSelected: false,
      }));

      const correctAnswer = {
        text: replaceHtmlCharacters(question.correct_answer),
        correct: true,
        isSelected: false,
      };

      const answers = randomizeAnswers([...incorrectAnswers, correctAnswer]);

      return {
        category: question.category,
        difficulty: question.difficulty,
        type: replaceHtmlCharacters(question.type),
        question: question.question,
        answers: answers,
      };
    });
  }

  // Dispatch the action
  yield put(getQuestionListSuccess(questions));
}

// Watcher saga
function* questionListSaga() {
  yield takeLatest(
    'questionList/getQuestionListFetch',
    workGetQuestionListFetch
  );
}

export default questionListSaga;
