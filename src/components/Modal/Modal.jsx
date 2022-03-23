import React from 'react';
import './Modal.scss';
import closeIcon from 'assets/close.svg';

const Modal = ({ children }) => {
  const handleCloseModal = () => {};
  return (
    <div className='modal-background'>
      <div className='modal'>
        <div className='close-modal'>
          <button className='close-button' onClick={handleCloseModal}>
            <img src={closeIcon} alt='Close modal' />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
