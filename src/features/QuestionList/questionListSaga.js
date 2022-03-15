import { call, put, takeLatest } from 'redux-saga/effects';
import { getQuestionListSuccess } from './questionListSlice';
import {
  randomizeAnswers,
  replaceRegexCharacters,
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
        text: replaceRegexCharacters(answer),
        correct: false,
      }));

      const correctAnswer = {
        text: replaceRegexCharacters(question.correct_answer),
        correct: true,
      };

      const answers = randomizeAnswers([...incorrectAnswers, correctAnswer]);

      return {
        category: question.category,
        difficulty: question.difficulty,
        type: replaceRegexCharacters(question.type),
        question: question.question,
        answers: answers,
      };
    });
  }

  console.log(questions);

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
