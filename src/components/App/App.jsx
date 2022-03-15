import { useSelector } from 'react-redux';
import LandingPage from '../../containers/LandingPage/LandingPage';
import QuestionPage from '../../containers/QuestionPage/QuestionPage';
import {
  selectIsGameFinish,
  selectIsGameProgress,
} from '../../features/User/userSlice';
import './App.scss';

const App = () => {
  const isGameInProgress = useSelector(selectIsGameProgress);
  const isGameFinished = useSelector(selectIsGameFinish);

  const renderGame = () => {
    if (isGameInProgress && !isGameFinished) return <QuestionPage />;

    return <LandingPage />;
  };

  return <div className='App'>{renderGame()}</div>;
};

export default App;
