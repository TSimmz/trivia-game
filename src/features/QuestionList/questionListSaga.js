import { call, put, takeLatest } from 'redux-saga/effects';
import { getQuestionListSuccess } from './questionListSlice';
import { randomizeAnswers, replaceHtmlCharacters } from 'helpers/utils';

// Handler saga
function* workGetQuestionListFetch() {
  // Call the API
  const questionList = yield call(() =>
    fetch('https://opentdb.com/api.php?amount=3')
  );

  // Format the JSON
  const questionListJson = yield questionList.json();
  let questions = [];

  if (questionListJson) {
    questions = questionListJson.results.map((question, index) => {
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
        id: index,
        category: question.category,
        difficulty: question.difficulty,
        type: question.type,
        question: replaceHtmlCharacters(question.question),
        answers: answers,
        userChoice: {},
        isUserCorrect: false,
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
