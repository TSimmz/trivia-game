import React from 'react';
import './Modal.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setModalOpen, selectModalPage } from 'features/Modal/modalSlice';
import modalPages from './modalPages.js';
import closeIcon from 'assets/close.svg';
import Login from 'components/Login/Login';
import SignUp from 'components/SignUp/SignUp';
import HighScores from '../HighScores/HighScores';

const Modal = () => {
  const dispatch = useDispatch();
  const modalPage = useSelector(selectModalPage);

  const renderModalChild = () => {
    switch (modalPage) {
      case modalPages.login:
        return <Login />;
      case modalPages.signUp:
        return <SignUp />;
      case modalPages.highScores:
        return <HighScores />;
      default:
        break;
    }
  };

  const handleCloseModal = (event) => {
    event.preventDefault();
    dispatch(setModalOpen(false));
  };

  return (
    <div className='modal-background'>
      <div className='modal'>
        <div className='close-modal'>
          <button className='close-button' onClick={handleCloseModal}>
            <img src={closeIcon} alt='Close modal' />
          </button>
        </div>
        {renderModalChild()}
      </div>
    </div>
  );
};

export default Modal;
